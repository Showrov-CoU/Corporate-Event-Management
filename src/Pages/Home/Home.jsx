import { useEffect } from "react";
import Carousel from "../../Components/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
// import Services from "../Services/Services";
import { useLoaderData } from "react-router-dom";
import Aboutus from "../../Components/Aboutus";
import Review from "../../Components/Review";
import Service from "../../Components/Service";

const Home = () => {
  const servicesData = useLoaderData();
  // console.log(servicesData);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <Carousel></Carousel>

      {/* service */}
      <h1 className=" text-center pt-6 pb-2 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Cvents</span>{" "}
        <span>Services</span>
      </h1>
      <p className="px-[5%] pb-6 text-center text-base md:text-lg">
        Crafting Memorable Corporate Experiences
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-5">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>

      {/* About Us */}
      <div className="px-[5%] py-10">
        <h1 className=" text-center text-2xl pb-7 md:pb-10 md:text-4xl font-bold">
          <span className="text-color-secondary">About</span>
          <span> Us</span>
        </h1>
        <Aboutus></Aboutus>
      </div>

      {/* Review */}
      <div className="px-[5%] py-10">
        <h1 className=" text-center text-2xl pb-7 md:pb-10 md:text-4xl font-bold">
          <span className="text-color-secondary">Client </span>
          <span> Review</span>
        </h1>
        <div className="mx-auto">
          <Review></Review>
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default Home;
