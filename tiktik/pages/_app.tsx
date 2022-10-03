import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setisSSR] = useState(true);

  useEffect(() => {
    setisSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <div>
      Navbar
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          Sidebar
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
