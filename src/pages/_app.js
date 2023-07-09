import '@/styles/globals.css'
import { ContextProvider } from '../context/Context'
import AuthProvider from '../context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ContextProvider>
          <Component {...pageProps} />
          <Toaster></Toaster>
        </ContextProvider>
      </AuthProvider>
    </QueryClientProvider>

  )
}
