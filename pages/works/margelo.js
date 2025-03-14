import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio,
  // Spacer
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        TellTail <Badge>2025</Badge>
      </Title>
      <P>
        For my software engineering class, we were tasked with making a term project with a group of people.
        Initially, we were all unsure on project ideas until I pitched an app that can detect
        pet breeds based on an image. To my suprise, my group agreed on the idea! I am so happy to
        have ended up working on this project with such a talented group of people.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://tail-tell.vercel.app/" target="_blank">
              TellTail <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Vite / TypeScript / Vercel / PyTorch / TailwindCSS
          </span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <span>
            <Link href="https://github.com/HackerManOSU/TellTail" target="_blank">
              v1.0 <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/telltail_logo.png" alt="Website" />
      <WorkImage src="/images/works/telltail_ragdoll.png" alt="Margelo" />
      <WorkImage src="/images/works/telltail_home.png" alt="Margelo" />
      <WorkImage src="/images/works/telltail_choice.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
