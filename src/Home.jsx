import { Link } from "react-router";
import cavebg from "/cave-bg-2.jpg";
import logo from "/logo512.png";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${cavebg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-sm lg:max-w-lg">
          <div className="flex justify-center items-center mb-1 xl:mb-5">
            <img src={logo} className="size-40 lg:size-60 xl:size-80 xl:mr-5" />
            <h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold">
              Northern Colorado Grotto
            </h1>
          </div>
          <p className="mb-5 text-lg lg:text-xl xl:text-2xl">
            Promoting responsible access, exploration, research, and
            conservation of caves in Colorado.
          </p>
          <Link to="/about"><button className="btn btn-secondary">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
