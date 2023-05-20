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
      </Head>

      <main>
        <Header title="Piotr Kowalski" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
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
