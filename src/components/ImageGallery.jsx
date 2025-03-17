import React from "react";
import "./ImageGallery.css"
const ImageGallery = ({ exhibitions, heading}) => {
  return (
    <section className="recent-exhibitions">
      <h2>{heading}</h2>
      <div className="exhibition-grid">
        {exhibitions.map((exhibit, index) => (
          <div key={index} className="exhibition-card">
            <img src={exhibit.imageUrl} alt={exhibit.title} />
            <span>{exhibit.title}</span>
            <p>{exhibit.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
