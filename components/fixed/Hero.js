export default function HeroSearch() {
    return (
      <section className="relative">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            {/* Content */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h2 className="text-my-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                A simple Book Publishing Platform
              </h2>
              <p className="text-my-grey text-lg text-center lg:text-left mb-6">
                A clean and simple interface to read the best of boos and learn
                new things everyday
              </p>
              <div className="flex justify-center flex-wrap gap-6">
                <button type="button" className="btn btn-purple">Get it on Chrome</button>
                <button type="button" className="btn btn-white">Get it on Firefox</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
