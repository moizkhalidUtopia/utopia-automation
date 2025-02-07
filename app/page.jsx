import Image from "next/image";
import Carousel from "./carousel";
import Newslider from "./newSlider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Slider */}
    {/* <Carousel/> */}
      <Newslider/>
      {/* SERVICE SECTION */}
      <section className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        <h2>EXPLORE MORE WITH US</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className="flex item-center gap-3">

        </div>
      </section>
    </main>
  );
}
