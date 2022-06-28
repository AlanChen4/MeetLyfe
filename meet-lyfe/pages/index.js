import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div>
            <Head>
                <title>ACE</title>
                <meta name="description" content="MetLife ACE" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <h1>Index</h1>
        </div>
    )
}
