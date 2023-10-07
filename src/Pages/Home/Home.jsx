import { useEffect } from "react";
import Carousel from "../../Components/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <Carousel></Carousel>

      {/* <div className="flex flex-col justify-center items-center">
        <h1
          className="text-center w-32 h-32 bg-color-secondary mb-10"
          data-aos="fade-left"
        >
          hi
        </h1>
        <h1
          className="text-center w-32 h-32 bg-color-secondary"
          data-aos="fade-right"
        >
          hello
        </h1>
      </div> */}
    </div>
  );
};

export default Home;
