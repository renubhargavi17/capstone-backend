/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("veganrestaurant").del();
  await knex("veganrestaurant").insert([
    { 
      id: 1, 
      name: "Buddha's Vegan Restaurant", 
      latitude: 43.6519435, 
      longitude: -79.4033856 
    },
    { 
      id: 2, 
      name: "Flower Lantern Vegetarian Restaurant - Nhà Hàng Chay Hoa Đăng", 
      latitude: 43.7498162, 
      longitude: -79.5493678 
    },
    { 
      id: 3, 
      name: "Nourishmoi", 
      latitude: 43.5590374, 
      longitude: -79.5774553 
    },
    { 
      id: 4, 
      name: "VEGHOLIC - YONGE & DUNDAS", 
      latitude: 43.6587182, 
      longitude: -79.382272 
    },
    { 
      id: 5, 
      name: "VEGHOLIC - ETOBICOKE", 
      latitude: 43.7188082, 
      longitude: -79.5950294 
    },
    { 
      id: 6, 
      name: "PLANTA Queen", 
      latitude: 43.650626, 
      longitude: -79.3881032 
    },
    { 
      id: 7, 
      name: "La Vegan Ethiopian & Eritrean Vegan Cuisine", 
      latitude: 43.6830099, 
      longitude: -79.326437 
    },
    { 
      id: 8, 
      name: "Sorry I've Got Plants", 
      latitude: 43.6531686, 
      longitude: -79.4519385 
    },
    { 
      id: 9, 
      name: "Vital-Life Vegan Rastarant", 
      latitude: 43.6651834, 
      longitude: -79.3527966 
    },
    { 
      id: 10, 
      name: "Veggie D’Light", 
      latitude: 43.655058, 
      longitude: -79.3998248 
    },
    { 
      id: 11, 
      name: "Hawker", 
      latitude: 43.6563207, 
      longitude: -79.4025622 
    },
    { 
      id: 12, 
      name: "The Hogtown Vegan", 
      latitude: 43.6570912, 
      longitude: -79.405361 
    },
    { 
      id: 13, 
      name: "The Vegan Home", 
      latitude: 43.7134262, 
      longitude: -79.3666625 
    },
    { 
      id: 14, 
      name: "Animal Liberation Kitchen", 
      latitude: 43.6581292, 
      longitude: -79.3496937 
    },
    { 
      id: 15, 
      name: "Gia Restaurant", 
      latitude: 43.6495081, 
      longitude: -79.42311 
    },
    { 
      id: 16, 
      name: "Eat Nabati", 
      latitude: 43.6550471, 
      longitude: -79.3999381 
    },
    { 
      id: 17, 
      name: "Fresh Kitchen + Juice Bar", 
      latitude: 43.6451451, 
      longitude: -79.41496 
    },
    { 
      id: 18, 
      name: "Fresh Kitchen + Juice Bar", 
      latitude: 43.6662198, 
      longitude: -79.4068619 
    },
    { 
      id: 19, 
      name: "Fat Choi", 
      latitude: 43.6462663, 
      longitude: -79.4197492 
    },
    { 
      id: 20, 
      name: "Good Grains", 
      latitude: 43.661895, 
      longitude: -79.5081512 
    },
    { 
      id: 21, 
      name: "Soy Boys", 
      latitude: 43.6644364, 
      longitude: -79.380259 
    },
    { 
      id: 22, 
      name: "V's Caribbean Restaurant Inc.", 
      latitude: 43.6882675, 
      longitude: -79.4924746 
    },
    { 
      id: 23, 
      name: "Vegan I Thali", 
      latitude: 43.6894333, 
      longitude: -79.2971479 
    },
    { 
      id: 24, 
      name: "Italian For Vegan", 
      latitude: 43.6787456, 
      longitude: -79.3469272 
    },
    { 
      id: 25, 
      name: "La Bartola", 
      latitude: 43.655437, 
      longitude: -79.4135957 
    },
    { 
      id: 26, 
      name: "Copper Branch", 
      latitude: 43.6481326, 
      longitude: -79.3795089 
    },
    { 
      id: 27, 
      name: "Kupfert & Kim", 
      latitude: 43.6485451, 
      longitude: -79.3820427 
    },
    { 
      id: 28, 
      name: "Kupfert & Kim", 
      latitude: 43.6477238, 
      longitude: -79.3963574 
    },
    { 
      id: 29, 
      name: "Veggie Paradise - Vegan Restaurant", 
      latitude: 43.6577036, 
      longitude: -79.6399689 
    },
    { 
      id: 30, 
      name: "Viet Chay Vegan Cuisine", 
      latitude: 43.7314132, 
      longitude: -79.464724 
    },
    { 
      id: 31, 
      name: "Raw Aura Organic Cuisine", 
      latitude: 43.5533645, 
      longitude: -79.5840434 
    },
    { 
      id: 32, 
      name: "Zen Gardens", 
      latitude: 43.6432099, 
      longitude: -79.7088415 
    },
    { 
      id: 33, 
      name: "Pulse Salad & Restaurant", 
      latitude: 43.667071, 
      longitude: -79.3445095 
    },
  ]);
}
