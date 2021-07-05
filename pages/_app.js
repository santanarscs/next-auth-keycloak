import '../styles/globals.css'
import { Provider as NextuAuthProvider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return <NextuAuthProvider session={pageProps.session}>
    <Component {...pageProps} />
  </NextuAuthProvider>
}

export default MyApp
