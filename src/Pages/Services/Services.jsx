import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Service";

const Services = () => {
  const getdata = useLoaderData();
  return (
    <div>
      <h1 className=" text-center pt-8 xl:pt-10 pb-2 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Cvents</span>{" "}
        <span>Services</span>
      </h1>
      <p className="px-[5%] pb-6 text-center text-base md:text-lg">
        Crafting Memorable Corporate Experiences
      </p>
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5%] gap-5">
        {getdata.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
