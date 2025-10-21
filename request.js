import https from "https";
import { SourceType } from "./config.js";

export async function fetchFromSource(source) {
  switch (source.type) {
    case SourceType.ALGOLIA:
      return await fetchFromAlgolia(source);
    case SourceType.WEBSITE:
      return await fetchFromWebsite(source);
    case SourceType.SM360:
      return await fetchFromSM360(source);
  }
}

async function fetchFromAlgolia(source) {
  const filters = source.data.filters || ["type:Certified Pre-Owned"];
  const query = `facetFilters=[["make:Mercedes-Benz"],[${filters.map(f => `"${f}"`)}]]&hitsPerPage=500&maxValuesPerFacet=250`;
  const body = {
    requests: [
      {
        indexName: source.data.index,
        params: query,
      },
    ],
  };

  const data = await execute(`https://${source.data.id}-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.9.1)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.22.4)&x-algolia-api-key=${source.data.key}&x-algolia-application-id=${source.data.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return (
    data.results?.[0]?.hits?.map((hit) => ({
      link: hit.link,
      title: hit.title_vrp || `${hit.year} ${hit.make} ${hit.model}`,
      price: isNaN(parseInt(hit.our_price || hit.price))
        ? 0
        : parseInt(hit.our_price || hit.price),
      mileage: hit.miles || hit.mileage,
      image: hit.thumbnail || hit.image_url,
      year: isNaN(parseInt(hit.year)) ? undefined : parseInt(hit.year),
      model: hit.model,
      trim: hit.trim,
      source: source.name,
      days_in_stock: hit.days_in_stock,
      vin: hit.vin,
      color: hit.ext_color,
      province: source.province,
    })) || []
  );
}

async function fetchFromWebsite(source) {
  const apiUrl = source.data.url;
  const url = `${apiUrl}/en/certified-inventory/api/listing?imageSize=w400h300c&makeId=573&limit=500`;

  const data = await execute(url);

  return (data.vehicles || []).map((v) => ({
    link: `${apiUrl}/en/used-inventory/${v.make.slug}/${v.model.slug}/${v.year}-${v.make.slug}-${v.model.slug}-id${v.vehicleId}`,
    title: `${v.year} ${v.make?.name || ""} ${v.model?.name || ""}`,
    price: isNaN(parseInt(v.salePrice || v.listPrice))
      ? 0
      : parseInt(v.salePrice || v.listPrice),
    mileage: v.odometer,
    image: v.multimedia?.mainPictureCompleteUrl,
    year: isNaN(parseInt(v.year)) ? undefined : parseInt(v.year),
    model: v.model?.name,
    trim: v.trim?.name,
    source: source.name,
    days_in_stock: v.daysInInventory,
    vin: v.serialNo,
    color: v.exteriorColor?.colorDescription,
    province: source.province,
  }));
}

async function fetchFromSM360(source) {
  const body = {
    pagination: { pageNumber: 1, pageSize: 500 },
    paymentOptionRequest: {
      cashDown: 0,
      financePlan: null,
      kmPerYearPlan: null,
      lien: 0,
      paymentFrequency: 52,
      purchaseMethod: "cash",
      saleType: "retail",
      taxPlan: "standard",
      term: 96,
      tradeIn: 0,
      priceIncreaseRollCount: 0,
    },
    makePriority: [4],
    sortList: [{ direction: "ASC", vehicleSortParameter: "SALE_PRICE" }],
    vehicle: {
      colanderSlug: "certified",
      vehicleInventoryStatuses: ["FOR_SALE", "SOLD", "VIRTUAL", "ON_HOLD"],
    },
    isMarketplaceRequest: false,
  };

  const url = `https://service.vehicles.sm360.ca/inventory/vehicles?includeMetadata=true&location=${source.province}&organizationId=${source.data.organizationId}&organizationUnitId=${source.data.organizationUnitId}`;

  const data = await execute(url, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(body),
  });

  return (
    data.inventoryVehicles?.map((v) => ({
      link: `${source.data.url}/en/used-inventory/${v.make.slug}/${v.model.slug}/${v.year}-${v.make.slug}-${v.model.slug}-id${v.vehicleId}`,
      title: `${v.year} ${v.make?.name || ""} ${v.model?.name || ""}`,
      price: isNaN(parseInt(v.salePrice || v.listPrice))
        ? 0
        : parseInt(v.salePrice || v.listPrice),
      mileage: v.odometer,
      image: `https://img.sm360.ca/images/inventory/${v.multimedia?.mainPicture}`,
      year: isNaN(parseInt(v.year)) ? undefined : parseInt(v.year),
      model: v.model?.name,
      trim: v.trim?.name,
      source: source.name,
      days_in_stock: v.daysInInventory,
      vin: v.serialNo,
      color: v.exteriorColor?.colorDescription,
      province: source.province,
    })) || []
  );
}

function execute(url, options = {}) {
  const { method = "GET", headers = {}, body } = options;

  return new Promise((resolve, reject) => {
    const req = https.request(url, { method, headers }, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(
            new Error(`Request failed with status ${res.statusCode}`)
          );
        }

        try {
          const json = JSON.parse(data || "{}");
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}
