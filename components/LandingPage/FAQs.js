export default function FaqSection() {
    return (
      <section className="bg-my-white py-20">
        <div className="sm:w-3/4 lg:w-8/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-my-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-my-grey text-center my-4">
            Here are some of the FAQs. If you have any other questions you'd
            like answered please feel free to get in touch.
          </p>
        </div>
        {/* FAQ Items */}
        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a bookmark</span>
            <i className="text-my-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">How can I request a new browser?</span>
            <i className="text-my-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <i className="text-my-purple fas fa-chevron-down"></i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other chromium browsers?</span>
            <i className="text-my-purple fas fa-chevron-down"></i>
          </div>
        <button
          type="button"
          className="btn btn-purple mt-12 hover:bg-my-white hover:text-my-purple"
        >
          More Info
        </button>
        </div>
      </section>
    );
}
