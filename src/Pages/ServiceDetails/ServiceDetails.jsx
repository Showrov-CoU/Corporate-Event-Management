import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
};

export default ServiceDetails;
