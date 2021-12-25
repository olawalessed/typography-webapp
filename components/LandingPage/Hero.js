import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import LoadingIcons from 'react-loading-icons';

export default function Hero() {



  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const pageLoad = setTimeout(() => {
      setLoading(false);
      console.log("I stopped loading");
    }, 5000);
    return () => {
      clearTimeout(pageLoad);
    };
  }, []);




    return (
      <section className="relative bg-black min-h-screen text-white">
        <div className="flex justify-center items-center w-full h-screen">
          <div className="flex-col">
            {loading ? (
              <h3>
                <LoadingIcons.Rings stroke="#35ed07" height={100} />
              </h3>
            ) : (
              <div className="">
                <h1 className="text-6xl text-my-white  text-center px-60 font-medium">
                  Welcome, Explore some nice works
                </h1>
                {/* <p className="text-center">Explore and Conceptualize</p> */}
                <div className="text-center pt-7">
                  <Link href="/typography">
                    <button
                      type="button"
                      className="px-10 py-5 border-2 border-my-white rounded-full hover:border-green-500"
                    >
                      <a>View Typography Arts</a>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
}
