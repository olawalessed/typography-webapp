import Link from "next/link";
import { Icon } from "semantic-ui-react";
import { svgUrl } from "./TypoIndex";
import {allTypograhy} from "../../utils/typographySVG.json"
import { useRouter } from "next/router";
import Image from "next/image";

export default function SingleTypo() {


    console.log(allTypograhy.content.length)

    const router = useRouter()
    const {id} = router.query
    
    console.log(id)

    

    return (
      <div
        div
        className="w-screen bg-black min-h-screen text-white overflow-hidden"
      >
        {/* Main content */}
        <div className="block min-h-screen px-10">
          {/* Navigator */}

          <div className="mt-1">
            <Link href="/">
              <button className="px-5 rounded-full hover:border-gray-400">
                <Icon name="arrow left" size="small" /> Go Back
              </button>
            </Link>
          </div>

          {/* Straight line */}

          <div className="w-full px-20 h-0.5 bg-white mt-1"></div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start w-full min-h-screen">
            {/* Left part */}

            <div className="flex justify-center items-center">
              <div className="relative w-4/5 pb-5 mt-5">
                <Image
                  src={allTypograhy.content[id].src}
                  layout="responsive"
                  objectFit="contain"
                  width={3}
                  height={3}
                />
              </div>
            </div>

            {/* Right part */}
            <div className="md:p-10 md:mt-10">
              <div className="block">
                <h1 className="text-9xl">{allTypograhy.content[id].name}</h1>
                <p>{allTypograhy.content[id].details}</p>
                <cite>
                  <small>Source: Wikipedia</small>
                </cite>

                {/* Navigation */}
                <div className="absolute bottom-20 right-20">
                  <Link href={{
                      pathname: `/typography/alltypo/${allTypograhy.content[+id + 1].name}`,
                      query: { type: `${allTypograhy.content[+id + 1].type}`, id: `${+id+1}` },
                    }}>
                    <button className="text-4xl">
                      {allTypograhy.content[+id + 1].name} &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


{/* <div className"w-full grid grid-cols-1 md:grid-cols-3 bg-red-600"> */}
  {/* Bigger Left */}
  {/* <div className="col-span-1 md:col-span-2">
    <h3>Bigger Left</h3>
  </div> */}

  {/* Right Part */}
  {/* <div className="md:col-span-1">
    <h3>Right part</h3>
  </div>
</div>; */}