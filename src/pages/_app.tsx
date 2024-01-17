import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from "@next/font/google";
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // <--------- 👈
});

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className={`${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
