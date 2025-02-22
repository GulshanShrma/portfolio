import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Certifications = () => {
  const certifications = [
    { id: 1, title: "IBM Sterling OMS", img: "/certs/ibm1.png" },
    { id: 2, title: "Java Expert", img: "/certs/java.png" },
    { id: 3, title: "Microservices", img: "/certs/microservices.png" }
  ];

  return (
    <div className="container">
      <h1>Certifications</h1>
      <Swiper spaceBetween={20} slidesPerView={2.5}>
        {certifications.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="card">
              <img src={cert.img} alt={cert.title} />
              <p>{cert.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
