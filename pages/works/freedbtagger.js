import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
    <Container>
      <Title>
        Zool <Badge>2019-2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
      <P>A text-based adventure game for any operating system!</P>
      <P>Consists of alternate endings and lots of content.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, Linux, MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/Reptop/zool">
            v1.0.5
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2023/04/20</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          Some Features :O
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Expansive Overworld</Badge>
          <span>
            This is a text-based adventure game, so of course that means that
            there are plenty of different paths you can take!
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Memory Safe & Lightweight</Badge>
          <span>
            This game was created using C++, which allows for efficient memory management.
            Also, while this game is complicated, this game consists of 0 memory leaks as it
            was frequently tested via...
            <Link href="https://valgrind.org/" target="_blank">
              valgrind!
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Consists of an inventory and item system</Badge>
          <span>
            Players can collect items and use them in a variety of situations.
            I am keeping this vague to not spoil you :)
          </span>
        </ListItem>
      </UnorderedList>


      <Heading as="h4" fontSize={16} my={6}>
        <Center>Some Pics :)</Center>
      </Heading>

      <Box>
        I don't have pics yet...
      </Box>

      <WorkImage src="/images/works/gojo.jpg" alt="freeDBTagger" />
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
