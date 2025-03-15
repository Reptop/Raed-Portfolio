import {
  // Box,
  Container,
  Badge,
  // Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio,
  // Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Spider Simulator! <Badge>2024</Badge>
      </Title>
      <P>
        For my computer graphics class, I was tasked with making
        anything I wanted. So, I decided to make a spider simulator!
        This spider is animated and rendered using OpenGL. The spider
        can climb on walls, strafe in any direction, and shoot lazers.
        I decided to prioritize functionality over realism, as a realistic
        spider would implicate model rigging; I just wanted this to be a fun
        and inviting tech demo.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <span>Currently close-source but I will be releasing the source soon!</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, OpenGL</span>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe
              src="https://www.youtube.com/embed/UUA-Jsz82HY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ListItem>
      </List>

      <WorkImage src="/images/works/spider_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/spider_lazer.png" alt="menkiki" />
        <WorkImage src="/images/works/spider_wall.png" alt="menkiki" />
      </SimpleGrid>
    </Container>

  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
