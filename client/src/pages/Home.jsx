import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" text-gray-800 w-full h-full">
      <section className="max-w-8xl mx-auto flex flex-col-reverse md:flex-row md:py-24  items-center justify-between lg:justify-around px-10 py-10 ">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Auth<span className="text-cyan-500">App</span>
          </h1>
          <p className="text-lg mb-8">
            A comprehensive solution for authentication in your application.
          </p>
          <Link
            to="/sign-in"
            className="bg-cyan-500 text-white py-3 px-8 rounded-lg hover:bg-cyan-600"
          >
            Register
          </Link>
        </div>
        <div className="mb-10 md:mb-0">
          <img
            src="./home_img.svg"
            alt="Developer Illustration"
            className="max-w-sm    w-full md:max-w-md"
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
