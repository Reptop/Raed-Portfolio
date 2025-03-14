import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        {/* General Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Raed Kabir's Portfolio Website" />
        <meta name="author" content="Raed Kabir" />
        <meta name="author" content="Reptop" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph Meta Tags (for Discord, Facebook, etc.) */}
        <meta property="og:site_name" content="Raed Kabir" />
        <meta property="og:title" content="Raed Kabir | Portfolio" />
        <meta property="og:description" content="Explore my portfolio! I'm a CS & Math student interested in networking, programming, and teaching." />
        <meta property="og:image" content="https://reptop.dev/preview.png" />
        <meta property="og:url" content="https://reptop.dev/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (for better Twitter/X previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Raed Kabir | Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio and projects!" />
        <meta name="twitter:image" content="https://reptop.dev/preview.png" />
        <meta name="twitter:site" content="@Reptop" />
        <meta name="twitter:creator" content="@Reptop" />

        {/* Page Title */}
        <title>Raed Kabir - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main

