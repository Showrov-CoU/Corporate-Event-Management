import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
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
    </div>
  );
};

export default Profile;
