import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="RK Address Book">
    <Container>
      <Title>
        RK Address Book <Badge>2019-2020</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/pengu.png" width={250} height={250} alt="icon" />
      </Center>
      <P>
        An address book utilzing Java Serializable for efficient save files.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Can store any number of contacts.
        </ListItem>

        <ListItem>
          Automatically loads last inputted contact info - like a save state!.
        </ListItem>

        <ListItem>
          Implements full transparency of where contacts are saved.
        </ListItem>

        <ListItem>
          Compatible on all modern operating systems.
        </ListItem>

        <ListItem>
          Open-source. Changes are welcome - even now.
        </ListItem>

      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, Linux, MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Reptop/Address-book-/tree/main">
            v1.1.0
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2020/06/10</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Some Pics :O</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/contact_loaded.png" alt="amembo" />
        <WorkImage src="/images/works/contact_save.png" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/UI.png" alt="amembo" />

      <Center>
        <h4>No homies...</h4>
        <WorkImage src="/images/works/contact_notif.png" alt="amembo" />
      </Center>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
