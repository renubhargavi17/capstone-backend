/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("veganbakery").del();
  await knex("veganbakery").insert([
    { 
      id: 1, 
      name: "bloomer's Queen", 
      latitude: 43.6466708, 
      longitude: -79.4060307 
    },
    { 
      id: 2, 
      name: "Bunner's Bakeshop", 
      latitude: 43.6555162, 
      longitude: -79.4026877 
    },
    { 
      id: 3, 
      name: "Tori's Bakeshop", 
      latitude: 43.672236, 
      longitude: -79.2904152 
    },
    { 
      id: 4,
      name: "Beechwood Doughnuts",
      latitude: 43.1577923,
      longitude: -79.2447106,
    },
    { 
      id: 5,
      name: "Sweets from the Earth",
      latitude: 43.7754653,
      longitude: -79.4905294,
    },
    { 
      id: 6,
      name: "Vegan Danish Bakery",
      latitude: 43.8157096,
      longitude: -79.4246076,
    },
    { 
      id: 7,
      name: "Kelly's Bake Shoppe",
      latitude: 43.3257865,
      longitude: -79.7977167,
    },
    { 
      id: 8, 
      name: "Rashmi's Bakery", 
      latitude: 43.5787893, 
      longitude: -79.6493145 
    },
    { 
      id: 9,
      name: "Fairly Frosted Bakery",
      latitude: 43.2515255,
      longitude: -79.8428302,
    },
    { 
      id: 10, 
      name: "Rashmi's Bakery", 
      latitude: 43.681208, 
      longitude: -79.8038898 
    },
    { 
      id: 11,
      name: "Kensington Natural Bakery",
      latitude: 43.6656642,
      longitude: -79.4092021,
    },
    { 
      id: 12, 
      name: "Caked Coffee", 
      latitude: 43.6552955, 
      longitude: -79.4561757 
    },
    { 
      id: 13,
      name: "Bo Tree Plant-Based Cuisine",
      latitude: 43.86252,
      longitude: -79.3068995,
    },
    { 
      id: 14, 
      name: "Vegan Sweet St", 
      latitude: 43.6465794, 
      longitude: -79.5271042 
    },
  ]);
}
