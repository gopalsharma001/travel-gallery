import { FaFacebookF, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left Section - Business Info */}
                <div className="footer-info">
                    <h2>Photo GALLERY</h2>
                    <p>D-40 Defence Colony, New Delhi 110024, India | T +91 11 24622545 / +91 11 24615368</p>
                    <p>D-53 Defence Colony, New Delhi 110024, India | T +91 11 46103550 / +91 11 4610355</p>
                    <p><strong>E</strong> <a href="mailto:gopal10custom@gmail.com">photo@gallery.com</a></p>
                    <p>Monday to Saturday, 10 am - 6 pm</p>
                </div>

                {/* Right Section - Social Media */}
                <div className="footer-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaEnvelope /></a>
                    <a href="#"><FaMapMarkerAlt /></a>
                    <a href="#"><FaPaperPlane /></a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <a href="#">Manage Cookies</a>
                <div className = "copyright-container">
                    <p>Copyright © 2025 Gopal Sharma</p>
                    <a href="#">Site by Gopal</a>
                </div>

            </div>
        </footer>
    );
}
