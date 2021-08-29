import RoundedTriangleRight from "../Fixed/RoundedTriangleRight";


export default function FeatureTwo() {
  return (
    <div >
      {/* Feature One */}
      <div className="relative mt-20 lg:mt-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-my-blue">
              Intelligent recommendations
            </h1>
            <p className="text-md text-my-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Our powerful recommendation feature will help you find the best of books to learn at the four corner of your screen
            </p>
            {/* Button */}
            <button
              type="button"
              className="btn btn-purple hover:bg-my-white hover:text-black"
            >
              More Info
            </button>
          </div>
          {/* Image */}
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="https://res.cloudinary.com/olawalessed/image/upload/v1630222025/next-tailwind%20pictures/png/illustration-features-tab-2_kzhpzf.png"
            />
          </div>
        </div>
        <RoundedTriangleRight />
      </div>
    </div>
  );
}
