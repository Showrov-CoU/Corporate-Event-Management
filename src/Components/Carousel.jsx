import { useEffect } from "react";
import banner1 from "../assets/BannerImages/banner1.jpg";
import banner2 from "../assets/BannerImages/banner2.jpg";
import banner3 from "../assets/BannerImages/banner3.jpg";
import banner4 from "../assets/BannerImages/banner4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="carousel-item relative w-full h-52 md:h-[26rem]"
      >
        <img src={banner4} className="w-full h-full bg-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❯
          </a>
        </div>
        <div className="absolute left-[15%] md:left-[14%] lg:left-[20%] xl:left-[25%] top-[35%] lg:top-[30%] transform">
          <h1 data-aos="fade-right" className="text-center text-sm md:text-2xl">
            Event Management Specialist
          </h1>
          <h1
            data-aos="fade-left"
            className="text-center text-lg md:text-4xl lg:text-5xl font-bold leading-snug capitalize"
          >
            Enhance Your Corporate Success <br /> with Professional Events
          </h1>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full h-52 md:h-[26rem]"
      >
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❯
          </a>
        </div>

        <div className="absolute left-[11%] md:left-[15%] lg:left-[18%] xl:left-[25%] top-[25%] md:top-[33%] lg:top-[30%] transform">
          <h1 data-aos="fade-right" className="text-center text-sm md:text-2xl">
            Event Management Specialist
          </h1>
          <h1
            data-aos="fade-left"
            className="text-center text-lg md:text-3xl lg:text-5xl font-bold leading-snug capitalize"
          >
            Elevate Your Company&apos;s Brand with <br /> Exceptional Event
            Planning
          </h1>
        </div>
      </div>
      <div
        id="slide3"
        className="carousel-item relative w-full h-52 md:h-[26rem]"
      >
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❯
          </a>
        </div>
        <div className="absolute left-[15%] md:left-[13%] lg:left-[20%] xl:left-[25%] top-[30%] transform">
          <h1 data-aos="fade-right" className="text-center text-sm md:text-2xl">
            Event Management Specialist
          </h1>
          <h1
            data-aos="fade-left"
            className="text-center text-lg md:text-4xl lg:text-5xl font-bold leading-snug capitalize"
          >
            Empower Your Business through <br /> Strategic Corporate Gatherings
          </h1>
        </div>
      </div>
      <div
        id="slide4"
        className="carousel-item relative w-full h-52 md:h-[26rem]"
      >
        <img src={banner1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-sm bg-color-secondary btn-circle hover:bg-color-secondary text-color-white"
          >
            ❯
          </a>
        </div>
        <div className="absolute left-[15%] md:left-[13%] lg:left-[20%] xl:left-[25%] top-[28%] md:top-[30%] transform">
          <h1 data-aos="fade-right" className="text-center text-sm md:text-2xl">
            Event Management Specialist
          </h1>
          <h1
            data-aos="fade-left"
            className="text-center text-lg md:text-4xl lg:text-5xl font-bold leading-snug capitalize"
          >
            Experience Corporate Excellence <br /> through <br /> Tailored Event
            Solutions
          </h1>
        </div>
      </div>

      {/* <div className="absolute left-[40%] top-[35%] transform -translate-x-[40%] " data-aos="fade-left">
        <h1 className="text-center">Event Management Specialist</h1>
        <h1 className="text-center">CELEBRATE YOUR EVENTS <br /> THAT LASTS LONGER</h1>
      </div> */}
    </div>
  );
};

export default Carousel;
