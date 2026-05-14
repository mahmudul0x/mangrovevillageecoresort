import roomImg from "@/assets/room-interior.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import villageImg from "@/assets/village-life.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import boatImg from "@/assets/boat-sunrise.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import foodImg from "@/assets/food-bengali.jpg";

export type Room = {
  slug: string;
  name: string;
  price: string;
  priceNum: number;
  img: string;
  gallery: string[];
  size: string;
  guests: string;
  beds: string;
  view: string;
  blurb: string;
  long: string[];
  amenities: string[];
  policies: string[];
};

export const rooms: Room[] = [
  {
    slug: "riverside-ac-cottage",
    name: "Riverside AC Cottage",
    price: "8,500", priceNum: 8500, img: roomImg,
    gallery: [roomImg, cottageImg, boatImg, mangroveImg],
    size: "32 m²", guests: "2 guests", beds: "1 King bed", view: "Mangrove channel",
    blurb: "Our flagship cottage. Floor-to-ceiling windows open onto the mangrove channel. AC, mini-bar, private deck.",
    long: [
      "Wake up to the sound of the tide turning. Our Riverside AC Cottage is the most asked-for stay at Mangrove Village — a teak-wood retreat suspended just above the water, with a private deck that becomes a sunrise theatre.",
      "Inside: a king bed dressed in linen, a writing desk by the window, an air-conditioned silence, and a hot shower with mangrove honey toiletries. Outside: a hammock, two armchairs, and the river.",
      "Best for couples, honeymooners, and writers chasing the soft hours.",
    ],
    amenities: ["Air conditioning","Private river deck","King bed with linen sheets","Hot shower & rain head","Mini-bar (complimentary)","In-room safe","Mineral water (refilled daily)","Mangrove honey toiletries","Welcome fruit platter","Mosquito net canopy"],
    policies: ["Check-in 2:00 PM · Check-out 12:00 PM","Free cancellation up to 48 hours","Children under 5 stay free","Pets are not permitted"],
  },
  {
    slug: "wooden-cottage-i",
    name: "Wooden Non-AC Cottage I",
    price: "5,500", priceNum: 5500, img: cottageImg,
    gallery: [cottageImg, villageImg, mangroveImg, roomImg],
    size: "26 m²", guests: "2 guests", beds: "1 Queen bed", view: "Garden",
    blurb: "Hand-built teak cottage with cross-ventilation, mosquito net canopy, and a hammock on the porch.",
    long: [
      "An honest, hand-built teak cottage in the heart of the garden. Cross-ventilation keeps the air moving even on warm afternoons; the porch hammock keeps you exactly where you should be.",
      "Best for travellers who like their luxury simple and their evenings without a remote control.",
    ],
    amenities: ["Ceiling fan","Garden view","Queen bed","Hot shower","Tea station","In-room locker","Mineral water","Hammock porch"],
    policies: ["Check-in 2:00 PM · Check-out 12:00 PM","Free cancellation up to 48 hours"],
  },
  {
    slug: "wooden-cottage-ii",
    name: "Wooden Non-AC Cottage II",
    price: "4,200", priceNum: 4200, img: villageImg,
    gallery: [villageImg, cottageImg, boatImg, bbqImg],
    size: "22 m²", guests: "2 guests", beds: "2 Single beds", view: "Forest",
    blurb: "Cosy traveller cottage tucked among the mango trees. Best for friends and solo wanderers.",
    long: ["Tucked among mango and tamarind trees, this cosy cottage is our most-loved budget stay. Two single beds, a desk, and a tiny verandah where the parrots gather at dusk."],
    amenities: ["Ceiling fan","Forest view","Two single beds","Hot shower","Tea station","Locker","Reading lamp"],
    policies: ["Check-in 2:00 PM · Check-out 12:00 PM","Free cancellation up to 48 hours"],
  },
  {
    slug: "family-wooden-cottage",
    name: "Family Wooden Cottage",
    price: "12,000", priceNum: 12000, img: cottageImg,
    gallery: [cottageImg, roomImg, villageImg, foodImg],
    size: "54 m²", guests: "4 guests", beds: "2 Bedrooms", view: "Private garden",
    blurb: "Two-bedroom cottage with a shared sitting room and a private garden. Designed for families with kids.",
    long: ["Two private bedrooms, a shared sitting room, and a fenced garden where the kids can run free. We can set up a small bonfire on request — and bring an extra pillow fort if needed."],
    amenities: ["Air conditioning","Two bedrooms","Family lounge","Private garden","Hot showers ×2","Mini-fridge","Toiletries","Cribs on request","High chairs","Board games"],
    policies: ["Check-in 2:00 PM · Check-out 12:00 PM","Children under 8 stay free","Free cancellation up to 72 hours"],
  },
  {
    slug: "group-dormitory",
    name: "Group Dormitory",
    price: "2,500", priceNum: 2500, img: bbqImg,
    gallery: [bbqImg, villageImg, boatImg, mangroveImg],
    size: "Per bed · 8 beds", guests: "Up to 8", beds: "Bunk beds", view: "Communal verandah",
    blurb: "A bright, airy long-house for groups and college trips. Lockers, shared bathrooms, and a big communal verandah.",
    long: ["Built for college trips, photography clubs, and friend-groups who want one big sleepover. Eight bunks, four lockers, two clean shared bathrooms, and a verandah long enough for a guitar circle."],
    amenities: ["Ceiling fans","Personal lockers","Shared bathrooms","Group lounge","Tea station","Mineral water","Verandah seating"],
    policies: ["Per-bed pricing","Group leader required","Quiet hours after 11 PM"],
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
