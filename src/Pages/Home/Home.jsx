import { useEffect } from "react";
import Carousel from "../../Components/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import Services from "../Services/Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <Carousel></Carousel>
      <h1 className=" text-center pt-5 pb-2 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Cvents</span>{" "}
        <span>Services</span>
      </h1>
      <p className="px-[5%] pb-6 text-center text-lg">
        Crafting Memorable Corporate Experiences
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-5">
        {servicesData.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
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
