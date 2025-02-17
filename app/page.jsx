import Image from "next/image";
import Carousel from "./carousel";
import Moiz from "./moiz";
import img1 from "../public/slide1.jpeg";
import Newslider from "./newSlider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Slider */}
      {/* <Carousel/> */}
      {/* <Newslider /> */}
      <Moiz/>
      {/* SERVICE SECTION */}
      <section className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex lg:flex-col text-center mt-4">
        <h2>EXPLORE MORE WITH US</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className="flex item-center gap-3 items-center">
          <Image src={img1} alt="dummy"></Image>
          <div>
            <h2 className="font-bold text-3xl mb-3">INDUSTRIAL</h2>
            <h3 className="font-semibold text-2xl mb-2">AUTOMATION</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
