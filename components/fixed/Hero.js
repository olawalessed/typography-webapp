import Image from 'next/image'

export default function Hero() {
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
                <button
                  type="button"
                  className="btn btn-purple hover:bg-my-white hover:text-my-purple"
                >
                  Get it on Chrome
                </button>
                <button
                  type="button"
                  className="btn btn-white hover:text-my-white hover:bg-my-purple"
                >
                  Get it on Firefox
                </button>
              </div>
            </div>
            {/* Image content */}
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
              <img
                src="https://res.cloudinary.com/olawalessed/image/upload/v1630222025/next-tailwind%20pictures/png/hero-bg_yjdcsv.png"
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              />
            </div>
            {/* Rounded rectangle */}
            <div className="hidden md:block overflow-hidden bg-my-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-20 lg:-right-36"></div>
          </div>
        </div>
      </section>
    );
}
