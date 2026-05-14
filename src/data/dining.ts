import foodImg from "@/assets/food-bengali.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import villageImg from "@/assets/village-life.jpg";
import boatImg from "@/assets/boat-sunrise.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";

export type Dish = { n: string; d: string; p: string; img: string };
export type DishGroup = { cat: string; items: Dish[] };

export const menu: DishGroup[] = [
  { cat: "Mornings", items: [
    { n: "Khichuri & egg", d: "Slow-cooked rice & lentils. Comfort in a bowl.", p: "180", img: foodImg },
    { n: "Paratha & bhaji", d: "Hand-rolled paratha, seasonal vegetable curry.", p: "160", img: villageImg },
    { n: "Pithe & jaggery", d: "Steamed rice cakes with date palm jaggery.", p: "140", img: cottageImg },
  ]},
  { cat: "Mains", items: [
    { n: "Duck curry", d: "Wood-fire slow-cooked. Khulna-style.", p: "420", img: foodImg },
    { n: "Smoked mangrove fish", d: "Today's catch, smoked over mango wood.", p: "380", img: boatImg },
    { n: "Deshi chicken roast", d: "Free-range, simmered in roasted spice paste.", p: "360", img: villageImg },
    { n: "Vegetable thali", d: "Five seasonal vegetables, dal, rice, pickle.", p: "280", img: foodImg },
  ]},
  { cat: "Evenings", items: [
    { n: "Riverside BBQ platter", d: "Fish, chicken, paneer, charred vegetables.", p: "650", img: bbqImg },
    { n: "Sundarbans honey lassi", d: "Yogurt, wild honey, hint of cardamom.", p: "120", img: mangroveImg },
    { n: "Pickle & date desserts", d: "House-made nolen gur ice cream.", p: "180", img: foodImg },
  ]},
];
