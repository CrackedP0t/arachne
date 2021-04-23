import type { AppProps /*, AppContext */ } from 'next/app'

if (process.env.GITHUB_RUN_ID) {
    require("./gh_pages.css");
}

import "./global.css";
import "./sprites.css";

function Arachne({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Arachne;