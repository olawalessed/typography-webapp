
import InfiniteLoop from 'infinite-loop-animation'
import Link from 'next/link';
import router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Icon } from "semantic-ui-react"
import Image from 'next/image'

export default function TypoIndex() {

  const goToTypo = () => {
    return router.push('/typography/alltypo')
  }

  console.log(svgUrl.length)

  // Counting state
  const [current, setCurrent] = useState(0)

  // Re-render page on item count
  useEffect(() => {
    
    const timeout = setInterval(() => {
        if (current < svgUrl.length - 1) {
        typography.increment();
        } else {
          typography.returnZero()
      }
    }, 1000);
    
    return () => {
      clearInterval(timeout)
    }
  }, [current])


  const typography = {
    // Increase count
    increment: () => {
      setCurrent(current + 1);
  },
  // Return count back to 0
    returnZero: () => {
      setCurrent(0)
    }
  }

  

  return (
    <div className="flex flex-wrap w-screen bg-black min-h-screen text-white overflow-hidden">
      {/* Main content */}
      <div className="flex-col min-h-screen overflow-hidden">
        {/* Navigator */}
        <div>
          <div className="mt-1 mx-20 overflow-hidden">
            <Link href="/">
              <button className="px-5 rounded-full hover:border-gray-400">
                <Icon name="arrow left" size="small" /> Go Back
              </button>
            </Link>
          </div>
        </div>
        {/* Straight line */}
        <div>
          <div className="w-lg h-0.5 bg-white mt-1 mx-20 overflow-hidden"></div>
        </div>

        {/* Other Content */}
        <div className="grid grid-cols-3 min-h-screen overflow-hidden">
          {/* Left */}
          <div className="col-span-2">
            <div className="flex-col h-screen relative">
              <div className="px-20">
                {/* Header */}
                <div className="py-5">
                  <h1 className="text-6xl font-bold">36 Days of Type</h1>
                </div>
                {/* Inner Paragraph */}
                <div className="flex space-x-6 pr-5">
                  <p className="text-xxs font-light tracking-tight pr-5">
                    {paragraphOne}
                  </p>
                  <p className="text-xxs font-light tracking-tight pr-5">
                    {paragraphTwo}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="pt-28 px-20 ">
                <button
                  type="button"
                  className="inset-1 border-2 border-opacity-75 border-gray-300 hover:border-green-400 rounded-full px-10 py-5"
                  // onClick={goToTypo}
                >
                  <Link href="/typography/alltypo">View Typography Arts</Link>
                  {/* <span>Current Counting {current}</span> */}
                </button>
              </div>

              {/* Footer */}
              <div className="flex space-x-6 absolute bottom-10 px-20 overflow-hidden">
                {footies.map((element) => {
                  return (
                    <div key={element.title} className="flex-col">
                      <p className="text-xxs font-normal tracking-tighter">
                        {element.title}
                      </p>
                      <p className="text-xs font-light tracking-tighter">
                        {element.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-1 h-full">
            <div className="flex-col h-screen relative">
              <div className="pl-10 absolute right-20 bottom-20">
                {/* <InfiniteLoop data={svgUrl} duration={700} size={250} /> */}

                <Image
                  src={svgUrl[current].src}
                  width={250}
                  height={250}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Straight line */}
        <div>
          <div className="w-lg h-0.5 bg-white mb-10 mx-20"></div>
        </div>
      </div>
    </div>
  );
}



export const footies = [
  {
    title: "Volume 08",
    description: "36 Days of Type"
  },
  {
    title: "Original Creator",
    description: "@tim_arnold_design"
  },
  {
    title: "Geometric",
    description: "Explorations"
  },
  {
    title: "Interface",
    description: "Olawale Samuel"
  }

]

export const links = {

}


export const paragraphOne = "Like many creatives this year, I was just looking for a design inspiration on behance, then I stumbled on this nice typography work made by Tim Arnold, I give all credits to him for this awesome work. It was his work for the annual 8th edition of 36 Days of Type. An annual event where designers & artists from around the globe create one letter or number every day across a total of 36 days."

export const paragraphTwo = "I approached the conversion of this into a web app using Tailwind on Next JS. As a designer, I was switching to becoming User Interface developer (with Frontend Engineering). I'm really pleased to have worked on this conversion to help speed up my tailwind and general css knowledge to merge normal design knowledge and web development. Thanks Tim, Thanks everyone."




export const svgUrl = [
  {
    name: "A",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/a_dsdtof.svg",
  },
  {
    name: "B",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/b_l4ibad.svg",
  },
  {
    name: "C",

    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/c_egzwbm.svg",
  },
  {
    name: "D",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/d_acftks.svg",
  },
  {
    name: "E",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/e_wlha8k.svg",
  },
  {
    name: "F",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/f_mgimpb.svg",
  },
  {
    name: "G",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/g_bkmn6u.svg",
  },
  {
    name: "H",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/h_sope4z.svg",
  },
  {
    name: "I",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/i_ecfxwv.svg",
  },
  {
    name: "J",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/j_vculbl.svg",
  },
  {
    name: "K",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/k_gwfhbi.svg",
  },
  {
    name: "L",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/l_prlmwo.svg",
  },
  {
    name: "M",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/m_ux95nh.svg",
  },
  {
    name: "N",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/n_fmgozt.svg",
  },
  {
    name: "O",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/o_l6toqp.svg",
  },
  {
    name: "P",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/p_xitw9w.svg",
  },
  {
    name: "Q",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/q_znkd51.svg",
  },
  {
    name: "R",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/r_kcntvg.svg",
  },
  {
    name: "S",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539885/Typography%20project/SVG/s_h0g1lk.svg",
  },
  {
    name: "T",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/t_zlmjp7.svg",
  },
  {
    name: "U",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/u_r0a7ts.svg",
  },
  {
    name: "V",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/v_mcaa6b.svg",
  },
  {
    name: "W",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/w_sfau64.svg",
  },
  {
    name: "X",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/x_tdp59f.svg",
  },
  {
    name: "Y",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/y_azhy3s.svg",
  },
  {
    name: "Z",
    type: "alphabet",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539885/Typography%20project/SVG/z_uj3l1n.svg",
  },
  {
    name: "0",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/0_uweuk8.svg",
  },
  {
    name: "1",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/1_noh3gj.svg",
  },
  {
    name: "2",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/2_moitvl.svg",
  },
  {
    name: "3",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/3_hh25xg.svg",
  },
  {
    name: "4",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/4_p2ro3b.svg",
  },
  {
    name: "5",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/5_e94cct.svg",
  },
  {
    name: "6",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/6_rqdxud.svg",
  },
  {
    name: "7",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/7_wxwkky.svg",
  },
  {
    name: "8",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/8_cfwk73.svg",
  },
  {
    name: "9",
    type: "numerals",
    src: "https://res.cloudinary.com/olawalessed/image/upload/v1631539876/Typography%20project/SVG/9_o1w3tq.svg",
  },
];

