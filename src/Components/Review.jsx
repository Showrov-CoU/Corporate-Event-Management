import { useEffect } from "react";
import reviewer1 from "../assets/Reviewer/r1.jpg";
import reviewer2 from "../assets/Reviewer/r2.jpg";
import reviewer3 from "../assets/Reviewer/r3.jpg";
import reviewer4 from "../assets/Reviewer/r4.jpg";
import reviewer5 from "../assets/Reviewer/r5.jpg";
import reviewer6 from "../assets/Reviewer/r6.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full md:gap-3 flex-col gap-4 md:flex-row"
        >
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer1} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">Ashikur Rahman</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The expo provided us with a platform to showcase our latest
              innovations to a receptive audience.
            </p>
          </div>
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer2} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">Showrov</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The seminar on AI technology was incredibly informative. I left
              with a clear understanding of the latest advancements.
            </p>
          </div>
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer3} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">Justine Blow</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The team-building workshop was a fantastic experience. Our team is
              now more unified and productive.
            </p>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full md:gap-3 flex-col gap-4 md:flex-row"
        >
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer4} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">Mr. Robi</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The expo provided us with a platform to showcase our latest
              innovations to a receptive audience.
            </p>
          </div>
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer5} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">John Doe</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The seminar on AI technology was incredibly informative. I left
              with a clear understanding of the latest advancements.
            </p>
          </div>
          <div className="flex flex-col gap-3" data-aos="zoom-out">
            <div className="flex justify-start gap-3">
              <div className="w-12 h-12 rounded-full">
                <img src={reviewer6} className="w-full h-full rounded-full " />
              </div>
              <div>
                <p className="font-bold">Shakib</p>
                <p className="text-sm">Happy Client</p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              The team-building workshop was a fantastic experience. Our team is
              now more unified and productive.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#item1"
          className="btn btn-xs bg-color-secondary text-color-white hover:bg-color-secondary"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-xs bg-color-secondary text-color-white hover:bg-color-secondary"
        >
          2
        </a>
      </div>
    </div>
  );
};

export default Review;
