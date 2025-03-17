import { useState } from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import citiesData from "../utils/images/CitiesData";
import "./CafeRestaurants.css";
import "../index.css";
const CafesRestaurants = ({ cityCafes }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const cityData = citiesData[cityCafes]; // Get data from citiesData.js
  console.log(cityData);
  
  const filteredCafes = cityData.cafes || []; // Assuming cityData has a cafes array

  const toggleShowMore = () => {
    if (expanded) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="cafes-container">
      {filteredCafes.length > 0 && <h2 className="title-heading">Top Cafes & Restaurants in {cityData.name}</h2>}
      
      <div className="cafes-grid">
        {filteredCafes.length > 0 ? (
          filteredCafes.slice(0, visibleCount).map((cafe, index) => (
            <div key={index} className="cafe-card">
              <img src={cafe.imageUrl} alt={cafe.title} />
              <h3>{cafe.title}</h3>
              <p>{cafe.location}</p>
            </div>
          ))
        ) : (
          <p>No cafes available.</p>
        )}
      </div>

      {filteredCafes.length > 4 && (
        <div className="seeMoreBtn">
          <button className="see-more-btn" onClick={toggleShowMore}>
            {expanded ? "See Less" : "See More"} 
            {expanded ? <FaAngleDoubleLeft className="icon" /> : <FaAngleDoubleRight className="icon" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default CafesRestaurants;
