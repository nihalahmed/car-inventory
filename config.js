export const SourceType = {
  ALGOLIA: "algolia",
  WEBSITE: "website",
  SM360: "sm360",
};

export const sources = [
  {
    name: "Burlington",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzburlingtonca_production_inventory_imagesort",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Kingston",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzkingston_production_inventory_specials_oem_price",
      id: "2591J46P8G",
      key: "78311e75e16dd6273d6b00cd6c21db3c",
    },
  },
  {
    name: "Newmarket",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenznewmarket-buysell_production_inventory_image_sort",
      id: "V3ZOVI2QFZ",
      key: "ec7553dd56e6d4c8bb447a0240e7aab3",
    },
  },
  {
    name: "London",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzlondon_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Ottawa",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "starmotorsofottawamercedesbenz_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Whitby",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzofdurham_production_inventory_low_to_high",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Windsor",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "overseasmotorsmercedesbenz_production_inventory_specials_oem_price",
      id: "V2MZLXX99F",
      key: "f7b5e3f281e3dbaf7bb03d10029e9291",
    },
  },
  {
    name: "Sudbury",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzofsudbury_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Markham",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzmarkham_production_inventory_specials_oem_price",
      id: "EHWUW84XVK",
      key: "fb58227032e79f03b9b820cbaea7f8fb",
    },
  },
  {
    name: "Thornhill",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzthornhill_production_inventory_specials_oem_price",
      id: "EHWUW84XVK",
      key: "fb58227032e79f03b9b820cbaea7f8fb",
    },
  },
  {
    name: "Toronto Downtown",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzdowntowntoronto_production_inventory_specials_oem_price",
      id: "EHWUW84XVK",
      key: "fb58227032e79f03b9b820cbaea7f8fb",
    },
  },
  {
    name: "Toronto Queensway",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenztorontoqueensway_production_inventory_specials_oem_price",
      id: "2591J46P8G",
      key: "78311e75e16dd6273d6b00cd6c21db3c",
    },
  },
  {
    name: "Mississauga",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzmississauga_production_inventory_low_to_high",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Kitchener",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "victoriastarmotorsinc_production_inventory_image_price_sort",
      id: "1WNYBZLEEN",
      key: "e2acb682178e9dcc22d18ecb2ff7d9e4",
    },
  },
  {
    name: "Oakville",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzoakville_production_inventory_in_transit_last",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "St. Catharines",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "performancemercedesbenz_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Vaughan",
    province: "ON",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzmaple_production_inventory_low_to_high",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
      filters: ["type:Certified Pre-Owned", "type:Pre-Owned"],
    },
  },
  {
    name: "Edmonton West",
    province: "AB",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzedmontonwestltd_production_inventory_low_to_high",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Edmonton Heritage Valley",
    province: "AB",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzheritagevalley_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Calgary Downtown",
    province: "AB",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzdowntowncalgary_production_inventory_specials_oem_price",
      id: "V3ZOVI2QFZ",
      key: "ec7553dd56e6d4c8bb447a0240e7aab3",
    },
  },
  {
    name: "Calgary Lone Star",
    province: "AB",
    type: SourceType.ALGOLIA,
    data: {
      index: "lonestarmercedesbenz_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Kelowna",
    province: "BC",
    type: SourceType.ALGOLIA,
    data: {
      index: "kelownamercedesbenz_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Surrey",
    province: "BC",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzsurrey_production_inventory_days_in_stock_high_to_low",
      id: "V2MZLXX99F",
      key: "f7b5e3f281e3dbaf7bb03d10029e9291",
      filters: ["certified:Certified"],
    },
  },
  {
    name: "Nanaimo",
    province: "BC",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenznanaimo_production_inventory_specials_oem_price",
      id: "10APRXOTJR",
      key: "003c8cddb5b15f2cfa774c02b7a3b59e",
    },
  },
  {
    name: "Victoria",
    province: "BC",
    type: SourceType.ALGOLIA,
    data: {
      index: "threepointmotors_production_inventory_specials_oem_price",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Regina",
    province: "SK",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzofregina_production_inventory_low_to_high",
      id: "SEWJN80HTN",
      key: "179608f32563367799314290254e3e44",
    },
  },
  {
    name: "Winnipeg",
    province: "MB",
    type: SourceType.ALGOLIA,
    data: {
      index: "mercedesbenzwinnipeg_production_inventory_specials_oem_price",
      id: "EQU6HXB6WG",
      key: "da97ef494552f47ecc6f47068888d120",
    },
  },
  {
    name: "Brampton",
    province: "ON",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-brampton.ca",
    },
  },
  {
    name: "Peterborough",
    province: "ON",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-peterborough.ca",
    },
  },
  {
    name: "Barrie",
    province: "ON",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-barrie.ca",
    },
  },
  {
    name: "Calgary",
    province: "AB",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-countryhills.ca",
    },
  },
  {
    name: "Kamloops",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-kamloops.ca",
    },
  },
  {
    name: "Langley",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-langley.ca",
    },
  },
  {
    name: "Vancouver",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-north-vancouver.ca",
    },
  },
  {
    name: "Vancouver",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-boundary.ca",
    },
  },
  {
    name: "Vancouver",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-vancouver.ca",
    },
  },
  {
    name: "Richmond",
    province: "BC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-richmond.ca",
    },
  },
  {
    name: "Saskatoon",
    province: "SK",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-saskatoon.ca",
    },
  },
  {
    name: "Saguenay",
    province: "QC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-saguenay.ca",
    },
  },
  {
    name: "St-Nicolas",
    province: "QC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-stnicolas.ca",
    },
  },
  {
    name: "Sherbrooke",
    province: "QC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-sherbrooke.ca",
    },
  },
  {
    name: "Granby",
    province: "QC",
    type: SourceType.WEBSITE,
    data: {
      url: "https://www.mercedes-benz-granby.ca",
    },
  },
  {
    name: "Silverstar",
    province: "QC",
    type: SourceType.SM360,
    data: {
      url: "https://www.mercedes-benz-silverstar.ca",
      organizationId: 497,
      organizationUnitId: 9770,
    },
  },
  {
    name: "Quebec",
    province: "QC",
    type: SourceType.SM360,
    data: {
      url: "https://www.mercedes-benz-quebec.ca",
      organizationId: 497,
      organizationUnitId: 1303,
    },
  },
  {
    name: "Laval",
    province: "QC",
    type: SourceType.SM360,
    data: {
      url: "https://www.mercedes-benz-laval.ca",
      organizationId: 560,
      organizationUnitId: 1379,
    },
  },
  {
    name: "Boucherville",
    province: "QC",
    type: SourceType.SM360,
    data: {
      url: "https://www.mercedes-benz-boucherville.ca",
      organizationId: 343,
      organizationUnitId: 1302,
    },
  },
];
