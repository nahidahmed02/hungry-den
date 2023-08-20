import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout/Layout'
import HomePage from '../components/Home/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hungry Den</title>
        <meta name="description" content="Rastaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <HomePage></HomePage>
        </Layout>
      </main>
    </>
  )
}
