import React from "react";
import { FaStar } from "react-icons/fa";
import "./ReviewCard.css";
const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>📍 {review.place} <span>({review.city})</span></h3>
      <p>🏷️ {review.category}</p>
      <div className="rating-stars">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            color={index < Math.round(review.rating) ? "#ffc107" : "#e4e5e9"}
          />
        ))}
        <span> {review.rating}</span>
      </div>
      <p>"{review.reviewText}"</p>
      <small>🗓️ {new Date(review.date).toLocaleDateString()}</small>
      <p className="user">👤 {review.user}</p>
    </div>
  );
};

export default ReviewCard;
