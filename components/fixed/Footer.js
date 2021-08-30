import { Icon } from "semantic-ui-react"

export default function Footer() {
    return (
      <div>
        <footer className="px-28 pt-10 w-full bg-my-blue flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img src="https://res.cloudinary.com/olawalessed/image/upload/v1630222024/next-tailwind%20pictures/png/logo-bookmark-white_gweoaa.png" />
            <ul className="flex text-white uppercase gap-8 text-xs">
              <li className="cursor-pointer hover:text-my-grey">Features</li>
              <li className="cursor-pointer hover:text-my-grey">Pricing</li>
              <li className="cursor-pointer hover:text-my-grey">Contact</li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12">
            <Icon name="twitter" color="yellow" />
            <Icon name="facebook" color="yellow" />
          </div>
        </footer>
      </div>
    );
}
