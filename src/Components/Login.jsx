import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log("hi", result.user);
        toast.success("Login successful! Welcome back.");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = (googleLogin) => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" min-h-screen">
      <div className="hero-content flex-col pt-0">
        <div className="text-center pt-2">
          <h1 className="text-3xl text-center font-bold text-color-secondary">
            Login now...!
          </h1>
          <p className="">
            {/* Please log in to access your event planning and management tools. */}
            {/* Whether you&apos;re arranging a conference, seminar, product launch,
            or team-building event, our platform streamlines the process for
            you. */}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered text-color-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered text-color-secondary"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="signbtn">Login</button>
            </div>
            <label className="label">
              <Link
                to="/register"
                href="#"
                className="label-text-alt link link-hover"
              >
                Do not have any account? please Register
              </Link>
            </label>
          </form>
          <div className="px-8 pb-6">
            <button
              onClick={() => handleGoogleLogIn(googleLogin)}
              className="btn w-full capitalize btn-outline text-color-secondary text-base"
            >
              <FcGoogle></FcGoogle>
              <span>Login with google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
