import boatImg from "@/assets/boat-sunrise.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import villageImg from "@/assets/village-life.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import foodImg from "@/assets/food-bengali.jpg";

export type Story = {
  slug: string; t: string; img: string; cat: string; d: string; e: string;
  author: string; date: string;
  body: string[];
};

export const stories: Story[] = [
  { slug:"first-timers-guide-sundarbans", t:"A first-timer's guide to the Sundarbans",
    img:boatImg, cat:"Travel Guide", d:"8 min read", e:"When to come, what to pack, and how to slow your shoulders down.",
    author:"Tasnim Ahmed", date:"March 2026",
    body:[
      "The Sundarbans is not a place you can rush. It's the world's largest mangrove forest, a living delta where the rivers don't end — they just become the sea slowly. If it's your first visit, here's what we wish someone had told us.",
      "The best months are October through March. The air is cool, the mosquitoes are reasonable, and the migratory birds are home. April and May are hot and bright — beautiful, but slow your plans down. Monsoon (June to September) is for those who don't mind getting wet, and who want to see the forest at its most alive.",
      "Pack light, but pack right. Long sleeves and trousers in neutral colours. Closed walking shoes. A wide-brim hat. Reef-safe sunscreen. A refillable bottle. Binoculars if you have them. And — this is the secret — a notebook. The Sundarbans gives you long stretches of silence that ask to be written in.",
      "When you arrive at Mangrove Village, give yourself 24 hours before you do anything. Walk the deck. Drink the tea. Let your shoulders fall. The forest is patient. It will still be here tomorrow.",
    ] },
  { slug:"why-eco-tourism-rebuilding-village", t:"Why eco-tourism is rebuilding our village",
    img:villageImg, cat:"Eco Tourism", d:"6 min read", e:"Twenty households. Two boats. One quiet revolution.",
    author:"Rashed Khan", date:"February 2026",
    body:[
      "When we started Mangrove Village, our village had two boats and twenty households. The young men were leaving for Dhaka. The women were carrying water from a well that was slowly turning salty.",
      "We didn't set out to start a movement. We just wanted a place where guests could see the Sundarbans the way we see it — not from a cruise ship, but from a wooden deck with a cup of tea.",
      "Three years in, twelve households have rebuilt their kitchens. The school has a new roof. We've planted 4,200 mangrove saplings. Two of our young guides are studying biology in Khulna. The village has its own water filter.",
      "Eco-tourism, when it's local, is not a soft thing. It's an economy. It's dignity. And it's a quiet, slow, deeply persistent revolution.",
    ] },
  { slug:"monsoon-most-underrated-season", t:"Monsoon: the most underrated season",
    img:mangroveImg, cat:"Nature", d:"5 min read", e:"Yes, it rains. Yes, you should come anyway.",
    author:"Tasnim Ahmed", date:"July 2025",
    body:[
      "Most travel guides will tell you to skip the Sundarbans in monsoon. We disagree, gently and firmly.",
      "Monsoon is when the forest drinks. Every leaf is a bell. The channels rise and the boat rides become slow, deliberate, almost meditative. The crowds are gone. The light is silver.",
      "Yes, you'll get wet. We'll bring you a towel and a hot bowl of khichuri. Bring a rain jacket and a sense of humour. Leave room in your luggage for a story you didn't expect.",
    ] },
  { slug:"three-nights-one-notebook", t:"Three nights, one notebook",
    img:cottageImg, cat:"Travel Story", d:"7 min read", e:"A journalist's diary from a long weekend in our cottages.",
    author:"Sadia Rahman", date:"December 2025",
    body:[
      "I came for a weekend. I stayed for four nights. Here is the notebook.",
      "Day one: arrived exhausted. Wrote nothing. Drank tea on the deck. Watched a kingfisher dive three times in a row. Slept at 9 PM.",
      "Day two: boat ride before sunrise. The forest was still asleep. The first light hit the water and I cried, a little, for reasons I cannot explain. Wrote two pages.",
      "Day three: village walk. Met the women's cooperative. Learned how to weave a palm mat. Failed beautifully. Wrote five pages.",
      "Day four: did nothing. The best day. Wrote ten pages.",
    ] },
  { slug:"cooking-like-khulna-grandmother", t:"Cooking like a Khulna grandmother",
    img:foodImg, cat:"Food", d:"10 min read", e:"The recipes our kitchen cooks. The stories that came with them.",
    author:"Chef Anwar", date:"November 2025",
    body:[
      "Every dish in our kitchen comes from a grandmother. Some of the grandmothers are still alive. Some are not. The recipes don't care.",
      "Take our duck curry. It comes from my own grandmother, who lived three doors down from where the kitchen now stands. She slow-cooked her duck for four hours over wood fire, with mustard oil, garlic, and a paste she ground fresh every morning.",
      "We still grind the paste fresh. The wood is still mango. The duck is from the village pond. The recipe is, line for line, the one she taught me. And every guest who orders it, in some small way, eats with her.",
    ] },
  { slug:"photographers-notes-golden-hour-boat", t:"Photographer's notes: the golden hour boat",
    img:bbqImg, cat:"Photography", d:"6 min read", e:"Where to stand, where to wait, what light to chase.",
    author:"Imran Hossain", date:"October 2025",
    body:[
      "If you're shooting the Sundarbans, the light is everything. The two windows that matter are the 30 minutes after sunrise and the 30 minutes before sunset. Plan your boat slots around these.",
      "Stand at the bow. Shoot wide for the channels and tight for the birds. A 70-200mm covers most situations; a 400mm gives you the wildlife pulls.",
      "And don't forget to put the camera down sometimes. The forest gives you a different kind of image when you watch with your eyes.",
    ] },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
