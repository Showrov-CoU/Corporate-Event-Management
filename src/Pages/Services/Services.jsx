import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Service";

const Services = () => {
  const getdata = useLoaderData();
  return (
    <div>
      <h1 className=" text-center pt-8 pb-2 text-2xl md:text-4xl font-bold">
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
    // <div
    //   className="card card-compact bg-color-primary-dark border-2 border-solid border-color-gray"
    //   data-aos="zoom-in"
    // >
    //   <figure className="h-60 w-full">
    //     <img className="h-full w-full" src={service.image} alt="" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{service.name}</h2>
    //     <p>{service.description}</p>
    //     <p>
    //       <span className="font-bold">Duration:</span> {service.duration}
    //     </p>
    //     <p>
    //       <span className="font-bold">Price:</span> {service.pricing}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <button className="signbtn">View Details</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Services;
