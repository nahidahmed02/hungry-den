// import { ContextProvider } from '@/context/Context'
import '@/styles/globals.css'
import { ContextProvider } from '../context/Context'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
