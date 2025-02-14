import cavebg from "/cave-bg-1.jpg";
// import logo from "/logo512.png";

function About() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${cavebg})` }}
        className={
          "flex flex-col items-center bg-cover bg-center w-full h-auto p-5"
        }
      >
        <div className="bg-accent rounded-box text-center p-3 lg:p-10">
          <h1 className="text-3xl lg:text-5xl text-accent-content font-bold lg:mb-5">
            Northern Colorado Grotto
          </h1>
          <p className="text-m lg:text-xl text-accent-content">
            Promoting responsible access, exploration, research, and
            conservation of caves in Colorado.
          </p>
        </div>
      </div>
      {/* <img src={logo} className="size-45 lg:size-75 mb-1 lg:mb-3" /> */}
    </>
  );
}

export default About;
