import '../css/_global.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Provider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Layout>
                <Header>

                    <Component {...pageProps} />

                </Header>
            </Layout>
        </Provider >)
}
export default MyApp
