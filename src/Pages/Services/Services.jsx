import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = ({ service }) => {
  // console.log(service);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="card card-compact bg-color-primary-dark border-2 border-solid border-color-gray"
      data-aos="zoom-in"
    >
      <figure className="h-60 w-full">
        <img className="h-full w-full" src={service.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <p><span className="font-bold">Duration:</span> {service.duration}</p>
        <p><span className="font-bold">Price:</span> {service.pricing}</p>
        <div className="card-actions justify-end">
          <button className="signbtn">View Details</button>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Services;
