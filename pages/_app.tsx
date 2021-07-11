import '../css/_global.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Header>
                <Component {...pageProps} />
            </Header>
        </Layout>)
}
export default MyApp
