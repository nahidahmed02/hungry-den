import '@/styles/globals.css'
import { ContextProvider } from '../context/Context'
import AuthProvider from '../context/AuthProvider'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </AuthProvider>
  )
}
