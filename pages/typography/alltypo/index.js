import Link from "next/link";
import { Icon } from "semantic-ui-react";
import Image from "next/image";
import { svgUrl } from "../../../components/Typography/TypoIndex";
import { useRouter } from "next/router";

export default function allTypography() {

  const router = useRouter()

//   const handleViewSingleTypography = () => {
//  return router.push({`/typography/alltypo/`});
  

//   }

  return (
    <div className="flex bg-black min-h-screen text-white overflow-hidden">
      {/* Main content */}
      <div className="flex-col min-h-screen w-full overflow-hidden">
        {/* Navigator */}
        <div>
          <div className="mt-2 mx-20 overflow-hidden">
            <Link href="/typography">
              <button className="px-5 py-2 rounded-full hover:border-gray-400">
                <Icon name="long arrow alternate left" size="small" /> Go Back
              </button>
            </Link>
          </div>
        </div>
        {/* Straight line */}
        <div>
          <div className="w-lg h-0.5 bg-white mt-2 mx-20 overflow-hidden"></div>
        </div>

        <div className="grid grid-cols-4 gap-0.5 mx-20 overflow-hidden">
          

          {/* Mapping and showing all Typography */}
          {svgUrl.map((art, index) => {
            return (
              <div key={`typo-${index}`} className="flex-col space-y-3 items-center hover:bg-blue-600  w-60 px-2 py-5">
                {/* Top Titles */}
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4 justify-self-start">
                    <p className="text-xxx font-normal tracking-tighter">
                      Day #01 <br /> Letter A <br /> 36 Days of Type
                    </p>

                    <p className="text-xxx font-normal tracking-tighter">
                      2021 <br /> @tim_arnold_design
                    </p>
                  </div>

                  <div className="justify-self-end">
                    <p className="text-xxx font-normal tracking-tighter">
                      Geometric <br /> Explorations
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="py-4 w-full">
                  <Image
                    src={art.src}
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                </div>
                {/* Button */}
                <div className="px-5 pb-5">
                  <Link
                    href={{
                      pathname: `/typography/alltypo/${art.name}`,
                      query: { type: `${art.type}`, id: `${index}` },
                    }}
                  >
                    <button
                      type="button"
                      className="w-full rounded-full hover:underline"
                    >
                      View Typography
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
