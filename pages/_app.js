import Head from 'next/head'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
// import Payhip from '../components/payhip'
import { Analytics } from '@vercel/analytics/react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Head>
        {/* Open Graph Meta Tags for Discord, Facebook, etc. */}
        <meta property="og:title" content="Raed Kabir | Portfolio" />
        <meta property="og:description" content="Check out my portfolio website! I am a CS & Math student passionate about networking, programming, and teaching." />
        <meta property="og:image" content="https://reptop.dev/preview.png" />
        <meta property="og:url" content="https://reptop.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags for better Twitter previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Raed Kabir | Portfolio" />
        <meta name="twitter:description" content="Check out my portfolio website and projects!" />
        <meta name="twitter:image" content="https://reptop.dev/preview.png" />
      </Head>

      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </Chakra>
  )
}

export default Website

