import React from "react";
import "./PlaceDetails.css";
import { useParams } from "react-router-dom";
import PlaceData from "../utils/images/PlaceData";
import { FaBucket } from "react-icons/fa6";
const PlaceDetails = () => {
  const { placeId } = useParams();
  console.log(placeId);

  const place = PlaceData[placeId];
  console.log(place);
  const ratings = place.reviews.map(r => r.rating);
  const avgRating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1); // e.g. "4.8"
  // ✅ Handle Add to bucket Click
  const handleAddToBucketListClick = (e, place) => {
    // e.stopPropagation();
    // setSelectedPlace(place);       // Store the selected place
    // setShowFlyout(true);
    console.log("Clicked");

  };
  if (!place) return <p>Loading...</p>;

  return (
    <div className="place-details">
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${place.image})` }}>
        {/* Rating in top-right corner */}
        <p className="rating">
          <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>⭐</span>
          <span style={{ fontSize: '1rem', marginLeft: '0.5rem' }}>
            {avgRating} / 5 from {place.reviews.length} reviews
          </span>
        </p>

        {/* Centered content */}
        <div className="hero-content">
          <h1>{place.name}</h1>
          <p>{place.tagline}</p>
        </div>
      </div>


      {/* Key Info Section */}
      <div className="info-section">
        <div className="info-card">
          <span>📍 Location:</span> {place.location}
        </div>
        <div className="info-card">
          <span>🕒 Best Time:</span> {place.bestTime}
        </div>
        <div className="info-card">
          <span>💰 Entry Fee:</span> {place.entryFee}
        </div>
        <div className="info-card">
          <span>🏛️ Built By:</span> {place.builtBy}
        </div>
        <div className="info-card">
          <span>⏳ Duration:</span> {place.duration}
        </div>
      </div>

      {/* Description & History */}
      <div className="description">
        <h2>About {place.name}</h2>
        <p>{place.description}</p>
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {place.gallery.map((img, index) => (
            <img key={index} src={img} alt={`${place.name} ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Nearby Attractions */}
      <div className="nearby">
        <h2>Nearby Attractions</h2>
        <div className="nearby-attractions-grid">
          {place.nearby.map((attraction, index) => (
            <div
              key={index}
              className="nearby-attractions-card"
              style={{ cursor: "pointer" }}
            >
              <img src={attraction.image} alt={attraction.name} />
              <h3>{attraction.name}</h3>

              <button
                className="bucket-list-btn"
                onClick={(e) => handleAddToBucketListClick(e, place)}
              >
                <FaBucket className="bucket-icon" />
                Add to Bucket List
              </button>
            </div>
          ))}

        </div>

        {/* full screen images
  <div className="nearby-list">
    {place.nearby.map((attraction, index) => (
      <div key={index} className="nearby-card">
        <div className="scroll-container">
          <img src={attraction.image} alt={attraction.name} />
        </div>
        <p>{attraction.name}</p>
      </div>
    ))}
  </div> */}


        {/* Attractions Grid
        <div className="nearby-attractions-grid">
          {place.nearby.map((attraction, index) => (
            <div
              key={index}
              className="nearby-attractions-card"
              style={{ cursor: "pointer" }}
            >
              <img src={attraction.image} alt={attraction.name} />
              <h3>{attraction.name}</h3>

              <button
                className="bucket-list-btn"
                onClick={(e) => handleAddToBucketListClick(e, place)}
              >
                <FaBucket className="bucket-icon" />
                Add to Bucket List
              </button>
            </div>
          ))}

        </div> */}
      </div>



      {/* Reviews */}
      <div className="reviews">
        <h2>Reviews</h2>
        {place.reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.user}:</strong> {review.comment}</p>
            <span>⭐ {review.rating}</span>
          </div>
        ))}
      </div>

      {/* Travel Tips */}
      <div className="travel-tips">
        <h2>Travel Tips & How to Reach</h2>
        <p>{place.tips}</p>
      </div>
    </div>
  );
};

export default PlaceDetails;
