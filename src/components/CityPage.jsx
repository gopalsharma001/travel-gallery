import React, { useState } from "react";
import "./CityPage.css";
import { useParams, useNavigate } from "react-router-dom";
import citiesData from "../utils/images/CitiesData";
import { FaSearch, FaTimes, FaBars, FaAngleDoubleLeft, FaStar, FaAngleDoubleRight } from "react-icons/fa";
import CafesRestaurants from "./CafeRestaurants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Home.css";
import "../index.css";
const CityPage = () => {
    const { cityName } = useParams(); // Get city name from URL
    const categories = ["All", "Historical", "Adventure", "Food", "Religious"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const cityData = citiesData[cityName.toLowerCase()]; // Get data from citiesData.js
    const [visibleCount, setVisibleCount] = useState(4); // Show 4 initially
    const [expanded, setExpanded] = useState(false);
    const cafesNames = cityName + "Cafes";
    const navigate = useNavigate();
    const toggleShowMore = () => {
        if (expanded) {
            setVisibleCount(4); // Show only 4 items
        } else {
            setVisibleCount(filteredPlaces.length); // Show all items
        }
        setExpanded(!expanded); // Toggle state
    };
    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 1); // Show 4 more each time
    };
    const showLess = () => {
        setVisibleCount((prevCount) => prevCount - 1); // Show 4 more each time
    };
    if (!cityData) {
        return <h2>Error: City data not found.</h2>;
    }
    console.log(cityData);
    const filteredPlaces = selectedCategory === "All"
        ? cityData.attractions
        : cityData.attractions.filter(place => place.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <img src={cityData.heroImage} alt={cityData.cityName} className="hero-image" />
                <h1>{cityData.cityName}</h1>
                <p>{cityData.description}</p>
            </div>

            {/* Top Attractions */}
            <div className="attractions">
                {filteredPlaces.length > 0 && (
                    <div className="parent-container">
                        <h2 className="title-heading">Top Attractions in {cityData.name}</h2>
                        <div className="button-container">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-button ${selectedCategory === category ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="attractions-grid">
                    {Array.isArray(cityData.attractions) && cityData.attractions.length > 0 ? (
                        filteredPlaces.slice(0, visibleCount).map((place, index) => (
                            <div key={index} className="place-card"
                                onClick={() => navigate(`/places/${place.title.toLowerCase().replace(/\s+/g, "")}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={place.imageUrl} alt={place.title} />
                                <h3>{place.title}</h3>
                                <p>{place.location}</p>
                            </div>
                        ))
                    ) : (
                        <p>No attractions available.</p>
                    )}

                </div>
                <div className="seeMoreBtn">
                    <button className="see-more-btn" onClick={toggleShowMore}>
                        {expanded ? "See Less" : "See More"}
                        {expanded ? <FaAngleDoubleLeft className="icon" /> : <FaAngleDoubleRight className="icon" />}
                    </button>

                </div>
            </div>
            <CafesRestaurants cityCafes={cafesNames} />

            <div className="p-6">
                {/* Header Section */}
                {filteredPlaces.length > 0 && (
                    <div className="bg-gray-200 p-6 rounded-lg text-center mb-6 shadow-md">
                        <h1 className="text-4xl font-bold text-gray-800 responsive-heading">Explore {cityName.toLocaleUpperCase()}</h1>
                        <p className="text-lg text-gray-600 responsive-text">Discover the best places to visit</p>
                    </div>
                )}
            </div>
            <div className="carousel-container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {filteredPlaces.map((place, index) => (
                        <SwiperSlide key={index} className="slide">
                            <img src={place.imageUrl} alt={place.title} className="carousel-image" />
                            <div className="text-container">
                                <h2 className="title">{place.title}</h2>
                                <p className="subtitle">{place.location}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default CityPage;
