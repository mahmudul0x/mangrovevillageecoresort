import boatImg from "@/assets/boat-sunrise.jpg";
import mangroveImg from "@/assets/mangrove-roots.jpg";
import bbqImg from "@/assets/bbq-night.jpg";
import villageImg from "@/assets/village-life.jpg";
import cottageImg from "@/assets/cottage-river.jpg";
import foodImg from "@/assets/food-bengali.jpg";

export type Experience = {
  slug: string; t: string; img: string; gallery: string[];
  d: string; duration: string; price: string; group: string; difficulty: string;
  long: string[]; includes: string[]; bring: string[];
};

export const experiences: Experience[] = [
  { slug:"sundarbans-boat-tour", t:"Sundarbans Boat Tour", img:boatImg, gallery:[boatImg,mangroveImg,villageImg],
    d:"A slow drift through tidal channels. Watch the forest wake up.",
    duration:"4 hours", price:"৳ 2,800 / person", group:"Up to 8", difficulty:"Easy",
    long:["Start before sunrise. Our wooden boat threads narrow tidal channels where the mangrove roots arch overhead like cathedrals. Your guide is a third-generation forest fisherman — he reads the water the way other people read books.",
      "We pause at a hidden bend for tea, biscuits, and the kind of silence you forget exists. By 9 AM, the forest is fully awake and we drift home with the morning light on the water."],
    includes:["Wooden boat with life jackets","Local naturalist guide","Hot tea & breakfast snack","Binoculars on request"],
    bring:["Light jacket","Hat & sunscreen","Camera","Water bottle"] },
  { slug:"kalabagi-eco-tourism", t:"Kalabagi Eco Tourism", img:mangroveImg, gallery:[mangroveImg,boatImg,villageImg],
    d:"Visit the Kalabagi Forest Station. Spot wildlife from a safe walking trail.",
    duration:"6 hours", price:"৳ 3,500 / person", group:"Up to 6", difficulty:"Moderate",
    long:["A guided day trip to the Kalabagi Forest Station — one of the safest entry points to walk inside the Sundarbans. Watchtowers, raised wooden trails, and a forest officer escort.",
      "You'll see deer, monitor lizards, kingfishers, and (if the forest decides to grant it) the broad pug-mark of a tiger that crossed the trail at dawn."],
    includes:["Boat transfer","Forest officer escort","Permit fees","Packed lunch","Naturalist guide"],
    bring:["Closed walking shoes","Long sleeves","Insect repellent","Refillable bottle"] },
  { slug:"hanging-village", t:"Hanging Village Walk", img:villageImg, gallery:[villageImg,cottageImg,mangroveImg],
    d:"Wooden walkways above the marsh. A way of life suspended over the water.",
    duration:"2 hours", price:"৳ 800 / person", group:"Up to 12", difficulty:"Easy",
    long:["A guided walk through the famous hanging village — a cluster of homes built on stilts above the tidal marsh, connected by wooden walkways. Meet the families. Sit in their kitchens. Hear the story."],
    includes:["Local guide","Tea with a host family","Photography permission"],
    bring:["Comfortable shoes","Modest clothing"] },
  { slug:"village-lifestyle", t:"Village Lifestyle Day", img:villageImg, gallery:[villageImg,foodImg,cottageImg],
    d:"Tea with neighbours. Watch a fisherman mend nets. Try the rhythm yourself.",
    duration:"Half day", price:"৳ 1,200 / person", group:"Up to 10", difficulty:"Easy",
    long:["Spend a morning living the village rhythm. Help knead the morning dough, walk to the pond with a fishing line, sit with the women weaving palm mats, and finish with a long lunch under the mango tree."],
    includes:["Village host family","All meals","Translator","Activity materials"],
    bring:["Curiosity","A small notebook"] },
  { slug:"fishing-experience", t:"Fishing Experience", img:boatImg, gallery:[boatImg,bbqImg,foodImg],
    d:"Cast nets at golden hour. Cook your catch on an open fire.",
    duration:"3 hours", price:"৳ 1,800 / person", group:"Up to 6", difficulty:"Easy",
    long:["A local fisherman takes you out at golden hour. Learn to cast a hand-net, set bamboo traps, and read the river. Whatever you catch, our chef cooks for dinner that night, in a banana leaf, on an open fire."],
    includes:["Boat & fishing gear","Local fisherman guide","Cook your catch dinner"],
    bring:["Old clothes you don't mind getting wet","Towel"] },
  { slug:"riverside-bbq-night", t:"Riverside BBQ Night", img:bbqImg, gallery:[bbqImg,foodImg,villageImg],
    d:"Mango wood embers. Local catch. Lanterns above. Stories below.",
    duration:"Evening (3 hrs)", price:"৳ 1,400 / person", group:"Up to 30", difficulty:"Easy",
    long:["Every Friday night we light the long fire on the riverside deck. Mango wood embers, the day's catch, charred paneer for the vegetarians, fresh paratha, tamarind cooler, and a guitar circle that tends to last past midnight."],
    includes:["Full BBQ dinner","Welcome drink","Lantern setup","Live acoustic music"],
    bring:["A song to play","Warm layer for late evening"] },
  { slug:"nature-photography", t:"Nature Photography Tour", img:mangroveImg, gallery:[mangroveImg,boatImg,villageImg],
    d:"Guided golden-hour boat slots. Bird hides. Local fixer who knows the light.",
    duration:"5 hours", price:"৳ 4,200 / person", group:"Up to 4", difficulty:"Moderate",
    long:["Our photography tour is built for serious shooters. Two boat slots — sunrise and sunset — with a fixer who knows where the kingfishers perch and where the deer come to drink. Bird hides, raised platforms, and patience built in."],
    includes:["Two boat slots","Photography fixer","Bird hide access","Tea & breakfast"],
    bring:["Long lens (300mm+)","Tripod","Memory cards","Patience"] },
  { slug:"rainy-season-beauty", t:"Rainy Season Retreat", img:cottageImg, gallery:[cottageImg,mangroveImg,foodImg],
    d:"The forest in monsoon — every leaf a bell, every channel a song.",
    duration:"2 nights", price:"৳ 9,500 / person", group:"Up to 10", difficulty:"Easy",
    long:["A two-night monsoon escape. Covered verandahs, hot khichuri lunches, slow boat rides between rain showers, and the deep green of a forest drinking deeply. Bring a book you've been meaning to finish."],
    includes:["2 nights stay","All meals","One slow boat ride","Monsoon welcome kit"],
    bring:["Rain jacket","Waterproof shoes","Plastic bag for camera"] },
  { slug:"local-market-visit", t:"Local Market Visit", img:villageImg, gallery:[villageImg,foodImg,cottageImg],
    d:"Walk the morning haat. Spices, fish, gossip, and very good chai.",
    duration:"2 hours", price:"৳ 600 / person", group:"Up to 8", difficulty:"Easy",
    long:["A guided walk through the morning haat (market). Spice mountains, fresh river fish on banana leaves, hand-blended mustard oil, and the loudest, friendliest chai stall in the district."],
    includes:["Local guide","Tea & snacks","Tasting samples"],
    bring:["Cash for small purchases","Cloth shopping bag"] },
  { slug:"community-engagement", t:"Community Engagement", img:villageImg, gallery:[villageImg,mangroveImg,cottageImg],
    d:"Help plant a mangrove sapling. Read with kids at the village school.",
    duration:"Half day", price:"৳ 0 (donation welcome)", group:"Up to 15", difficulty:"Easy",
    long:["A morning of giving back. Plant a mangrove sapling that will outlive all of us. Read with the kids at the village primary school. Sit with the women's cooperative and hear what they're building."],
    includes:["Sapling & tools","School supplies kit","Translator"],
    bring:["A children's book in English (optional gift)"] },
  { slug:"handicraft-culture", t:"Handicraft Culture", img:villageImg, gallery:[villageImg,cottageImg,foodImg],
    d:"Weave with the artisans. Take home something nobody else has.",
    duration:"3 hours", price:"৳ 1,500 / person", group:"Up to 6", difficulty:"Easy",
    long:["Spend an afternoon with our village artisans. Learn to weave a small palm-leaf mat, dye cotton with natural pigments, or shape a clay pot on the wheel. Take home what you make."],
    includes:["All materials","Master artisan teacher","Take-home piece"],
    bring:["An apron (optional)"] },
  { slug:"riverside-relaxation", t:"Riverside Relaxation", img:cottageImg, gallery:[cottageImg,roomImage(),mangroveImg],
    d:"Hammock. Book. Tea. Repeat. We don't judge.",
    duration:"All day", price:"Included with stay", group:"Solo to 4", difficulty:"Easy",
    long:["Some guests arrive and never leave the deck. We support this. Free hammocks, a small library of books in English and Bangla, an unlimited tea kettle, and the river doing its slow work right beside you."],
    includes:["Hammock & cushions","Library access","Unlimited tea"],
    bring:["A book you've been putting off"] },
];

function roomImage() { return cottageImg; }

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
