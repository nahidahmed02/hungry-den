import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout/Layout'
import Shop from '../components/Shop/Shop'
import { BsCart4 } from 'react-icons/bs'
import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../context/Context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { itemsInCart } = useContext(Context);

  return (
    <>
      <Head>
        <title>Friends Kebab</title>
        <meta name="description" content="Rastaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Shop></Shop>
          <Link href='/cart'>
            <span className="fixed bottom-24 right-9 text-xl font-bold">
              <BsCart4 className='text-5xl rounded bg-yellow-500 fixed bottom-16 right-6'>

              </BsCart4>
              {itemsInCart}
            </span>
          </Link>
        </Layout>
      </main>
    </>
  )
}
