import assets from "../../assests"; // Importing images

const redfort = {
    name: "Red Fort",
    tagline: "A symbol of India's rich history.",
    image: assets.redfort,
    location: "Delhi, India",
    bestTime: "5 PM - 7 PM",
    entryFee: "₹50",
    builtBy: "Shah Jahan",
    duration: "2-3 hours",
    description: "The Red Fort, built in 1639, is a historic fort in Delhi...",
    gallery: [
        assets.redfort,
        assets.redfort,
        assets.redfort,
    ],
    nearby: [
      { name: "Jama Masjid", image: assets.delhiJama },
      { name: "Chandni Chowk", image:assets.delhiMosque},
    ],
    reviews: [
      { user: "Amit", comment: "Amazing place with great history!", rating: 5 },
      { user: "Sara", comment: "Loved the architecture!", rating: 4.5 },
    ],
    tips: "Carry an ID, best visited in the evening, avoid weekends for crowds.",
  };

  const indiagate = {
    name: "India Gate",
    tagline: "A symbol of India's rich history.",
    image: assets.delhiIndiagate,
    location: "Delhi, India",
    bestTime: "5 PM - 7 PM",
    entryFee: "₹50",
    builtBy: "Shah Jahan",
    duration: "2-3 hours",
    description: "The Red Fort, built in 1639, is a historic fort in Delhi...",
    gallery: [
        assets.banglasahib,
        assets.redfort,
        assets.citypalacedehi,
    ],
    nearby: [
      { name: "Jama Masjid", image: assets.delhiJama },
      { name: "Chandni Chowk", image:assets.delhiMosque},
    ],
    reviews: [
      { user: "Amit", comment: "Amazing place with great history!", rating: 5 },
      { user: "Sara", comment: "Loved the architecture!", rating: 4.5 },
      { user: "Sara", comment: "Loved the architecture!", rating: 4 },
    ],
    tips: "Carry an ID, best visited in the evening, avoid weekends for crowds.",
  };
  // ✅ Exporting all cities inside an object
const PlaceData = {redfort, indiagate};

export default PlaceData;