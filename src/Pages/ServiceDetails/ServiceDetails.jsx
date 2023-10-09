import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [oneService, setOneService] = useState({});
  const { id } = useParams();
  const loadData = useLoaderData();
  // console.log(loadData);
  // console.log(id);
  useEffect(() => {
    const findData = loadData?.find((data) => data.id === parseInt(id));
    setOneService(findData);
  }, [id, loadData]);
  return (
    <div className="px-[5%] md:py-10 py-5 space-y-10">
      <div className="card lg:card-side bg-color-primary-dark border-2 border-solid border-color-gray">
        <figure className="w-full md:w-1/2">
          <img
            src={oneService.image}
            alt="Album"
            className="h-full rounded-none"
          />
        </figure>
        <div className="p-5 w-full card-body md:w-1/2 space-y-3">
          <h2 className="card-title justify-center">{oneService.name}</h2>
          <p>
            <span className="font-bold">Description: </span>
            {oneService.description}
          </p>
          <p>
            <span className="font-bold">Service Example: </span>
            {oneService.example}
          </p>
          <p>
            <span className="font-bold">Service Benefits:</span>
            {oneService?.benefits?.map((item, indx) => (
              <li key={indx} className="pl-5">
                {item}
              </li>
            ))}
          </p>
          <p>
            <span className="font-bold">Duration:</span> {oneService.duration}
          </p>
          <p>
            <span className="font-bold">Price:</span> {oneService.pricing}
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
      <div className="bg-color-primary-dark px-10 pt-5 pb-10 border-2 border-solid border-color-gray rounded-xl">
        <h1 className="card-title justify-center">Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-7 gap-5 md:gap-10 ">
          {oneService?.testimonials?.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 border-2 border-solid border-color-gray p-5 rounded-xl"
            >
              <div className="flex justify-start gap-3">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={item.client_image}
                    className="w-full h-full rounded-full "
                  />
                </div>
                <div>
                  <p className="font-bold">{item.client_name}</p>
                  <p className="text-sm">Happy Client</p>
                </div>
              </div>
              <p className="text-sm md:text-base">{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
