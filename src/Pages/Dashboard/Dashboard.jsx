import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  const [upcoming, setUpComing] = useState([]);
  const getData = useLoaderData();
  useEffect(() => {
    Aos.init();
    fetch("/upcoming.json")
      .then((res) => res.json())
      .then((data) => setUpComing(data));
  }, []);
  //   console.log(getData);
  console.log(upcoming);
  return (
    <div className="px-[5%] min-h-full">
      <div
        className="bg-color-primary-dark my-8 p-6 rounded-lg"
        data-aos="fade-down"
      >
        <h1 className="text-2xl pb-2 font-bold">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcoming.map((item) => (
            <div
              key={item.id}
              className="card bg-color-primary-dark border-2 border-solid border-color-gray"
            >
              <div className="card-body pl-2">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-sm">
                  <span className="font-bold">Date: </span>
                  {item.date}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Time: </span>
                  {item.time}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Location: </span>
                  {item.location}
                </p>

                {/* <p className="text-sm">
                <span className="font-bold">Description: </span>
                {item.description}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-color-primary-dark my-8 p-6 rounded-lg"
        data-aos="fade-up"
      >
        <h1 className="text-2xl pb-2 font-bold">Ongoing Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getData.map((item) => (
            <div
              key={item.id}
              className="card bg-color-primary-dark border-2 border-solid border-color-gray"
            >
              <figure className="h-30 w-full">
                <img src={item.image} alt="Shoes" className="h-full w-full" />
              </figure>
              <div className="card-body pl-2">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-sm">
                  <span className="font-bold">Location: </span>
                  {item.location}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Date: </span>
                  {item.date}
                </p>
                {/* <p className="text-sm">
                <span className="font-bold">Description: </span>
                {item.description}
              </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
