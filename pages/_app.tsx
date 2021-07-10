import '../css/_global.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default MyApp
