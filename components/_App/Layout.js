import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' type='image/png' href='/static/mylogo.png' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Ubuntu&display=swap'
          rel='stylesheet'
        ></link>
        <script
          defer
          src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'
        />
        <script src='https://code.iconify.design/1/1.0.4/iconify.min.js' />
        <title>Mohammad Rafey</title>
      </Head>
      <Header />
      {children}
    </>
  )
}

export default Layout
