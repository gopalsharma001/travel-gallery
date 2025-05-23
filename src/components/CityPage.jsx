import React, { useState } from "react";
import "./CityPage.css";
import { useParams, useNavigate } from "react-router-dom";
import citiesData from "../utils/images/CitiesData";
import { FaAngleDoubleLeft, FaStar, FaAngleDoubleRight } from "react-icons/fa";
import CafesRestaurants from "./CafeRestaurants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Home.css";
import "../index.css";
import ReviewFlyout from "./ReviewFlyout";  // ✅ Import Flyout

const CityPage = () => {
    const { cityName } = useParams();
    const categories = ["All", "Historical", "Adventure", "Food", "Religious"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const cityData = citiesData[cityName.toLowerCase()];
    const [visibleCount, setVisibleCount] = useState(4);
    const [expanded, setExpanded] = useState(false);
    const cafesNames = cityName + "Cafes";
    const navigate = useNavigate();
    const [showFlyout, setShowFlyout] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);  // ✅ Track selected place

    // ✅ Handle Review Click
    const handleReviewClick = (e, place) => {
        e.stopPropagation();
        setSelectedPlace(place);       // Store the selected place
        setShowFlyout(true);
    };

    // ✅ Close the Flyout
    const handleCloseFlyout = () => {
        setShowFlyout(false);
        setSelectedPlace(null);
    };

    const toggleShowMore = () => {
        if (expanded) {
            setVisibleCount(4);
        } else {
            setVisibleCount(filteredPlaces.length);
        }
        setExpanded(!expanded);
    };

    if (!cityData) {
        return <h2>Error: City data not found.</h2>;
    }

    const filteredPlaces = selectedCategory === "All"
        ? cityData.attractions
        : cityData.attractions.filter(place => place.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());

    return (
        <>
            <div>
                {/* Hero Section */}
                <div className="hero-section">
                    <img src={cityData.heroImage} alt={cityData.cityName} className="hero-image" />
                    <h1>{cityData.cityName}</h1>
                    <p>{cityData.description}</p>
                </div>

                {/* Top Attractions */}
                <div className="attractions">
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

                    {/* See More Button */}
                    <div className="seeMoreBtn">
                        <button className="see-more-btn" onClick={toggleShowMore}>
                            {expanded ? "See Less" : "See More"}
                            {expanded ? <FaAngleDoubleLeft className="icon" /> : <FaAngleDoubleRight className="icon" />}
                        </button>
                    </div>

                    {/* Attractions Grid */}
                    <div className="attractions-grid">
                        {Array.isArray(cityData.attractions) && cityData.attractions.length > 0 ? (
                            filteredPlaces.slice(0, visibleCount).map((place, index) => (
                                <div
                                    key={index}
                                    className="place-card"
                                    onClick={() => navigate(`/places/${place.title.toLowerCase().replace(/\s+/g, "")}`)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={place.imageUrl} alt={place.title} />
                                    <h3>{place.title}</h3>
                                    <p>{place.location}</p>

                                    {/* Review Button */}
                                    <button className="review-btn" onClick={(e) => handleReviewClick(e, place)}>
                                        <FaStar className="star-icon" /> Write Review
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No attractions available.</p>
                        )}
                    </div>
                </div>

                <CafesRestaurants cityCafes={cafesNames} />

                {/* Swiper Carousel */}
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

            {/* Flyout Renders Outside Main Div */}
            {showFlyout && selectedPlace && (
                <ReviewFlyout 
                    place={selectedPlace}
                    onClose={handleCloseFlyout}
                />
            )}
        </>
    );
};

export default CityPage;
