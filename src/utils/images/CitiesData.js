import assets from "../../assests"; // Importing images

const delhi = {
    name: "Delhi",
    heroImage: assets.delhiIndiagate,
    description: "Delhi, the capital of India, is a city rich in history and modern attractions.",
    categories: ["Historical", "Religious", "Modern", "Cultural"],
    attractions: [
        { title: "Red Fort", location: "Symbol of India's Independence", category: "Historical", imageUrl: assets.redfort },
        { title: "India Gate", location: "War Memorial Honoring Soldiers", category: "Historical", imageUrl: assets.delhiIndiagate },
        { title: "Humayun's Tomb", location: "Inspiration for the Taj Mahal", category: "Historical", imageUrl: assets.humayuntomb },
        { title: "Jama Masjid", location: "One of India's Largest Mosques", category: "Religious", imageUrl: assets.delhiJama },
        { title: "Akshardham Temple", location: "Spectacular Hindu Temple with Light Show", category: "Religious", imageUrl: assets.akshardhamdelhi },
        { title: "Jama Masjid", location: "One of India's Largest Mosques", category: "Religious", imageUrl: assets.delhiJama },
        { title: "Akshardham Temple", location: "Spectacular Hindu Temple with Light Show", category: "Religious", imageUrl: assets.akshardhamdelhi }
    ]
};
const delhiCafes = {
    "name": "New Delhi",
    "cafes": [
      {
        "title": "Blue Tokai Coffee Roasters",
        "location": "Saket, New Delhi",
        "imageUrl": assets.bluetokai
      },
      {
        "title": "Big Chill Cafe",
        "location": "Khan Market, New Delhi",
        "imageUrl": assets.amer
      },
      {
        "title": "Perch Wine & Coffee Bar",
        "location": "Khan Market, New Delhi",
        "imageUrl": assets.amermahal
      },
      {
        "title": "Cafe Lota",
        "location": "Pragati Maidan, New Delhi",
        "imageUrl": assets.delhiIndiagate
      },
      {
        "title": "Di Ghent Cafe",
        "location": "DLF Phase 4, Gurgaon",
        "imageUrl": assets.akshardhamdelhi
      },
      {
        "title": "Roastery Coffee House",
        "location": "Noida, Uttar Pradesh",
        "imageUrl": assets.hawamahal
      },
      {
        "title": "United Coffee House",
        "location": "Connaught Place, New Delhi",
        "imageUrl": assets.hawamahal2
      },
      {
        "title": "Fig at Museo",
        "location": "Mehrauli, New Delhi",
        "imageUrl": assets.humayuntomb
      },
      {
        "title": "Diggin",
        "location": "Chanakyapuri, New Delhi",
        "imageUrl": assets.jaipur
      },
      {
        "title": "FIO Cookhouse & Bar",
        "location": "Nehru Place, New Delhi",
        "imageUrl": assets.delhi
      },
      {
        "title": "Olive Bar & Kitchen",
        "location": "Mehrauli, New Delhi",
        "imageUrl": assets.hawamahal2
      },
      {
        "title": "Jugmug Thela",
        "location": "Saket, New Delhi",
        "imageUrl": assets.citypalacedehi
      }
    ]
  }
  
const jaipur = {
    name: "Jaipur",
    heroImage: assets.hawamahal2,
    description: "Jaipur, the Pink City of India, is known for its royal palaces and cultural heritage.",
    categories: ["Palace", "Historical", "Religious", "Cultural"],
    attractions: [
        { title: "Hawa Mahal", location: "Iconic 'Palace of Winds' in Jaipur", category: "Palace", imageUrl: assets.hawamahal2 },
        { title: "Amer Fort", location: "Stunning Fort with Light Show", category: "Historical", imageUrl: assets.amer },
        { title: "Jantar Mantar", location: "Largest Stone Astronomical Observatory", category: "Historical", imageUrl: assets.banglasahib },
        { title: "City Palace", location: "Majestic Residence of the Jaipur Royal Family", category: "Palace", imageUrl: assets.citypalace },
        { title: "Birla Mandir", location: "Beautiful White Marble Temple", category: "Religious", imageUrl: assets.birlamandir }
    ]
};
const jaipurCafes = {
    "name": "New Delhi",
    "cafes": [
      {
        "title": "Blue Tokai Coffee Roasters",
        "location": "Saket, Jaipur",
        "imageUrl": assets.akshardhamdelhi
      },
      {
        "title": "Big Chill Cafe",
        "location": "Khan Market, jaipur",
        "imageUrl": assets.amer
      },
      {
        "title": "Perch Wine & Coffee Bar",
        "location": "Khan Market, New Delhi",
        "imageUrl": assets.amermahal
      },
      {
        "title": "Cafe Lota",
        "location": "Pragati Maidan, New Delhi",
        "imageUrl": assets.delhiIndiagate
      },
      {
        "title": "Di Ghent Cafe",
        "location": "DLF Phase 4, Gurgaon",
        "imageUrl": assets.akshardhamdelhi
      },
      {
        "title": "Roastery Coffee House",
        "location": "Noida, Uttar Pradesh",
        "imageUrl": assets.hawamahal
      },
      {
        "title": "United Coffee House",
        "location": "Connaught Place, New Delhi",
        "imageUrl": assets.hawamahal2
      },
      {
        "title": "Fig at Museo",
        "location": "Mehrauli, New Delhi",
        "imageUrl": assets.humayuntomb
      },
      {
        "title": "Diggin",
        "location": "Chanakyapuri, New Delhi",
        "imageUrl": assets.jaipur
      },
      {
        "title": "FIO Cookhouse & Bar",
        "location": "Nehru Place, New Delhi",
        "imageUrl": assets.delhi
      },
      {
        "title": "Olive Bar & Kitchen",
        "location": "Mehrauli, New Delhi",
        "imageUrl": assets.hawamahal2
      },
      {
        "title": "Jugmug Thela",
        "location": "Saket, New Delhi",
        "imageUrl": assets.citypalacedehi
      }
    ]
  }

const mumbai = {
    name: "Mumbai",
    heroImage: assets.gatewayofindia,
    description: "Mumbai, the financial capital of India, is famous for Bollywood and historic landmarks.",
    categories: ["Beach", "Historical", "Religious", "Modern"],
    attractions: [
        { title: "Gateway of India", location: "Historic Archway Overlooking the Arabian Sea", category: "Historical", imageUrl: assets.gatewayofindia },
        { title: "Marine Drive", location: "Beautiful Coastal Boulevard", category: "Beach", imageUrl: assets.marinedrive },
        { title: "Elephanta Caves", location: "Ancient Rock-Cut Temples", category: "Historical", imageUrl: assets.elephantacaves },
        { title: "Siddhivinayak Temple", location: "Famous Ganesh Temple", category: "Religious", imageUrl: assets.siddhivinayak },
        { title: "Bandra-Worli Sea Link", location: "Modern Engineering Marvel", category: "Modern", imageUrl: assets.sealink }
    ]
};

// ✅ Exporting all cities inside an object
const CitiesData = { delhi, jaipur, mumbai, delhiCafes, jaipurCafes};

export default CitiesData;
