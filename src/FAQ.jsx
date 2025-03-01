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
      <div className="px-5 md:px-20 lg:px-30 py-5 space-y-2">
        <div className="collapse collapse-arrow bg-neutral border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title">
            <p className="font-semibold text-xl">What is a grotto?</p>
          </div>
          <div className="collapse-content">
            <p className="text-sm">
              A caving grotto is a local community of cavers that plan cave
              trips and work on caving projects together. At Northern Colorado
              Grotto, we focus on recreational and project caving, cave
              surveying, conservation, and advocacy. Our grotto provides a
              platform for members to explore caves, share knowledge, and
              contribute to cave preservation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-neutral border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title">
            <p className="font-semibold text-xl">
              Do I need any caving experience to join?
            </p>
          </div>
          <div className="collapse-content">
            <p className="text-sm">
              No prior experience is necessary. We cater to all levels, from
              beginners to experienced cavers, and provide training and support
              to new members.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-neutral border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title">
            <p className="font-semibold text-xl">
              How does the grotto promote cave conservation?
            </p>
          </div>
          <div className="collapse-content">
            <p className="text-sm">
              We are committed to preserving caves. Our efforts include
              educating members and the public on responsible caving practices,
              participating in cleanup projects, providing funding for
              conservation efforts, and advocating for cave protection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
