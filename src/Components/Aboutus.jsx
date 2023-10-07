import { useEffect } from "react";
import aboutus from "../assets/BannerImages/newAboutUscrop.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5">
      <div className="md:w-[40%]" data-aos="slide-right">
        <img
          className="w-full rounded-lg border-2 border-solid border-color-gray"
          src={aboutus}
          alt=""
        />
      </div>
      <div className="space-y-6 md:w-[60%]" data-aos="slide-left">
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Who are we?
          </h1>
          <p className="text-sm md:text-base">
            We are a dynamic team of event architects with a passion for
            crafting extraordinary corporate experiences.
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Vision
          </h1>
          <p className="text-sm md:text-base">
            To redefine corporate events by creating inspiring and innovative
            experiences.
          </p>
        </div>
        <div className="space-y-1">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Our Mission
          </h1>
          <p className="text-sm md:text-base">
            We strive to exceed expectations, delivering flawless events that
            leave a lasting impact through excellence, innovation, and
            unwavering client focus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
