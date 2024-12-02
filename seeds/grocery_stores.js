/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("grocerystores").del();
  await knex("grocerystores").insert([
    {
      id: 1, // Manually specify id
      name: "Essence of Life Organics",
      latitude: 43.6539569,
      longitude: -79.4006466,
    },
    {
      id: 2,
      name: "Good Rebel - Vegan Provisions",
      latitude: 43.649632,
      longitude: -79.434699,
    },
    {
      id: 3,
      name: "Ambrosia Natural Foods",
      latitude: 43.8032796,
      longitude: -79.4167783,
    },
    {
      id: 4,
      name: "Ambrosia Natural Foods",
      latitude: 43.7909981,
      longitude: -79.5444389,
    },
    {
      id: 5,
      name: "Herbs & Nutrition - Qi Natural Food",
      latitude: 43.665087,
      longitude: -79.411973,
    },
    {
      id: 6,
      name: "JR's Natural Health & Bulk",
      latitude: 43.6414198,
      longitude: -79.4334412,
    },
    {
      id: 7,
      name: "The Local Market",
      latitude: 43.6409036,
      longitude: -79.4356724,
    },
    {
      id: 8,
      name: "Jinglepear Deli & Vegan Grocery",
      latitude: 43.6707302,
      longitude: -79.3277629,
    },
    {
      id: 9,
      name: "Healthy Planet - Yonge & Dundas",
      latitude: 43.6571533,
      longitude: -79.3814413,
    },
    {
      id: 10,
      name: "Healthy Planet - College & Bathurst",
      latitude: 43.6552779,
      longitude: -79.4120766,
    },
    {
      id: 11,
      name: "Healthy Planet - Etobicoke",
      latitude: 43.6294055,
      longitude: -79.5182762,
    },
    {
      id: 12,
      name: "Healthy Planet - Mississauga (Dixie & Dundas)",
      latitude: 43.610736,
      longitude: -79.584752,
    },
    {
      id: 13,
      name: "Healthy Planet - Mississauga Central",
      latitude: 43.6050893,
      longitude: -79.6495965,
    },
    {
      id: 14,
      name: "Healthy Planet - Brampton",
      latitude: 43.706172,
      longitude: -79.7348155,
    },
    {
      id: 15,
      name: "Healthy Planet - Oakville (403 & Dundas)",
      latitude: 43.5149139,
      longitude: -79.6875468,
    },
    {
      id: 16,
      name: "The Local Vegan",
      latitude: 43.6964421,
      longitude: -79.4922959,
    },
  ]);
}
