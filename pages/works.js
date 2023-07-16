import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbWinCacl from '../public/images/works/wincalc.png'
import thumbBlueAuditor from '../public/images/works/blueauditor.png'
import thumFarego from '../public/images/works/scheidt_bachmann.webp'
import thumbVostokmedservice from '../public/images/works/vostokmedservice.png'
import thumbOkoshko from '../public/images/works/okoshko.png'
import thumbVetdp from '../public/images/works/vetdp.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='1'
              href='blueauditor'
              title='BlueAuditor Marketplace'
              thumbnail={thumbBlueAuditor}
            >
              Blue Auditor is the only digital marketplace platform that brings
              together all major green building certification standards in one
              single platform.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem  href='farego' id='2' title='FareGo+' thumbnail={thumFarego}>
              Brand FareGo provides advanced fare collection systems and an
              extensive service range that enables transport operators to focus
              on their core business.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              href='vostokmedservice'
              id='3'
              title='Vostokmedservice'
              thumbnail={thumbVostokmedservice}
            >
              E-commerce project for the sale of medical equipment
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id='4' title='Okoshko.ua' thumbnail={thumbOkoshko}>
              Landing page for window sales with built-in calculator for the
              user
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id='4' title='Vet.dp.ua' thumbnail={thumbVetdp}>
              Information site on veterinary services in Ukraine
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id='5'
              title='Windows calculator'
              thumbnail={thumbWinCacl}
            >
              To start with, it is a very engaging project that allows users to
              order window designs from home
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
