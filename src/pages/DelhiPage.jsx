import React from "react";
import CityPage from "../components/CityPage";
import assests from "../assests"; // Importing images
const delhiAttractions = [
    { title: "Red Fort", location: "Symbol of India's Independence", imageUrl: assests.redfort },
    { title: "India Gate", location: "War Memorial Honoring Soldiers", imageUrl: assests.delhiIndiagate },
    { title: "Humayun's Tomb", location: "Inspiration for the Taj Mahal", imageUrl: assests.humayuntomb },
    { title: "Jama Masjid", location: "One of India's Largest Mosques", imageUrl: assests.delhiIndiagate },
    { title: "Akshardham Temple", location: "Spectacular Hindu Temple with Light Show", imageUrl: assests.akshardhamdelhi },
];
const a = [
    { title: "Red Fort", location: "Symbol of India's Independence", imageUrl: assests.redfort },
]

const DelhiPage = () => {
    console.log("Assets:", assests);
    console.log("Delhi Attractions:", delhiAttractions);
    console.log("Hero Image:", assests.delhi);

    return (

        <CityPage
            cityName="Delhi"
            heroImage={assests.delhiIndiagate}
            description="Delhi, the capital of India, is a city rich in history and modern attractions."
            attractions={delhiAttractions}
        />
    );
};

export default DelhiPage;
