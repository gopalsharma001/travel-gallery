import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Home.css";
import hawamahal from "../assests/hawamahal.jpeg";
import jalmahal from "../assests/jalmahal.jpeg";
import hm from "../assests/hawamahal2.jpg";
import am from "../assests/amer.jpeg";
import ImageGallery from "../components/ImageGallery";

const images = [
  {
    src: hawamahal,
    title: "Mountain View",
    subtitle: "Nature's Beauty",
  },
  {
    src: jalmahal,
    title: "Sunset View",
    subtitle: "Peaceful Evening",
  },
  {
    src: am,
    title: "Ocean Breeze",
    subtitle: "Refreshing & Calm",
  },
];

const Home = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={image.src} alt={image.title} className="carousel-image" />
            <div className="text-container">
              <h2 className="title">{image.title}</h2>
              <p className="subtitle">{image.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* // Suggested Places/Cities */}
      <ImageGallery exhibitions={exhibitions} heading= "Suggestions"/>
      {/* // Most Visited Section */}
      <ImageGallery exhibitions={exhibitions} heading= "Most Visited"/>
    </div>
  );
};


// Recent Galleries below main image

const exhibitions = [
  {
    title: "Jal Mahal",
    location: "Jaipur",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFsJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Amer Fort",
    location: "Jaipur",
    imageUrl: am,
  },
  {
    title: "Hawa Mahal",
    location: "Jaipur",
    imageUrl: hm,
  },
  {
    title: "ART 2024",
    location: "MUMBAI",
    imageUrl: jalmahal
  },
   {
    title: "Amer Fort",
    location: "Jaipur",
    imageUrl: am,
  },
  {
    title: "Hawa Mahal",
    location: "Jaipur",
    imageUrl: hm,
  },
  {
    title: "ART 2024",
    location: "MUMBAI",
    imageUrl: jalmahal
  },
];

// const Suggestions = () => {
//   return (
//     <section className="recent-exhibitions">
//       <h2>Suggestions</h2>
//       <div className="exhibition-grid">
//         {exhibitions.map((exhibit, index) => (
//           <div key={index} className="exhibition-card">
//             <img src={exhibit.imageUrl} alt={exhibit.title} />
//             <span>{exhibit.title}</span>
//             <p>{exhibit.location}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const MostVisited = () =>{
  return (
    <section className="recent-exhibitions">
      <h2>Most Visited Places</h2>
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
}
export default Home;
