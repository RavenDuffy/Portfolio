import { AppProps } from 'next/app'
import '../public/styles/main.scss'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App;