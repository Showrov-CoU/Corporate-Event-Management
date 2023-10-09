import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  // const [items, setItems] = useState([]);
  // const [noFound, setNoFound] = useState("");
  const { user } = useContext(AuthContext);
  //   console.log(user);
  // useEffect(() => {
  //   const bookList = JSON.parse(localStorage.getItem("items"));
  //   //console.log(bookList);
  //   const uniqueArray = bookList.filter(
  //     (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
  //   );
  //   //console.log(uniqueArray);
  //   if (uniqueArray) {
  //     setItems(uniqueArray);
  //   } else {
  //     setNoFound("No data found");
  //   }
  // }, []);
  return (
    <div>
      <h1 className=" text-center pt-8 pb-4 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Personal</span>
        <span> Information</span>
      </h1>
      <div className="px-[5%] flex flex-col justify-center items-center gap-4">
        <div className="h-40 w-40">
          <img
            src={user.photoURL}
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>
        <div className="pb-4">
          <p>
            <span className="font-bold">Name:</span> {user.displayName}
          </p>
          <p>
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">PhotoURL:</span> {user.photoURL}
          </p>
        </div>
      </div>

      {/* <h1 className=" text-center pt-8 pb-4 text-2xl md:text-4xl font-bold">
        <span className="text-color-secondary">Booking</span>
        <span> History:</span> <span>{items.length}</span>
      </h1>
      <div className="w-full pb-10">
        {noFound ? (
          <p>{noFound}</p>
        ) : (
          <div className="p-3 px-[5%] mx-auto border-2 border-solid border-color-gray w-fit rounded-lg">
            {items.map((item) => (
              <ul className="p-1" key={item.id}>
                <li className="list-disc">
                  <span className="font-bold"> </span>
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Profile;
