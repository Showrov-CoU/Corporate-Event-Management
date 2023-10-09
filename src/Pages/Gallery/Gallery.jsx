import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/images.json")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className=" text-center pt-8 pb-2 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Cvents</span>
        <span> Gallery</span>
      </h1>
      <p className="px-[5%] pb-6 text-center text-base md:text-lg">
        Capturing the Summary of Our Corporate Gatherings
      </p>

      {loading ? (
        <div className="h-[33vh] flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="px-[5%] pb-10 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {gallery.map((item) => (
            <div key={item.id}>
              <div className="overflow-hidden border-2 border-solid border-color-gray rounded-lg">
                <img src={item.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
