/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("veganclothing").del();
  await knex("veganclothing").insert([
    { 
      id: 1, 
      name: "Matt & Nat", 
      latitude: 45.4467498, 
      longitude: -73.4372125 
    },
    { 
      id: 2, 
      name: "Matt & Nat", 
      latitude: 45.539675, 
      longitude: -73.6541113 
    },
    { 
      id: 3, 
      name: "Noize", 
      latitude: 43.3265444, 
      longitude: -79.8204133 
    },
  ]);
}
