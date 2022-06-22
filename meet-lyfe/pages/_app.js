import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta className="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
