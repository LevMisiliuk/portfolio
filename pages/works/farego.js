import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'
import Paragraph from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout title='BlueAuditor Marketplace'>
      <Container>
        <Title>
          FareGo+ <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Brand FareGo provides advanced fare collection systems and an
          extensive service range that enables transport operators to focus on
          their core business. The modular FareGo portfolio covers Account-based
          Ticketing as well as card-based systems, devices for ticket sales and
          validation, cloud-based data management and services that support
          smooth operations at all times.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.scheidt-bachmann.de/en/fare-collection-systems/solutions'>
            https://www.scheidt-bachmann.de/en/fare-collection-systems/solutions <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>App</Meta>
            <Link href='https://farego-plus.com'>
            https://farego-plus.com <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue 2/3, Vuex, GraphQL, REST, Element UI</span>
          </ListItem>
        </List>
        <WorkImage alt='scheidt&bachmann' src='/images/works/scheidt_bachmann.webp' />
      </Container>
    </Layout>
  )
}

export default Work
