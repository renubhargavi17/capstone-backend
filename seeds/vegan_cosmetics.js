/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("vegancosmetics").del();
  await knex("vegancosmetics").insert([
    { 
      id: 1, 
      name: "Lush Cosmetics Toronto Eaton Centre", 
      latitude: 43.6557658, 
      longitude: -79.3810671 
    },
    { 
      id: 2, 
      name: "Lush Cosmetics Manufacturing Centre", 
      latitude: 43.6271302, 
      longitude: -79.5240413 
    },
    { 
      id: 3, 
      name: "The Body Shop", 
      latitude: 43.6536988, 
      longitude: -79.3804448 
    },
    { 
      id: 4, 
      name: "The Body Shop", 
      latitude: 43.6501725, 
      longitude: -79.4816353 
    },
    { 
      id: 5, 
      name: "The Body Shop", 
      latitude: 43.7262487, 
      longitude: -79.4528866 
    },
    { 
      id: 6, 
      name: "The Body Shop", 
      latitude: 43.7779901, 
      longitude: -79.3440914 
    },
    { 
      id: 7, 
      name: "The Body Shop", 
      latitude: 43.8687398, 
      longitude: -79.2879439 
    },
    { 
      id: 8, 
      name: "The Detox Market", 
      latitude: 43.6804426, 
      longitude: -79.3912169 
    },
    { 
      id: 9, 
      name: "The Detox Market", 
      latitude: 43.6472135, 
      longitude: -79.3960292 
    },
    { 
      id: 10, 
      name: "Jacob & Sebastian", 
      latitude: 43.6470157, 
      longitude: -79.4055389 
    },
    {
      id: 11, 
      name: "The Toronto Apothecary", 
      latitude: 43.6823805, 
      longitude: -79.3918964 
    },
    {
      id: 12, 
      name: "Vasanti Cosmetics Inc", 
      latitude: 43.8229717, 
      longitude: -79.3269606 
    },
  ]);
}
