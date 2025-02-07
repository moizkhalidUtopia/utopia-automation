'use client'
import {  useEffect } from "react";
import Image from "next/image";
import img1 from "../public/slide1.jpeg";
import img2 from "../public/slide2.jpeg";
import img3 from "../public/slide3.jpeg";
import img4 from "../public/slide4.jpeg";

const images = [img1, img2, img3, img4];

export default function Carousel() {
   useEffect(() => {
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    if (!carouselDom) return;

    // Move the first thumbnail to the end
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 3000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(".carousel .thumbnail .item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }

    nextDom.addEventListener("click", () => showSlider("next"));
    prevDom.addEventListener("click", () => showSlider("prev"));

    return () => {
      nextDom.removeEventListener("click", () => showSlider("next"));
      prevDom.removeEventListener("click", () => showSlider("prev"));
    };
  }, []);
  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
        <Image src={img1} fill alt="slide1" /> 

          <div className="content">
            <div className="title">DISCOVER NEW <span className="text-[#CBB495]">HORIZONS</span> </div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
             
            </div>
          </div>
        </div>
        <div className="item">
        <Image src={img2} fill alt="slide2" /> 

          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
             
            </div>
          </div>
        </div>
        <div className="item">
        <Image src={img3} fill alt="slide3" /> 

          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
              
            </div>
          </div>
        </div>
        <div className="item">
        <Image src={img4} fill alt="slide4" /> 

          <div className="content">
            <div className="title">DISCOVER NEW</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?</div>
            <div className="buttons">
              <button className="btn">LEARN MORE</button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          {/* <img src="images/slide1.jpeg" /> */}
       <Image src={img1} fill alt="slide1" /> 
        </div>
        <div className="item">
          {/* <img src="images/slide2.jpeg" /> */}
          <Image src={img2} fill alt="slide2" /> 
      
        </div>
        <div className="item">
          {/* <img src="images/slide3.jpeg" /> */}
       <Image src={img3} fill alt="slide3" /> 
         
        </div>
        <div className="item">
          {/* <img src="images/slide4.jpeg" /> */}
       <Image src={img4} fill alt="slide4" /> 
         
        </div>
      </div>

      <div className="arrows">
        <button id="prev">{ '<' }</button>
        <button id="next">{`>`}</button>
      </div>
      <div className="time"></div>
    </div>



    // <div classNameName="carousel relative w-full max-w-3xl mx-auto overflow-hidden">
    //   <div classNameName="list flex transition-transform duration-500" >
    //     {images.map((img, index) => (
    //       <div key={index} classNameName="item min-w-full relative">
    //         <Image src={img} fill alt={`slide-${index + 1}`} classNameName="object-cover" />
    //         <div classNameName="content absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
    //           <div classNameName="title text-xl font-bold">DISCOVER NEW</div>
    //           <div classNameName="des text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit...</div>
    //           <div classNameName="buttons mt-4">
    //             <button classNameName="btn bg-white text-black px-4 py-2 rounded">LEARN MORE</button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div classNameName="thumbnail flex justify-center mt-4">
    //     {images.map((img, index) => (
    //       <button key={index} onClick={() => setCurrentIndex(index)} classNameName={`item w-16 h-16 mx-2 ${currentIndex === index ? 'border-2 border-white' : ''}`}>
    //         <Image src={img} fill alt={`thumb-${index + 1}`} classNameName="object-cover" />
    //       </button>
    //     ))}
    //   </div>
    //   <div classNameName="arrows absolute top-1/2 w-full flex justify-between px-4">
    //     <button onClick={prevSlide} classNameName="text-white bg-black p-2 rounded">{"<"}</button>
    //     <button onClick={nextSlide} classNameName="text-white bg-black p-2 rounded">{">"}</button>
    //   </div>
    // </div>
  );
}
