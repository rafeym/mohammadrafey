const About = () => {
  return (
    <div className='hero is-fullheight' id='about'>
      <div className='hero-body'>
        <div className='container has-text-left'>
          <div className='columns is-centered' id='columnContainer'>
            <div className='column is-half'>
              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                Hello there, I'm <strong>Mohammad</strong>.
              </p>
              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                I'm a <strong>front-end web developer</strong> located in{' '}
                <strong>Toronto, Canada.</strong>
              </p>
              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                I love to create <strong>beautiful</strong>,{' '}
                <strong>responsive</strong>, <strong>user-friendly</strong>{' '}
                websites.
              </p>

              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                Here is one of my{' '}
                <a
                  href='https://development-the-station-house.web.app/'
                  target='_blank'
                  className='projectLink'
                >
                  projects
                </a>
              </p>

              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                I am <strong>actively looking</strong> for{' '}
                <strong>developer positons.</strong>
              </p>
              <p className='is-size-4-touch is-size-4-desktop has-text-left-touch aboutText'>
                You can contact me via{' '}
                <a
                  href='https://www.linkedin.com/in/mohammad-rafey-8246b1a9/'
                  target='blank'
                  className='projectLink'
                >
                  <i class='fab fa-linkedin infoLogo' />
                </a>
                <a
                  href='https://github.com/rafeym'
                  target='blank'
                  className='projectLink'
                >
                  <i class='fab fa-github-square infoLogo' />
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
