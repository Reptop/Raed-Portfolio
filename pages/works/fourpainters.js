import {
  Container,
  Badge,
  List,
  AspectRatio,
  ListItem,
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Realistic Fire Shader with Particle & Wind Effects">
    <Container>
      <Title>
        Fire Shader with Particle & Wind Effects <Badge>2025</Badge>
      </Title>
      <P>
        For my shaders class, we were tasked with creating a final project that can be anything of our choosing.
        I am particularly interested in perfecting realism with computer graphics. I love obesessing over small
        details and optimising whatever I can, so I chose to make a realistic fire shader. The creative process
        was really fun; I decided to showcase my project by using a Groudon obj model. For those who
        don&apos;t know, Groudon is a legendary ground type Pokemon. Groudon is mainly known for being associated with
        fire and lava so I decided to cover him with my fire shader.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <span>Source will be coming soon!</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, GLSL, OpenGL</span>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe
              src="https://www.youtube.com/embed/YqeFmcZqoCc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ListItem>
      </List>

      <WorkImage src="/images/works/groudon.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
