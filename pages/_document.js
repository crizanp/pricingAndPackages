// pages/_document.js (Next.js Pages Router)
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="google-site-verification" content="4g0gsGgPJ_73i_h7GIUhnXYddap4FQI0M6axwX0gkT0" />
        {/* Google AdSense */}
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8377837851676312"
     crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}