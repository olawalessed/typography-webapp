export default function CallToActionSection() {
    return (
      <div>
        <section className="flex py-12 bg-my-purple w-full">
          <div className="flex flex-col items-center mx-auto">
            <p className="text-my-white font-light uppercase my-4">30,000+ already joined</p>
            <h1 className="text-my-white font-medium text-xl mb-7">Stay up-to-date with what we're doing</h1>
            <div className="flex flex-row">
              <input className="py-2 w-9/12 px-3 mx-2.5 rounded-lg flex-1" placeholder="Enter your email address" />
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
