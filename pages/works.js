import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbGojo from '../public/images/works/gojo.jpg'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbZool from '../public/images/works/zool.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/pengu.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Projects - There will be more to come!
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="RKShell" thumbnail={thumbGojo}>
            My custom shell with unique features for optimized productivity.
          </WorkGridItem>
        </Section>

        {
          /*
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>


        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>

        */
        }

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      {
        /*
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem

            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>
        */
      }

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>


      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbZool}
            title="Zool"
          >
            A text-based adventure game written entirely in C++.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="RK Address Book">
            A lightwight Java-based address book that supports save states.
          </WorkGridItem>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
