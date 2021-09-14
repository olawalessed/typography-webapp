Layout

import { useState, Component } from 'react'
import { Container, Head } from 'semantic-ui-react'
import { Header }from './fixed/Header'

const Layout = (props) => {

  return (
    <Container>
            <Head><link
                rel="stylesheet" 
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
            </Head>

            <Header />
            {props.children}
        </Container>
    )
  }

  export default Layout



  Header

  import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

const Header = () => {

  const [activeItem, setActiveItem] = useState('home')

  const handleClick = (e, {name}) => {
    e.preventDefault()
    setActiveItem(name)
  }

  return (
    <Menu secondary>
      <Menu.Item
      name='home'
      active={activeItem === 'home'}
      onClick={handleClick}
      />

      <Menu.Item
      name='about'
      active={activeItem === 'about'}
      onClick={handleClick}
      />

    </Menu>
  )
}

export default Header



Footer 

import Link from 'next/link'

const Footer = () => {
  return (
    <div className='header'>
      <Link href='/'>
        <a className='title'>This is the Footer</a>
      </Link>
    </div>
  )
}


export default Footer






{/* Other Content */}
          <div className="grid grid-cols-3 h-full">
            {/* left Grid */}
            <div className="col-span-2 self-stretch">
              <h1 className="text-6xl">36 Days of Typography</h1>

              <div className="flex space-x-5">
                <div>
                  <p>
                    Like many creatives this year, I was just looking for a
                    design inspiration on behance, then I stumbled on this nice
                    typography work made by Tim Arnold, I give all credits to
                    him for this awesome work. It was his work for the annual
                    8th edition of 36 Days of Type. An annual event where
                    designers & artists from around the globe create one letter
                    or number every day across a total of 36 days.
                  </p>
                </div>
                <div>
                  I approached the conversion of this into a web app using
                  Tailwind on Next JS. As a designer, I was switching to
                  becoming User Interface developer (with Frontend Engineering).
                  I'm really pleased to have worked on this conversion to help
                  speed up my tailwind and general css knowledge to merge normal
                  design knowledge and web development. Thanks Tim, Thanks
                  everyone.
                </div>
              </div>
            <div className="">
              <div className="flex space-x-6">
                <div>
                  <p>Volume 08</p>
                </div>
                <div>
                  <p>Volume 08</p>
                </div>
                <div>
                  <p>Volume 08</p>
                </div>
              </div>
            </div>
            </div>

            {/* Right Grid */}
            <div className="col-span-1 self-stretch">
              <div className="pb-20">
                <h1>Animated text here</h1>
              </div>
            </div>
          </div>