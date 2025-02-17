'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  "/slide1.jpeg",
  "/slide2.jpeg",
  "/slide3.jpeg",
  "/slide4.jpeg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const timeAutoNext = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length),
      timeAutoNext
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const showSlider = (type) => {
    if (type === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }
  };
  return (
    <div className="carousel">
      <div className="list">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
          >
            <Image src={src} alt={`Slide ${index + 1}`} width={800} height={500} />
            <div className="content">
              <div className="title">DISCOVER NEW</div>
              <div className="des">Lorem ipsum dolor sit amet...</div>
              <div className="buttons">
                <button className="btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((src, index) => (
          <div key={index} className="item">
            <Image src={src} alt={`Thumbnail ${index + 1}`} width={100} height={50} />
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={() => showSlider("prev")}>&lt;</button>
        <button onClick={() => showSlider("next")}>&gt;</button>
      </div>
      
    </div>
  );
}
