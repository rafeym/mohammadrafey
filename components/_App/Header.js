import React from 'react'

import { Link, animateScroll as scroll } from 'react-scroll'

const Header = () => {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <>
      <nav className='navbar is-fixed-top is-size-6-desktop is-size-6-touch'>
        <div className='container'>
          <div className='navbar-brand'>
            <a href='/' className='navbar-item'>
              Mohammad Rafey
            </a>
            <a
              role='button'
              className='navbar-burger'
              data-target='navMenu'
              aria-label='menu'
              aria-expanded='false'
              onClick={() => {
                setIsActive(!isActive)
              }}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div
            className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}
            id='navMenu'
          >
            <div className='navbar-end'>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                <div className='navbar-item'>Home</div>
              </Link>

              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
              >
                <div className='navbar-item'>About</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
