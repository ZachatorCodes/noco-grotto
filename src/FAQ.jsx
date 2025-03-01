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
      <div className="px-100 py-10 space-y-2">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
