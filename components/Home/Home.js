import { Icon } from '@iconify/react'

import javascriptIcon from '@iconify/icons-logos/javascript'
import reactIcon from '@iconify/icons-logos/react'
import sassIcon from '@iconify/icons-logos/sass'
import reduxIcon from '@iconify/icons-logos/redux'
import nodejsIcon from '@iconify/icons-logos/nodejs-icon'

const Home = () => {
  return (
    <div className='hero is-fullheight' id='home'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className='title is-3 bounceTitle'>Mohammad Rafey</h1>
          <h2 className='subtitle bounceTitle'>Front-End Web Developer</h2>
          <Icon icon={javascriptIcon} className='logos bounceTitle' />
          <Icon icon={reactIcon} className='logos bounceTitle' />
          <Icon icon={sassIcon} className='logos bounceTitle' />
          <Icon icon={reduxIcon} className='logos bounceTitle' />
          <Icon icon={nodejsIcon} className='logos bounceTitle' />
        </div>
      </div>
    </div>
  )
}

export default Home
