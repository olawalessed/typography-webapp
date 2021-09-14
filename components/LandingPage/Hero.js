import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
      <section className="relative bg-black min-h-screen text-white">
        <div className="flex justify-center items-center w-full mx-auto">
          <div className="flex-col">
            <div className="py-40">
              <h1 className="text-6xl text-my-white  text-center px-60 font-medium">
                Welcome, Explore some nice works
              </h1>
              {/* <p className="text-center">Explore and Conceptualize</p> */}
              <div className="text-center pt-7">
                <Link href="/typography">
                  <button
                    type="button"
                    className="px-10 py-5 border-2 border-my-white rounded-full"
                  >
                    <a>View Typography Arts</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
