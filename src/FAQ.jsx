import cavebg from "/cave-bg-3.jpg";

function FAQ() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${cavebg})` }}
        className={
          "flex flex-col items-center bg-cover bg-center w-full h-auto p-5"
        }
      >
        <div className="bg-accent rounded-box text-center p-3 lg:p-10">
          <h1 className="text-3xl lg:text-5xl text-accent-content font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
    </>
  );
}

export default FAQ;
