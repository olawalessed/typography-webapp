
import Image from 'next/image'

export default function Header() {
    return (
      <div>
        <header>
          <nav className="container flex items-start py-4 mt-4 sm:mt-12">
            <div className="py-1 flex-1 items-center">
              <img
                src="https://res.cloudinary.com/choouse/image/upload/v1630179992/Choouse/choouse_ppuuhx.png"
                width="150px"
                height="auto"
              />
            </div>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-my-blue uppercase text-xs">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Creator</li>
              <li className="cursor-pointer">FAQs</li>
              <div className="hidden sm:flex flex-1 justify-end items-center gap-3">
                <button
                  type="button"
                  className="bg-my-red hover:bg-my-blue hover:text-white text-white rounded-md justify-end uppercase py-2
                px-5"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="bg-my-red hover:bg-my-blue hover:text-white text-white rounded-md justify-end uppercase py-2
                px-5"
                >
                  Signup
                </button>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    );
}



