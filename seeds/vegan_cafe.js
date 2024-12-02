/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("vegancafe").del();
  await knex("vegancafe").insert([
    { 
      id: 1, 
      name: "Tsuchi Cafe", 
      latitude: 43.6554566, 
      longitude: -79.4177185 
    },
    { 
      id: 2, 
      name: "Thrive Eatery", 
      latitude: 43.5950171, 
      longitude: -79.5303537 
    },
    {
      id: 3, 
      name: "RawBlendz Healthy Mealz Redefined",
      latitude: 43.558428,
      longitude: -79.578015,
    },
    {
      id: 4, 
      name: "Community Restaurant",
      latitude: 43.5528644,
      longitude: -79.5840118,
    },
    { 
      id: 5, 
      name: "Odd Burger", 
      latitude: 43.6562802, 
      longitude: -79.4097497 
    },
    { 
      id: 6, 
      name: "Karine’s Fresh", 
      latitude: 43.6537271, 
      longitude: -79.3909131 
    },
    {
      id: 7, 
      name: "Almond Butterfly Bakeshop & Cafe",
      latitude: 43.662963,
      longitude: -79.4034537,
    },
  ]);
}
