import fs from "fs";
import { sources } from "./config.js";
import { fetchFromSource } from "./request.js";
import { openFile } from "./util.js";

async function getInventory() {
  const startTime = new Date().getTime();

  const inventory = {
    timestamp: startTime,
    cars: [],
  };

  for (const source of sources) {
    try {
      inventory.cars = inventory.cars.concat(await fetchFromSource(source));
    } catch (err) {
      console.error(`❌ ${source.name}, ${source.province}`, err.message);
    }
  }

  const outputDir = "./output";
  const jsonFilename = `${outputDir}/inventory-pre-owned.json`;
  compare(inventory, jsonFilename)

  // Sort by price ascending
  inventory.cars.sort((a, b) => (a.price || 0) - (b.price || 0));

  // Remove duplicates
  const inventoryToDisplay = {
    ...inventory,
    cars: inventory.cars.filter((obj1, i, arr) => arr.findIndex(obj2 => (obj2.vin === obj1.vin)) === i),
  };

  // Create HTML
  const html = fs.readFileSync("template.html", "utf8").replace(`"<--INVENTORY-->"`, JSON.stringify(inventoryToDisplay, null, 2));
  const htmlFilename = `${outputDir}/inventory-pre-owned.html`

  // Write data to disk
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(jsonFilename, JSON.stringify(inventory), "utf-8");
  fs.writeFileSync(htmlFilename, html, "utf-8");

  console.log(`✅ Found ${inventoryToDisplay.cars.length} car(s) in ${(new Date().getTime() - startTime) / 1000}s`);

  return htmlFilename;
}

function compare(inventory, jsonFilename) {
  // Get previous inventory
  let existingInventory = undefined;
  if (fs.existsSync(jsonFilename)) {
    existingInventory = JSON.parse(fs.readFileSync(jsonFilename, "utf8"));
  }
  if (!existingInventory) {
    return;
  }
  let added = new Set();
  let removed = new Set();
  // Detect price changes and new additions
  for (const car of inventory.cars) {
    let found = false;
    for (const existingCar of existingInventory.cars || []) {
      if (existingCar.vin == car.vin) {
        found = true
        if (existingCar.priceHistory?.length > 0) {
          if (existingCar.priceHistory.at(-1) != car.price) {
            car.priceHistory = existingCar.priceHistory.concat([car.price]);
          } else {
            car.priceHistory = existingCar.priceHistory;
          }
        } else if (car.price != existingCar.price) {
          car.priceHistory = [existingCar.price, car.price];
        }
      }
    }
    if (!found) {
      added.add(car.vin);
    }
  }
  // Detect removals
  for (const existingCar of existingInventory.cars || []) {
    let found = false;
    for (const car of inventory.cars) {
      if (car.vin == existingCar.vin) {
        found = true;
        break;
      }
    }
    if (!found) {
      removed.add(existingCar.vin)
    }
  }
  inventory.diff = {
    timestamp: existingInventory.timestamp,
    added: [...added],
    removed: [...removed],
  }
}

async function main() {
  openFile(await getInventory());
}

main().catch(console.error);
