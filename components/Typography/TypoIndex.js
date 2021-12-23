
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
                  src={svgUrl[current]}
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
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/a_dsdtof.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/b_l4ibad.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/c_egzwbm.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/d_acftks.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539877/Typography%20project/SVG/e_wlha8k.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/f_mgimpb.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/g_bkmn6u.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539878/Typography%20project/SVG/h_sope4z.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/i_ecfxwv.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/j_vculbl.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/k_gwfhbi.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/l_prlmwo.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/m_ux95nh.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539880/Typography%20project/SVG/n_fmgozt.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/o_l6toqp.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/p_xitw9w.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/q_znkd51.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/r_kcntvg.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539885/Typography%20project/SVG/s_h0g1lk.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/t_zlmjp7.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539882/Typography%20project/SVG/u_r0a7ts.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/v_mcaa6b.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/w_sfau64.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/x_tdp59f.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539884/Typography%20project/SVG/y_azhy3s.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539885/Typography%20project/SVG/z_uj3l1n.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/0_uweuk8.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/1_noh3gj.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/2_moitvl.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/3_hh25xg.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/4_p2ro3b.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539873/Typography%20project/SVG/5_e94cct.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/6_rqdxud.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/7_wxwkky.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539875/Typography%20project/SVG/8_cfwk73.svg",
  "https://res.cloudinary.com/olawalessed/image/upload/v1631539876/Typography%20project/SVG/9_o1w3tq.svg",
];

