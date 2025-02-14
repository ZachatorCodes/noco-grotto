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
      <div className="hero-content text-center text-white">
        <div className="max-w-lg">
          <div className="flex justify-center items-center mb-5">
            <img src={logo} className="size-80 mr-5" />
            <h1 className="mb-5 text-8xl font-bold text-le">
              Northern Colorado Grotto
            </h1>
          </div>
          <p className="mb-5 text-3xl">
            Promoting responsible access, exploration, research, and
            conservation of caves in Colorado.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
