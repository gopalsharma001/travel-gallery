import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import reviews from "../utils/images/reviewsData";
import "./ReviewsPage.css";
const ReviewsPage = () => {
    const [cityFilter, setCityFilter] = useState("All Cities");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [ratingFilter, setRatingFilter] = useState("All");
    const [sortOrder, setSortOrder] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;

    // 🌟 Filter and sort reviews
    const filteredReviews = reviews
        .filter((review) => {
            return (
                (cityFilter === "All Cities" || review.city === cityFilter) &&
                (categoryFilter === "All" || review.category === categoryFilter) &&
                (ratingFilter === "All" || review.rating >= parseFloat(ratingFilter))
            );
        })
        .sort((a, b) => {
            if (sortOrder === "Newest") {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        });

    const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

    const paginatedReviews = filteredReviews.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 🌟 Pagination handlers
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="review-page">
            <h1>🌟 All Reviews</h1>

            {/* Filters */}
            <div className="filter-container">
                <div className="dropdown-wrapper">
                    <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
                        <option>Delhi</option>
                        <option>Jaipur</option>
                        <option>Mumbai</option>
                    </select>
                    <span className="custom-arrow">▼</span>
                </div>

                <div className="dropdown-wrapper">
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option>All</option>
                    <option>Historical</option>
                    <option>Adventure</option>
                    <option>Religious</option>
                </select>
                <span className="custom-arrow">▼</span>
                </div>
                <div className="dropdown-wrapper">
                <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
                    <option>All</option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                </select>
                <span className="custom-arrow">▼</span>
                </div>

                <div className="dropdown-wrapper">
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
                <span className="custom-arrow">▼</span>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="reviews-grid">
                {paginatedReviews.length > 0 ? (
                    paginatedReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                ) : (
                    <p>No reviews found.</p>
                )}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    ⬅️ Prev
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next ➡️
                </button>
            </div>
        </div>
    );
};

export default ReviewsPage;