// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import hawamahal from "../assests/hawamahal.jpeg";
// import jalmahal from "../assests/jalmahal.jpeg";
// import hm from "../assests/hawamahal2.jpg";
// import am from "../assests/amer.jpeg";
// const cities = [
//   { name: "Jaipur", image: hm, description: "The Pink City of India." },
//   { name: "Delhi", image: hm, description: "Capital city with rich history." },
//   { name: "Goa", image: hm, description: "Famous for beaches and nightlife." },
//   { name: "Mumbai", image:hm, description: "City of dreams and Bollywood." },
// ];
// interface CityProps {
//   name: string;
//   image: string;
//   description: string;
// }

// const CityCard = ({ name, image, description }: CityProps) => {
//   return (
//     <div className="carousel-container">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//       >
//         {cities.map((image, index) => (
//           <SwiperSlide key={index} className="slide">
//             <img src={image.image} alt={image.name} className="carousel-image" />
//             <div className="text-container">
//               <h2 className="title">{image.name}</h2>
//               <p className="subtitle">{image.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CityCard;
