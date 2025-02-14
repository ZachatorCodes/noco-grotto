import logo from "./assets/logo512.png";
import cavebg from "./assets/cave-bg-1.jpg";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${cavebg})` }}
        className={
          "flex flex-col justify-center items-center bg-cover bg-center w-full h-auto"
        }
      >
        <img src={logo} className="h-100 w-auto p-10" />
        <div className="bg-accent p-10 mx-10 mb-10 rounded-box">
          <h1 className="text-center text-5xl font-bold mb-3">
            Northern Colorado Grotto
          </h1>
          <p className="text-xl text-center mt-3">
            Promoting responsible access, exploration, research, and
            conservation of caves in Colorado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
