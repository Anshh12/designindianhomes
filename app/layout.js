'use client'
import { useState, useEffect, useRef } from 'react'
import { BioRhyme } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { SpaceProvider } from './SpaceContext'
import { ThemeProvider } from './themeContext'
import store from '../components/redux/store'
import Script from 'next/script'
import Head from 'next/head'
import Animation from './animation/page'

const bioRhyme = BioRhyme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  const [title, setTitle] = useState(
    `Best Interior Designers Company- Design Indian Homes`
  )

  useEffect(() => {
    // Update the document title on mount
    document.title = title
  }, [title])

  // Reference to the animation canvas
  const animationCanvasRef = useRef(null)

  // Function to handle mouse move event on the animation canvas
  const handleMouseMove = (e) => {
    animationCanvasRef.current.handleMouseMove(e.nativeEvent)
  }

  // Function to handle mouse out event on the animation canvas
  const handleMouseOut = (e) => {
    animationCanvasRef.current.handleMouseOut(e.nativeEvent)
  }

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="msvalidate.01" content="9FE8C362BB86815394E53A44789BC3FD" />
        <meta name="google-site-verification" content="CAXQdsjhssz1BrLDtJ1LcQKI_53ZXcNZiiojNkcdW-c" />
        <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8VK2BRK');`}
      </Script>
      </Head>
      <Script strategy="lazyOnLoad" id="hotjar">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3553114,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <body className={`${bioRhyme.className}`}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8VK2BRK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <ThemeProvider>
          <SpaceProvider>
            {/* Overlay Animation */}
            {/* <div>

            <Animation />
            </div> */}
            {/* Content */}
            <div>{children}</div>
          </SpaceProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
