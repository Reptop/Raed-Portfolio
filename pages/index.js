import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/lorenz.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I&apos;m a student studying CS & Math :)
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Raed Kabir
          </Heading>
          <p>Student, Teacher, Cat Parent</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="125px"
            h="125px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/raed2.jpg"
              alt="Profile image"
              width="125"
              height="125"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hello, my name is Raed Kabir; I&apos;m deeply passionate about computer
          networks and the intersection of mathematics and programming.
          In my free time, I enjoy analyzing TCP requests and studying
          differential equations, as these areas fuel my curiosity and
          drive for problem-solving. I also find immense fulfillment in
          teaching programming and math, as sharing knowledge enhances
          my own understanding and helps others grow. Currently, I&apos;m
          applying for internships to gain hands-on industry
          experience and further develop my technical skills.


        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="green"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2003</BioYear>
          Born in Santa Clara, California
        </BioSection>

        <BioSection>
          <BioYear>2021 to 2023</BioYear>
          Worked as a coding tutor for kids at Code Ninjas.
        </BioSection>

        <BioSection>
          <BioYear> 2023 to 2024</BioYear>
          Conducted linear algebra research with math faculty.
        </BioSection>

        <BioSection>
          <BioYear>2022 to Present</BioYear>
          Pursuing a double Bachelor&apos;s Degree in Computer Science
          and Math at Oregon State University (OSU).
        </BioSection>

        <BioSection>
          <BioYear>2023 to Present</BioYear>
          Working as a TA for undergraduate math classes
        </BioSection>


      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Some things I like
        </Heading>
        <Paragraph>
          Super Mario Galaxy,{' '}
          <Link href="https://open.spotify.com/user/rkyuuki?si=a909bcf6a2254750" target="_blank">
            Music
          </Link>
          , My Cats,{' '}
          <Link href="https://codeforces.com/profile/Reptop" target="_blank">
            Competitive Programming
          </Link>
          , Machine Learning, Super Smash Bros Melee/Ultimate
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Reptop" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub />}
              >
                @Reptop
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/kabirraed/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoInstagram />}
              >
                @kabirraed
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href='https://www.linkedin.com/in/kabirrraed/' target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoLinkedin />}
              >
                @Raed-Kabir
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/@raedkabir2282"
            title="My YouTube Channel"
            thumbnail={thumbYouTube}
          >
            My YouTube channel - mostly short films and math videos
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Blog
        </Heading>
        <p>
          Tune into my blog which documents life events, coding projects, and more :O
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.youtube.com/watch?v=gFQZgwMC1As"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="green"
          >
            Sign up for my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
