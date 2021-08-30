export default function DownloadSection() {
    return (
      <div>
        <section className="py-10 mt-20">
          {/* Download Section Heading */}
          <div className="sm:w-3/4 lg:w-8/12 mx-auto px-2">
            <h1 className="text-3xl text-center font-black text-my-blue">
              Download Application and Extension
            </h1>
            <p className="text-my-grey text-center my-4">
              We've got more features for you and loads of it in pipeline, you
              can reachout to us to tell us what you want in the coming release.
              Download now to explore!
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
            <div className="flex flex-col rounded-md shadow-md items-center">
              <div className="p-6 flex flex-col items-center">
                <img src="https://res.cloudinary.com/olawalessed/image/upload/v1630222025/next-tailwind%20pictures/svg/logo-chrome_tleuz0.svg" />
                <h3 className="mt-5 mb-2 text-my-blue text-lg">
                  Get from Chrome
                </h3>
                <p className="mb-2 text-my-grey font-light"></p>
              </div>
              <hr className="border-b border-my-white w-full opacity-40" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-my-white hover:text-black"
                >
                  Add & Install Application
                </button>
              </div>
            </div>

            {/* Card Two */}
            <div className="flex flex-col py-12 rounded-md shadow-md items-center">
              <div className="p-6 flex flex-col items-center">
                <img src="https://res.cloudinary.com/olawalessed/image/upload/v1630222026/next-tailwind%20pictures/svg/logo-firefox_orufsi.svg" />
                <h3 className="mt-5 mb-2 text-my-blue text-lg">
                  Get from FireFox
                </h3>
                <p className="mb-2 text-my-grey font-light"></p>
              </div>
              <hr className="border-b border-my-white w-full opacity-40" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-my-white hover:text-black"
                >
                  Add & Install Application
                </button>
              </div>
            </div>

            {/* Card Three */}
            <div className="flex flex-col rounded-md shadow-md items-center">
              <div className="p-6 flex flex-col items-center">
                <img src="https://res.cloudinary.com/olawalessed/image/upload/v1630222027/next-tailwind%20pictures/svg/logo-opera_apt7qr.svg" />
                <h3 className="mt-5 mb-2 text-my-blue text-lg">
                  Get from Opera
                </h3>
                <p className="mb-2 text-my-grey font-light"></p>
              </div>
              <hr className="border-b border-my-white w-full opacity-40" />
              <div className="flex p-6">
                <button
                  type="button"
                  className="btn btn-purple hover:bg-my-white hover:text-black"
                >
                  Add & Install Application
                </button>
              </div>
            </div>
          </div>

          {/* Section Two */}
        </section>
      </div>
    );
}
