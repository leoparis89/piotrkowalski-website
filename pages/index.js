import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Piotr Kowalski</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="ahrefs-site-verification" content="49900ab91bde14b84bc536085d15abd5d2cfee6ccb44a6dfd9362cb9a4b0d824"></meta>
      </Head>

      <main>
        <Header title="Piotr Kowalski" />
        <p className="description">
        
        </p>
        <Link href="/expositions">Expositions</Link>
        <h2>Contact</h2>
        <a href="mailto:andrea.a.kowalski@gmail.com">Andrea Kowalski</a>
        <a href="mailto:levkowalski@gmail.com">Lev Kowalski</a>
      </main>

      <Footer />
    </div>
  )
}
