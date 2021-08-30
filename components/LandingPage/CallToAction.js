export default function CallToActionSection() {
    return (
      <div>
        <section className="py-20 bg-my-purple w-full">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto">
            <p className="text-my-white text-center font-light uppercase mb-8">30,000+ already joined</p>
              <h1 className="text-3xl text-center text-my-white px-12">Stay up-to-date with what we're doing</h1>
            <div className="flex flex-row sm:flex-row gap-2 mt-8 px-3">
              <input type="text" className="py-2 w-9/12 px-3 rounded-md flex-1" placeholder="Enter your email address" />
              <button
                type="button"
                className="btn bg-my-red text-my-white hover:bg-my-white hover:text-my-purple"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}
