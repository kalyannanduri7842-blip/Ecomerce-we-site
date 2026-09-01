/**
 * Extended product catalog metadata for NexMart
 */
'use strict';

const EXTENDED_CATALOG_METADATA = [
  {
    catalogIndex: 0,
    category: 'men',
    skuPrefix: 'MEN-000',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 100,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 1,
    category: 'men',
    skuPrefix: 'MEN-001',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 115,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 2,
    category: 'men',
    skuPrefix: 'MEN-002',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 130,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 3,
    category: 'men',
    skuPrefix: 'MEN-003',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 145,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 4,
    category: 'men',
    skuPrefix: 'MEN-004',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 160,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 5,
    category: 'men',
    skuPrefix: 'MEN-005',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 175,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 6,
    category: 'men',
    skuPrefix: 'MEN-006',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 190,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 7,
    category: 'men',
    skuPrefix: 'MEN-007',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 205,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 8,
    category: 'men',
    skuPrefix: 'MEN-008',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 220,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 9,
    category: 'men',
    skuPrefix: 'MEN-009',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 235,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 10,
    category: 'men',
    skuPrefix: 'MEN-010',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 250,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 11,
    category: 'men',
    skuPrefix: 'MEN-011',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 265,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 12,
    category: 'men',
    skuPrefix: 'MEN-012',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 280,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 13,
    category: 'men',
    skuPrefix: 'MEN-013',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 295,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 14,
    category: 'men',
    skuPrefix: 'MEN-014',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 310,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 15,
    category: 'men',
    skuPrefix: 'MEN-015',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 325,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 16,
    category: 'men',
    skuPrefix: 'MEN-016',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 340,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 17,
    category: 'men',
    skuPrefix: 'MEN-017',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 355,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 18,
    category: 'men',
    skuPrefix: 'MEN-018',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 370,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 19,
    category: 'men',
    skuPrefix: 'MEN-019',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 385,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 20,
    category: 'men',
    skuPrefix: 'MEN-020',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 400,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 21,
    category: 'men',
    skuPrefix: 'MEN-021',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 415,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 22,
    category: 'men',
    skuPrefix: 'MEN-022',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 430,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 23,
    category: 'men',
    skuPrefix: 'MEN-023',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 445,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 24,
    category: 'men',
    skuPrefix: 'MEN-024',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 460,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 25,
    category: 'men',
    skuPrefix: 'MEN-025',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 475,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 26,
    category: 'men',
    skuPrefix: 'MEN-026',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 490,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 27,
    category: 'men',
    skuPrefix: 'MEN-027',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 505,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 28,
    category: 'men',
    skuPrefix: 'MEN-028',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 520,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 29,
    category: 'men',
    skuPrefix: 'MEN-029',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 535,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 30,
    category: 'men',
    skuPrefix: 'MEN-030',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 550,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 31,
    category: 'men',
    skuPrefix: 'MEN-031',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 565,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 32,
    category: 'men',
    skuPrefix: 'MEN-032',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 580,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 33,
    category: 'men',
    skuPrefix: 'MEN-033',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 595,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 34,
    category: 'men',
    skuPrefix: 'MEN-034',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 610,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 35,
    category: 'men',
    skuPrefix: 'MEN-035',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 625,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 36,
    category: 'men',
    skuPrefix: 'MEN-036',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 640,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 37,
    category: 'men',
    skuPrefix: 'MEN-037',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 655,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 38,
    category: 'men',
    skuPrefix: 'MEN-038',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 670,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 39,
    category: 'men',
    skuPrefix: 'MEN-039',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 685,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 40,
    category: 'men',
    skuPrefix: 'MEN-040',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 700,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 41,
    category: 'men',
    skuPrefix: 'MEN-041',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 715,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 42,
    category: 'men',
    skuPrefix: 'MEN-042',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 730,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 43,
    category: 'men',
    skuPrefix: 'MEN-043',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 745,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 44,
    category: 'men',
    skuPrefix: 'MEN-044',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 760,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 45,
    category: 'men',
    skuPrefix: 'MEN-045',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 775,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 46,
    category: 'men',
    skuPrefix: 'MEN-046',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 790,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 47,
    category: 'men',
    skuPrefix: 'MEN-047',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 805,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 48,
    category: 'men',
    skuPrefix: 'MEN-048',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 820,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 49,
    category: 'men',
    skuPrefix: 'MEN-049',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 835,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 50,
    category: 'men',
    skuPrefix: 'MEN-050',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 850,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 51,
    category: 'men',
    skuPrefix: 'MEN-051',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 865,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 52,
    category: 'men',
    skuPrefix: 'MEN-052',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 880,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 53,
    category: 'men',
    skuPrefix: 'MEN-053',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 895,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 54,
    category: 'men',
    skuPrefix: 'MEN-054',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 910,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 55,
    category: 'men',
    skuPrefix: 'MEN-055',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 925,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 56,
    category: 'men',
    skuPrefix: 'MEN-056',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 940,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 57,
    category: 'men',
    skuPrefix: 'MEN-057',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 955,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 58,
    category: 'men',
    skuPrefix: 'MEN-058',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 970,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 59,
    category: 'men',
    skuPrefix: 'MEN-059',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 985,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 60,
    category: 'men',
    skuPrefix: 'MEN-060',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1000,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 61,
    category: 'men',
    skuPrefix: 'MEN-061',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1015,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 62,
    category: 'men',
    skuPrefix: 'MEN-062',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1030,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 63,
    category: 'men',
    skuPrefix: 'MEN-063',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1045,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 64,
    category: 'men',
    skuPrefix: 'MEN-064',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1060,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 65,
    category: 'men',
    skuPrefix: 'MEN-065',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1075,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 66,
    category: 'men',
    skuPrefix: 'MEN-066',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1090,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 67,
    category: 'men',
    skuPrefix: 'MEN-067',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1105,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 68,
    category: 'men',
    skuPrefix: 'MEN-068',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1120,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 69,
    category: 'men',
    skuPrefix: 'MEN-069',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1135,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 70,
    category: 'men',
    skuPrefix: 'MEN-070',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1150,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 71,
    category: 'men',
    skuPrefix: 'MEN-071',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1165,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 72,
    category: 'men',
    skuPrefix: 'MEN-072',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1180,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 73,
    category: 'men',
    skuPrefix: 'MEN-073',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1195,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 74,
    category: 'men',
    skuPrefix: 'MEN-074',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1210,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 75,
    category: 'men',
    skuPrefix: 'MEN-075',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1225,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 76,
    category: 'men',
    skuPrefix: 'MEN-076',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1240,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 77,
    category: 'men',
    skuPrefix: 'MEN-077',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1255,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 78,
    category: 'men',
    skuPrefix: 'MEN-078',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1270,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 79,
    category: 'men',
    skuPrefix: 'MEN-079',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1285,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['men', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 80,
    category: 'women',
    skuPrefix: 'WOM-000',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 100,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 81,
    category: 'women',
    skuPrefix: 'WOM-001',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 115,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 82,
    category: 'women',
    skuPrefix: 'WOM-002',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 130,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 83,
    category: 'women',
    skuPrefix: 'WOM-003',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 145,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 84,
    category: 'women',
    skuPrefix: 'WOM-004',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 160,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 85,
    category: 'women',
    skuPrefix: 'WOM-005',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 175,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 86,
    category: 'women',
    skuPrefix: 'WOM-006',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 190,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 87,
    category: 'women',
    skuPrefix: 'WOM-007',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 205,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 88,
    category: 'women',
    skuPrefix: 'WOM-008',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 220,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 89,
    category: 'women',
    skuPrefix: 'WOM-009',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 235,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 90,
    category: 'women',
    skuPrefix: 'WOM-010',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 250,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 91,
    category: 'women',
    skuPrefix: 'WOM-011',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 265,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 92,
    category: 'women',
    skuPrefix: 'WOM-012',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 280,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 93,
    category: 'women',
    skuPrefix: 'WOM-013',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 295,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 94,
    category: 'women',
    skuPrefix: 'WOM-014',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 310,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 95,
    category: 'women',
    skuPrefix: 'WOM-015',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 325,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 96,
    category: 'women',
    skuPrefix: 'WOM-016',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 340,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 97,
    category: 'women',
    skuPrefix: 'WOM-017',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 355,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 98,
    category: 'women',
    skuPrefix: 'WOM-018',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 370,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 99,
    category: 'women',
    skuPrefix: 'WOM-019',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 385,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 100,
    category: 'women',
    skuPrefix: 'WOM-020',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 400,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 101,
    category: 'women',
    skuPrefix: 'WOM-021',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 415,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 102,
    category: 'women',
    skuPrefix: 'WOM-022',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 430,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 103,
    category: 'women',
    skuPrefix: 'WOM-023',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 445,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 104,
    category: 'women',
    skuPrefix: 'WOM-024',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 460,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 105,
    category: 'women',
    skuPrefix: 'WOM-025',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 475,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 106,
    category: 'women',
    skuPrefix: 'WOM-026',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 490,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 107,
    category: 'women',
    skuPrefix: 'WOM-027',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 505,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 108,
    category: 'women',
    skuPrefix: 'WOM-028',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 520,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 109,
    category: 'women',
    skuPrefix: 'WOM-029',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 535,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 110,
    category: 'women',
    skuPrefix: 'WOM-030',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 550,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 111,
    category: 'women',
    skuPrefix: 'WOM-031',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 565,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 112,
    category: 'women',
    skuPrefix: 'WOM-032',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 580,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 113,
    category: 'women',
    skuPrefix: 'WOM-033',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 595,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 114,
    category: 'women',
    skuPrefix: 'WOM-034',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 610,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 115,
    category: 'women',
    skuPrefix: 'WOM-035',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 625,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 116,
    category: 'women',
    skuPrefix: 'WOM-036',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 640,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 117,
    category: 'women',
    skuPrefix: 'WOM-037',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 655,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 118,
    category: 'women',
    skuPrefix: 'WOM-038',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 670,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 119,
    category: 'women',
    skuPrefix: 'WOM-039',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 685,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 120,
    category: 'women',
    skuPrefix: 'WOM-040',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 700,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 121,
    category: 'women',
    skuPrefix: 'WOM-041',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 715,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 122,
    category: 'women',
    skuPrefix: 'WOM-042',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 730,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 123,
    category: 'women',
    skuPrefix: 'WOM-043',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 745,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 124,
    category: 'women',
    skuPrefix: 'WOM-044',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 760,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 125,
    category: 'women',
    skuPrefix: 'WOM-045',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 775,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 126,
    category: 'women',
    skuPrefix: 'WOM-046',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 790,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 127,
    category: 'women',
    skuPrefix: 'WOM-047',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 805,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 128,
    category: 'women',
    skuPrefix: 'WOM-048',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 820,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 129,
    category: 'women',
    skuPrefix: 'WOM-049',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 835,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 130,
    category: 'women',
    skuPrefix: 'WOM-050',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 850,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 131,
    category: 'women',
    skuPrefix: 'WOM-051',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 865,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 132,
    category: 'women',
    skuPrefix: 'WOM-052',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 880,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 133,
    category: 'women',
    skuPrefix: 'WOM-053',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 895,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 134,
    category: 'women',
    skuPrefix: 'WOM-054',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 910,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 135,
    category: 'women',
    skuPrefix: 'WOM-055',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 925,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 136,
    category: 'women',
    skuPrefix: 'WOM-056',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 940,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 137,
    category: 'women',
    skuPrefix: 'WOM-057',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 955,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 138,
    category: 'women',
    skuPrefix: 'WOM-058',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 970,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 139,
    category: 'women',
    skuPrefix: 'WOM-059',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 985,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 140,
    category: 'women',
    skuPrefix: 'WOM-060',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1000,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 141,
    category: 'women',
    skuPrefix: 'WOM-061',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1015,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 142,
    category: 'women',
    skuPrefix: 'WOM-062',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1030,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 143,
    category: 'women',
    skuPrefix: 'WOM-063',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1045,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 144,
    category: 'women',
    skuPrefix: 'WOM-064',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1060,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 145,
    category: 'women',
    skuPrefix: 'WOM-065',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1075,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 146,
    category: 'women',
    skuPrefix: 'WOM-066',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1090,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 147,
    category: 'women',
    skuPrefix: 'WOM-067',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1105,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 148,
    category: 'women',
    skuPrefix: 'WOM-068',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1120,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 149,
    category: 'women',
    skuPrefix: 'WOM-069',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1135,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 150,
    category: 'women',
    skuPrefix: 'WOM-070',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1150,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 151,
    category: 'women',
    skuPrefix: 'WOM-071',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1165,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 152,
    category: 'women',
    skuPrefix: 'WOM-072',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1180,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 153,
    category: 'women',
    skuPrefix: 'WOM-073',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1195,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 154,
    category: 'women',
    skuPrefix: 'WOM-074',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1210,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 155,
    category: 'women',
    skuPrefix: 'WOM-075',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1225,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 156,
    category: 'women',
    skuPrefix: 'WOM-076',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1240,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 157,
    category: 'women',
    skuPrefix: 'WOM-077',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1255,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 158,
    category: 'women',
    skuPrefix: 'WOM-078',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1270,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 159,
    category: 'women',
    skuPrefix: 'WOM-079',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1285,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['women', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 160,
    category: 'kids',
    skuPrefix: 'KID-000',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 100,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 161,
    category: 'kids',
    skuPrefix: 'KID-001',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 115,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 162,
    category: 'kids',
    skuPrefix: 'KID-002',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 130,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 163,
    category: 'kids',
    skuPrefix: 'KID-003',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 145,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 164,
    category: 'kids',
    skuPrefix: 'KID-004',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 160,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 165,
    category: 'kids',
    skuPrefix: 'KID-005',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 175,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 166,
    category: 'kids',
    skuPrefix: 'KID-006',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 190,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 167,
    category: 'kids',
    skuPrefix: 'KID-007',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 205,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 168,
    category: 'kids',
    skuPrefix: 'KID-008',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 220,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 169,
    category: 'kids',
    skuPrefix: 'KID-009',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 235,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 170,
    category: 'kids',
    skuPrefix: 'KID-010',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 250,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 171,
    category: 'kids',
    skuPrefix: 'KID-011',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 265,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 172,
    category: 'kids',
    skuPrefix: 'KID-012',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 280,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 173,
    category: 'kids',
    skuPrefix: 'KID-013',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 295,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 174,
    category: 'kids',
    skuPrefix: 'KID-014',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 310,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 175,
    category: 'kids',
    skuPrefix: 'KID-015',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 325,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 176,
    category: 'kids',
    skuPrefix: 'KID-016',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 340,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 177,
    category: 'kids',
    skuPrefix: 'KID-017',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 355,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 178,
    category: 'kids',
    skuPrefix: 'KID-018',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 370,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 179,
    category: 'kids',
    skuPrefix: 'KID-019',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 385,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 180,
    category: 'kids',
    skuPrefix: 'KID-020',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 400,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 181,
    category: 'kids',
    skuPrefix: 'KID-021',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 415,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 182,
    category: 'kids',
    skuPrefix: 'KID-022',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 430,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 183,
    category: 'kids',
    skuPrefix: 'KID-023',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 445,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 184,
    category: 'kids',
    skuPrefix: 'KID-024',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 460,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 185,
    category: 'kids',
    skuPrefix: 'KID-025',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 475,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 186,
    category: 'kids',
    skuPrefix: 'KID-026',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 490,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 187,
    category: 'kids',
    skuPrefix: 'KID-027',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 505,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 188,
    category: 'kids',
    skuPrefix: 'KID-028',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 520,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 189,
    category: 'kids',
    skuPrefix: 'KID-029',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 535,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 190,
    category: 'kids',
    skuPrefix: 'KID-030',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 550,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 191,
    category: 'kids',
    skuPrefix: 'KID-031',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 565,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 192,
    category: 'kids',
    skuPrefix: 'KID-032',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 580,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 193,
    category: 'kids',
    skuPrefix: 'KID-033',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 595,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 194,
    category: 'kids',
    skuPrefix: 'KID-034',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 610,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 195,
    category: 'kids',
    skuPrefix: 'KID-035',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 625,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 196,
    category: 'kids',
    skuPrefix: 'KID-036',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 640,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 197,
    category: 'kids',
    skuPrefix: 'KID-037',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 655,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 198,
    category: 'kids',
    skuPrefix: 'KID-038',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 670,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 199,
    category: 'kids',
    skuPrefix: 'KID-039',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 685,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 200,
    category: 'kids',
    skuPrefix: 'KID-040',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 700,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 201,
    category: 'kids',
    skuPrefix: 'KID-041',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 715,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 202,
    category: 'kids',
    skuPrefix: 'KID-042',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 730,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 203,
    category: 'kids',
    skuPrefix: 'KID-043',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 745,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 204,
    category: 'kids',
    skuPrefix: 'KID-044',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 760,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 205,
    category: 'kids',
    skuPrefix: 'KID-045',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 775,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 206,
    category: 'kids',
    skuPrefix: 'KID-046',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 790,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 207,
    category: 'kids',
    skuPrefix: 'KID-047',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 805,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 208,
    category: 'kids',
    skuPrefix: 'KID-048',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 820,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 209,
    category: 'kids',
    skuPrefix: 'KID-049',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 835,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 210,
    category: 'kids',
    skuPrefix: 'KID-050',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 850,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 211,
    category: 'kids',
    skuPrefix: 'KID-051',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 865,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 212,
    category: 'kids',
    skuPrefix: 'KID-052',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 880,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 213,
    category: 'kids',
    skuPrefix: 'KID-053',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 895,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 214,
    category: 'kids',
    skuPrefix: 'KID-054',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 910,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 215,
    category: 'kids',
    skuPrefix: 'KID-055',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 925,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 216,
    category: 'kids',
    skuPrefix: 'KID-056',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 940,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 217,
    category: 'kids',
    skuPrefix: 'KID-057',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 955,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 218,
    category: 'kids',
    skuPrefix: 'KID-058',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 970,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 219,
    category: 'kids',
    skuPrefix: 'KID-059',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 985,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 220,
    category: 'kids',
    skuPrefix: 'KID-060',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1000,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 221,
    category: 'kids',
    skuPrefix: 'KID-061',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1015,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 222,
    category: 'kids',
    skuPrefix: 'KID-062',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1030,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 223,
    category: 'kids',
    skuPrefix: 'KID-063',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1045,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 224,
    category: 'kids',
    skuPrefix: 'KID-064',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1060,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 225,
    category: 'kids',
    skuPrefix: 'KID-065',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1075,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 226,
    category: 'kids',
    skuPrefix: 'KID-066',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1090,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 227,
    category: 'kids',
    skuPrefix: 'KID-067',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1105,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 228,
    category: 'kids',
    skuPrefix: 'KID-068',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1120,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 229,
    category: 'kids',
    skuPrefix: 'KID-069',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1135,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 230,
    category: 'kids',
    skuPrefix: 'KID-070',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1150,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 231,
    category: 'kids',
    skuPrefix: 'KID-071',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1165,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 232,
    category: 'kids',
    skuPrefix: 'KID-072',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1180,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 233,
    category: 'kids',
    skuPrefix: 'KID-073',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1195,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 234,
    category: 'kids',
    skuPrefix: 'KID-074',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1210,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 235,
    category: 'kids',
    skuPrefix: 'KID-075',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1225,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 236,
    category: 'kids',
    skuPrefix: 'KID-076',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1240,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 237,
    category: 'kids',
    skuPrefix: 'KID-077',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1255,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 238,
    category: 'kids',
    skuPrefix: 'KID-078',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1270,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 239,
    category: 'kids',
    skuPrefix: 'KID-079',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1285,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['kids', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 240,
    category: 'groceries',
    skuPrefix: 'GRO-000',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 100,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 241,
    category: 'groceries',
    skuPrefix: 'GRO-001',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 115,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 242,
    category: 'groceries',
    skuPrefix: 'GRO-002',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 130,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 243,
    category: 'groceries',
    skuPrefix: 'GRO-003',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 145,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 244,
    category: 'groceries',
    skuPrefix: 'GRO-004',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 160,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 245,
    category: 'groceries',
    skuPrefix: 'GRO-005',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 175,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 246,
    category: 'groceries',
    skuPrefix: 'GRO-006',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 190,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 247,
    category: 'groceries',
    skuPrefix: 'GRO-007',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 205,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 248,
    category: 'groceries',
    skuPrefix: 'GRO-008',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 220,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 249,
    category: 'groceries',
    skuPrefix: 'GRO-009',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 235,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 250,
    category: 'groceries',
    skuPrefix: 'GRO-010',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 250,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 251,
    category: 'groceries',
    skuPrefix: 'GRO-011',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 265,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 252,
    category: 'groceries',
    skuPrefix: 'GRO-012',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 280,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 253,
    category: 'groceries',
    skuPrefix: 'GRO-013',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 295,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 254,
    category: 'groceries',
    skuPrefix: 'GRO-014',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 310,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 255,
    category: 'groceries',
    skuPrefix: 'GRO-015',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 325,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 256,
    category: 'groceries',
    skuPrefix: 'GRO-016',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 340,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 257,
    category: 'groceries',
    skuPrefix: 'GRO-017',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 355,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 258,
    category: 'groceries',
    skuPrefix: 'GRO-018',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 370,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 259,
    category: 'groceries',
    skuPrefix: 'GRO-019',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 385,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 260,
    category: 'groceries',
    skuPrefix: 'GRO-020',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 400,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 261,
    category: 'groceries',
    skuPrefix: 'GRO-021',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 415,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 262,
    category: 'groceries',
    skuPrefix: 'GRO-022',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 430,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 263,
    category: 'groceries',
    skuPrefix: 'GRO-023',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 445,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 264,
    category: 'groceries',
    skuPrefix: 'GRO-024',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 460,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 265,
    category: 'groceries',
    skuPrefix: 'GRO-025',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 475,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 266,
    category: 'groceries',
    skuPrefix: 'GRO-026',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 490,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 267,
    category: 'groceries',
    skuPrefix: 'GRO-027',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 505,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 268,
    category: 'groceries',
    skuPrefix: 'GRO-028',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 520,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 269,
    category: 'groceries',
    skuPrefix: 'GRO-029',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 535,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 270,
    category: 'groceries',
    skuPrefix: 'GRO-030',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 550,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 271,
    category: 'groceries',
    skuPrefix: 'GRO-031',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 565,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 272,
    category: 'groceries',
    skuPrefix: 'GRO-032',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 580,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 273,
    category: 'groceries',
    skuPrefix: 'GRO-033',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 595,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 274,
    category: 'groceries',
    skuPrefix: 'GRO-034',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 610,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 275,
    category: 'groceries',
    skuPrefix: 'GRO-035',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 625,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 276,
    category: 'groceries',
    skuPrefix: 'GRO-036',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 640,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 277,
    category: 'groceries',
    skuPrefix: 'GRO-037',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 655,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 278,
    category: 'groceries',
    skuPrefix: 'GRO-038',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 670,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 279,
    category: 'groceries',
    skuPrefix: 'GRO-039',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 685,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 280,
    category: 'groceries',
    skuPrefix: 'GRO-040',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 700,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 281,
    category: 'groceries',
    skuPrefix: 'GRO-041',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 715,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 282,
    category: 'groceries',
    skuPrefix: 'GRO-042',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 730,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 283,
    category: 'groceries',
    skuPrefix: 'GRO-043',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 745,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 284,
    category: 'groceries',
    skuPrefix: 'GRO-044',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 760,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 285,
    category: 'groceries',
    skuPrefix: 'GRO-045',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 775,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 286,
    category: 'groceries',
    skuPrefix: 'GRO-046',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 790,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 287,
    category: 'groceries',
    skuPrefix: 'GRO-047',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 805,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 288,
    category: 'groceries',
    skuPrefix: 'GRO-048',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 820,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 289,
    category: 'groceries',
    skuPrefix: 'GRO-049',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 835,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 290,
    category: 'groceries',
    skuPrefix: 'GRO-050',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 850,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 291,
    category: 'groceries',
    skuPrefix: 'GRO-051',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 865,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 292,
    category: 'groceries',
    skuPrefix: 'GRO-052',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 880,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 293,
    category: 'groceries',
    skuPrefix: 'GRO-053',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 895,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 294,
    category: 'groceries',
    skuPrefix: 'GRO-054',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 910,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 295,
    category: 'groceries',
    skuPrefix: 'GRO-055',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 925,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 296,
    category: 'groceries',
    skuPrefix: 'GRO-056',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 940,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 297,
    category: 'groceries',
    skuPrefix: 'GRO-057',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 955,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 298,
    category: 'groceries',
    skuPrefix: 'GRO-058',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 970,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 299,
    category: 'groceries',
    skuPrefix: 'GRO-059',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 985,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 300,
    category: 'groceries',
    skuPrefix: 'GRO-060',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1000,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 301,
    category: 'groceries',
    skuPrefix: 'GRO-061',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1015,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 302,
    category: 'groceries',
    skuPrefix: 'GRO-062',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1030,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 303,
    category: 'groceries',
    skuPrefix: 'GRO-063',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1045,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 304,
    category: 'groceries',
    skuPrefix: 'GRO-064',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1060,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 305,
    category: 'groceries',
    skuPrefix: 'GRO-065',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1075,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 306,
    category: 'groceries',
    skuPrefix: 'GRO-066',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1090,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 307,
    category: 'groceries',
    skuPrefix: 'GRO-067',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1105,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 308,
    category: 'groceries',
    skuPrefix: 'GRO-068',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1120,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 309,
    category: 'groceries',
    skuPrefix: 'GRO-069',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1135,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 310,
    category: 'groceries',
    skuPrefix: 'GRO-070',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1150,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: true,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 311,
    category: 'groceries',
    skuPrefix: 'GRO-071',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1165,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 312,
    category: 'groceries',
    skuPrefix: 'GRO-072',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1180,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 313,
    category: 'groceries',
    skuPrefix: 'GRO-073',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1195,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 314,
    category: 'groceries',
    skuPrefix: 'GRO-074',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1210,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 315,
    category: 'groceries',
    skuPrefix: 'GRO-075',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 30,
      returnWindowDays: 7,
      weightGrams: 1225,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: true
    }
  },
  {
    catalogIndex: 316,
    category: 'groceries',
    skuPrefix: 'GRO-076',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 60,
      returnWindowDays: 7,
      weightGrams: 1240,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 317,
    category: 'groceries',
    skuPrefix: 'GRO-077',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 90,
      returnWindowDays: 7,
      weightGrams: 1255,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 3,
      fragile: true,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 318,
    category: 'groceries',
    skuPrefix: 'GRO-078',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 120,
      returnWindowDays: 7,
      weightGrams: 1270,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 1,
      fragile: false,
      requiresRefrigeration: false
    }
  },
  {
    catalogIndex: 319,
    category: 'groceries',
    skuPrefix: 'GRO-079',
    attributes: {
      materialOptions: ['Cotton', 'Polyester', 'Blend', 'Denim', 'Wool', 'Silk', 'Linen'],
      sizeOptions: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'],
      colorOptions: ['Black', 'White', 'Navy', 'Grey', 'Red', 'Blue', 'Green', 'Beige'],
      careInstructions: 'Machine wash cold. Do not bleach. Tumble dry low.',
      warrantyDays: 150,
      returnWindowDays: 7,
      weightGrams: 1285,
      tags: ['featured', 'seasonal', 'bestseller', 'new'].slice(0, (p % 4) + 1)
    },
    seo: {
      titleTemplate: 'Buy {name} online at NexMart',
      descriptionTemplate: 'Shop {name} at best price with fast delivery.',
      keywords: ['groceries', 'online shopping', 'nexmart']
    },
    logistics: {
      shipsInDays: 2,
      fragile: false,
      requiresRefrigeration: false
    }
  },
];

module.exports = { EXTENDED_CATALOG_METADATA };
