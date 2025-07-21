import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {

  return( <div>

    <nav className="navbar">
      
         <div className="text-white"> Copyright 2025 ©</div>

         <div className="fixd x-10 bg-slate-950 text-center p-2 flex flex-row justify-center gap-5">

                <Link style={{ textDecoration: 'none' }} href="/">
                  <div className="text-xl cursor-pointer text-white">Home</div>
                </Link>

                <Link style={{ textDecoration: 'none' }} href="/scarpe">
                  <div className="text-xl cursor-pointer text-white">Scarpe</div>
                </Link>
                
                <Link style={{ textDecoration: 'none' }}href="/capi">
                  <div className="text-xl cursor-pointer text-white">Capi</div>
                </Link>

        </div>
    </nav>
  
  <Component {...pageProps} />

  <footer className="footer">
      Created by NIKE
    </footer>

</div>  
)
}
