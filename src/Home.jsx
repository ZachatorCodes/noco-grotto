import cavebg from "./assets/cave-bg-2.jpg";
import logo from "./assets/logo512.png";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${cavebg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="flex justify-center items-center">
            <img src={logo} className="size-75 mr-5" />
            <h1 className="mb-5 text-7xl font-bold">
              Northern Colorado Grotto
            </h1>
          </div>
          <p className="mb-5 text-2xl">
            Promoting responsible access, exploration, research, and
            conservation of caves in Colorado.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
