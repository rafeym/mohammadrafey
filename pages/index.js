import Home from '../components/Home/Home'
import About from '../components/About/About'
import { Helmet } from 'react-helmet'

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohammad Rafey | Home </title>
        <meta
          name='description'
          content='Front-End Developer in Toronto, Canada.'
        />
      </Helmet>
      <Home />
      <About />
    </>
  )
}

export default Index
