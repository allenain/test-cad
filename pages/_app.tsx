import type { AppProps } from 'next/app';
import './globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import {useEffect} from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const footer = document.querySelector("footer");
        if (footer) {
            const height = footer.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--footer-height', `${height}px`);

        }
    }, []);

    return <Component {...pageProps} />;
}
