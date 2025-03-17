import React, { useState } from "react";
import { Search } from "lucide-react";
import "../styles/CitySelection.css";
import hm from "../assests/hawamahal2.jpg";
import delhi from "../assests/delhi.png";
import jaipur from "../assests/jaipur.png";
import mumbai from "../assests/mumbai.png";
import gurgaon from "../assests/skyscraper.png";
import { useNavigate } from "react-router-dom";
const popularCities = [
    { name: "Delhi", icon: delhi },
    { name: "Mumbai", icon: mumbai },
    { name: "Pune", icon: hm },
    { name: "Jaipur", icon: jaipur },
    { name: "Gurgaon", icon: gurgaon },
];

const moreCities = [
    { name: "Chandigarh" },
    { name: "Coimbatore" },
    { name: "Faridabad", isNew: true },
    { name: "Ghaziabad", isNew: true },
    { name: "Indore" },
    { name: "Kochi" },
];

const CitySelection = () => {
    const [searchTerm, setSearchTerm] = useState(""); // 🔹 State for input field
    // 🔹 Filtered list of cities based on search input
    const filteredCities = popularCities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const navigate = useNavigate();

    const handleCityClick = (cityName) => {
        navigate(`${cityName.toLowerCase()}`);
    };
    return (
        <div className="city-selection">
            {/* Search Bar */}
            <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search for a city..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Popular Cities */}
            <h2 className="section-title">POPULAR CITIES</h2>
            <div className="popular-cities">
                {filteredCities.length > 0 ? (
                    filteredCities.map((city, index) => (
                        <div 
                            key={index} 
                            className="city-card" 
                            onClick={() => handleCityClick(city.name)}
                            style={{ cursor: "pointer" }} // 🔹 Add pointer cursor for better UX
                        >
                            <img src={city.icon} alt={city.name} />
                            <span>{city.name}</span>
                        </div>

                    ))
                ) : (
                    <p className="no-results">No cities found.</p> // 🔹 Show message if no match
                )}
            </div>

            {/* More Cities */}
            <h2 className="section-title">MORE CITIES</h2>
            <div className="more-cities">
                {moreCities.map((city, index) => (
                    <div key={index} className="city-pill">
                        {city.name}
                        {city.isNew && <span className="new-label">New</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CitySelection;
