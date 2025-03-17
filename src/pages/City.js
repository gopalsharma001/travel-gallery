import React from "react";
import CityCard from "./CityCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import delhi from "../assests/delhi.png";
import jaipur from "../assests/jaipur.png";
import mumbai from "../assests/mumbai.png";
import hm from "../assests/hawamahal2.jpg";
import CitySelection from "./CitySelection.tsx";
import ImageGallery from "../components/ImageGallery.jsx";
import assets from "../assests";
const cities = [
  { name: "Jaipur", image: jaipur, description: "The Pink City of India." },
  { name: "Delhi", image: delhi, description: "Capital city with rich history." },
  { name: "Goa", image: hm, description: "Famous for beaches and nightlife." },
  { name: "Mumbai", image:mumbai, description: "City of dreams and Bollywood." },
];
const places = [
  { title: "Jaipur",location: "The Pink City of India.", imageUrl: jaipur},
  { title: "Delhi",location: "The Pink City of India.", imageUrl: delhi},
  { title: "Mumbai",location: "The Pink City of India.", imageUrl: mumbai},
];
const delhiPlaces = [
  { title: "Red Fort", location: "Symbol of India's Independence", imageUrl: assets.redfort },
  { title: "India Gate", location: "War Memorial Honoring Soldiers", imageUrl: assets.delhiIndiagate },
  { title: "Humayun's Tomb", location: "Inspiration for the Taj Mahal", imageUrl: assets.humayuntomb },
  { title: "Jama Masjid", location: "One of India's Largest Mosques", imageUrl: assets.delhiJama },
  { title: "Akshardham Temple", location: "Spectacular Hindu Temple with Light Shows", imageUrl: assets.akshardhamdelhi },
  { title: "Raj Ghat", location: "Memorial of Mahatma Gandhi", imageUrl: assets.rajghaat },
  { title: "Rashtrapati Bhavan", location: "Official Residence of India's President", imageUrl: assets.rashtrapatibhawan },
  { title: "Gurudwara Bangla Sahib", location: "Famous Sikh Gurudwara with Holy Pond", imageUrl: assets.banglasahib },
];


const City = () => {
  return (
    <><CitySelection />
    <ImageGallery exhibitions={delhiPlaces} heading="Delhi"/>
    <ImageGallery exhibitions={delhiPlaces} heading="Jaipur"/>
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {cities.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={image.image} alt={image.name} className="carousel-image" />
            <div className="text-container">
              <h2 className="title">{image.name}</h2>
              <p className="subtitle">{image.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
  );
};


export default City;