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