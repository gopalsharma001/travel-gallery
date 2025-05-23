import React, { useState } from "react";
import "./ReviewFlyout.css";
import { FaStar } from "react-icons/fa";

const ReviewFlyout = ({ place, onClose }) => {
    const [rating, setRating] = useState(0);        // Store the rating
    const [hover, setHover] = useState(null);        // For hover effect
    const [review, setReview] = useState("");

    const handleSubmit = () => {
        console.log(`Review submitted for ${place.name}`);
        console.log(`Rating: ${rating}, Review: ${review}`);
        onClose();
    };

    return (
        <div className="flyout">
            <div className="flyout-header">
                <h2>
                    Share Your Experience at <span>{place.title}</span>
                </h2>

                <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="flyout-content">
                <div className="overall-rating">
                    <h3>Overall Rating: ⭐ 4.5</h3>
                </div>

                <div className="top-reviews">
                    <p>⭐ 5 - "Amazing place!"</p>
                    <p>⭐ 4 - "Great experience"</p>
                </div>

                {/* ⭐ Star Rating System */}
                <div className="star-rating">
                    <label>Rate this place:</label>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => {
                            const currentRating = index + 1;  // Rating from 1 to 5
                            return (
                                <FaStar
                                    key={index}
                                    className="star"
                                    size={30}
                                    color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onClick={() => setRating(currentRating)}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(null)}
                                    style={{ cursor: "pointer" }}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Review Form */}
                <div className="review-form">
                    <label>Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Share your experience..."
                    />

                    <button className="btnClass" onClick={handleSubmit}>Submit Review</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewFlyout;
