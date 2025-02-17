'use client'
import React, { useState, useEffect } from "react";

const Moiz = () => {
  const [carouselClass, setCarouselClass] = useState("");

  const timeRunning = 3000;
  const timeAutoNext = 3000;

  useEffect(() => {
    const autoNext = setTimeout(() => {
      nextSlide();
    }, timeAutoNext);
    return () => clearTimeout(autoNext);
  });

  const nextSlide = () => {
    setCarouselClass("next");

    setTimeout(() => {
      let list = document.querySelector(".list");
      let thumbnail = document.querySelector(".thumbnail");

      list.appendChild(list.firstElementChild); // Move first slide to last
      thumbnail.appendChild(thumbnail.firstElementChild); // Move first thumbnail to last

      setCarouselClass("");
    }, timeRunning);
  };

  const prevSlide = () => {
    setCarouselClass("prev");

    setTimeout(() => {
      let list = document.querySelector(".list");
      let thumbnail = document.querySelector(".thumbnail");

      list.prepend(list.lastElementChild); // Move last slide to front
      thumbnail.prepend(thumbnail.lastElementChild); // Move last thumbnail to front

      setCarouselClass("");
    }, timeRunning);
  };

  return (
    <div className={`carousel ${carouselClass}`}>
      {/* Main Slides */}
      <div className="list">
        <div className="item">
          <img src="/slide1.jpeg" alt="Slide 1" />
          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/slide2.jpeg" alt="Slide 2" />
          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/slide3.jpeg" alt="Slide 3" />
          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="/slide4.jpeg" alt="Slide 4" />
          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        <div className="item">
          <img src="/slide1.jpeg" alt="Thumbnail 1" />
        </div>
        <div className="item">
          <img src="/slide2.jpeg" alt="Thumbnail 2" />
        </div>
        <div className="item">
          <img src="/slide3.jpeg" alt="Thumbnail 3" />
        </div>
        <div className="item">
          <img src="/slide4.jpeg" alt="Thumbnail 4" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>&lt;</button>
        <button id="next" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="time">{timeRunning}</div>
    </div>
  );
};

export default Moiz;
