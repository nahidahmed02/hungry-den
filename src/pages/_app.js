import '@/styles/globals.css'
import { ContextProvider } from '../context/Context'
import AuthProvider from '../context/AuthProvider'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContextProvider>
        <Component {...pageProps} />
        <Toaster></Toaster>
      </ContextProvider>
    </AuthProvider>
  )
}
