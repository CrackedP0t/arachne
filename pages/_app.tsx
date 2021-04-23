import type { AppProps /*, AppContext */ } from 'next/app'
import "./sprites.css";
import "./global.css";

function Arachne({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Arachne;