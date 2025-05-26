// src/pages/BucketList.js
import { useBucketList } from "../contexts/BucketListContext";
import "../styles/BucketList.css";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaMapMarkedAlt } from "react-icons/fa";

const BucketList = () => {
  const { bucketList, removeFromBucketList } = useBucketList();
  const navigate = useNavigate();

  return (
    <div className="bucket-list-container">
      <h2 className="bucket-list-title">My Bucket List</h2>

      {bucketList.length === 0 ? (
        <p className="empty-message">Your bucket list is empty. Start exploring!</p>
      ) : (
        <div className="bucket-grid">
          {bucketList.map((place, index) => (
            <div key={index} className="bucket-card">
              <img src={place.image} alt={place.name} className="bucket-image" />
              <h3 className="place-title">{place.name}</h3>
              <p className="place-location">{place.location}</p>

              <div className="bucket-buttons">
                <button
                  className="explore-btn"
                  onClick={() =>
                    navigate(`/places/${place.title.toLowerCase().replace(/\s+/g, "")}`)
                  }
                >
                  <FaMapMarkedAlt /> Explore
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFromBucketList(place.id)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BucketList;
