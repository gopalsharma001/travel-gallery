// import { Link } from "react-router-dom";
// import "./Header.css"; // Import the separate CSS file
// import { FaSearch, FaTimes } from "react-icons/fa"; // Import close icon
// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";  // Import NavLink
// const Header = () => {
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const searchRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [scrollThreshold, setScrollThreshold] = useState(0);

//     // Close search when clicking outside
//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (searchRef.current && !searchRef.current.contains(event.target)) {
//           setIsSearchOpen(false);
//         }
//       };

//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, []);

//   // Handle scroll to hide/show header only when scrolled beyond a certain threshold
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Set initial threshold after user starts scrolling
//       if (currentScrollY > 100 && scrollThreshold === 0) {
//         setScrollThreshold(currentScrollY);
//       }

//       // Hide only if scrolled beyond 50px from the threshold
//       if (currentScrollY > lastScrollY && currentScrollY - scrollThreshold > 50) {
//         setIsVisible(false);
//       } else if (currentScrollY < lastScrollY && scrollThreshold - currentScrollY > 30) {
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY, scrollThreshold]);

//     return (
//       <header className={`header ${isVisible ? "visible" : "hidden"}`}>
//         <div className="logo-container">
//           <span className="logo">Photo Gallery</span>
//         </div>

//         {/* Navigation + Search in Same Container for Proper Alignment */}
//         <div className="nav-search-container">
//           {/* Navigation */}
//           <nav className={`nav-menu ${isSearchOpen ? "hide-nav" : ""}`}>
//             <ul>
//               <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
//               <li><NavLink to="/city" className={({ isActive }) => isActive ? "active" : ""}>City</NavLink></li>
//               <li><NavLink to="/bucket-list" className={({ isActive }) => isActive ? "active" : ""}>Bucket List</NavLink></li>
//             </ul>
//           </nav>

//           {/* Search Input Field */}
//           <div className="search-container" ref={searchRef}>
//             <input
//               type="text"
//               className={`search-input ${isSearchOpen ? "show-search" : ""}`}
//               placeholder="Search..."
//             />
//             <div className="search-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
//               {isSearchOpen ? <FaTimes /> : <FaSearch />}
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   };
// export default Header;

import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaTimes, FaBars, FaUserCircle, FaStar } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchRef = useRef(null);

// to stop scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      
        // Cleanup on unmount
        return () => {
          document.body.style.overflow = "";
        };
      }, [isMobileMenuOpen]);


    // Click outside to close search
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`header ${isVisible ? "visible" : "hidden"}`}>
            <div className="header-content">
                <div className="logo-container">
                    <span className="logo">Photo Gallery</span>
                </div>

                <div className="nav-search-container">
                    {/* Desktop Menu */}
                    <nav className={`nav-menu ${isSearchOpen ? "hide-nav" : ""}`}>
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to="/city" className={({ isActive }) => isActive ? "active" : ""}>City</NavLink></li>
                            <li><NavLink to="/bucket-list" className={({ isActive }) => isActive ? "active" : ""}>Bucket List</NavLink></li>
                            <li className="nav-icon">
                                <NavLink to="/city" className={({ isActive }) => isActive ? "active" : ""} title="Top Rated Places">
                                    Top Rated
                                </NavLink>
                            </li>
                            <li><NavLink to="/reviews-page" className={({ isActive }) => isActive ? "active" : ""}>Reviews</NavLink></li>
                        </ul>
                    </nav>

                    {/* Search */}
                    <div className="search-container" ref={searchRef}>
                        <input
                            type="text"
                            className={`search-input-header ${isSearchOpen ? "show-search" : ""}`}
                            placeholder="Search..."
                        />
                        <div
                            className="search-icon--header"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            role="button"
                            tabIndex={0}
                        >
                            {isSearchOpen ? <FaTimes /> : <FaSearch />}
                        </div>
                    </div>

                    {/* Profile Icon (Added after Search Bar) */}
                    <div className="nav-profile">
                        <NavLink to="/profile" title="Profile">
                            <FaUserCircle size={24} />
                        </NavLink>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <FaBars />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
                <div className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} role="button" tabIndex={0} aria-label="Close menu">
                    <FaTimes />
                </div>
                <ul>
                    <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/city" onClick={() => setIsMobileMenuOpen(false)}>City</NavLink></li>
                    <li><NavLink to="/bucket-list" onClick={() => setIsMobileMenuOpen(false)}>Bucket List</NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
