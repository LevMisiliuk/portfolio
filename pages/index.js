import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio-section'
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          color='white'
          align='center'
        >
          Hello I&apos;m a front-end developer based in Dnipro!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Misiliuk Lev
            </Heading>
            <p>Follow me for more info</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inlinde-block'
              alt='Misiliuk Lev'
              borderRadius='full'
              src='images/lev.jpeg'
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Lev is a developer and a front-end developer based in Dnipro with a
            passion for building digital services/stuff he wants. He has a knack
            for all things launching products, from planning and designing all
            the way to solving real-life problems with code. When not online, he
            loves hanging out with his friends.
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button
                rightIcon={<ChevronRightIcon></ChevronRightIcon>}
                colorScheme='teal'
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Skils
          </Heading>
          <Paragraph>
            JavaScript, React, Next.js, Node.js, GraphQL, Vue 3/2, Nuxt.js,
            HTML, CSS, SCSS, Tailwind, Figma, Chakra UI, Element UI, Git,
            Cypress
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Dnipro, Ukraine
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Worked as Quality Assurance at SplineStudio
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Working as front-end developer at SplineStudio
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            What I like
          </Heading>
          <Paragraph>
            Art, Music, Movies, Books, Comics, Tech, Science, Design, Games
            etc..
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>Usefull links</Heading>
          <List>
            <ListItem>
              <Link href='https://github.com/LevMisiliuk' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>@levmisiliuk</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.linkedin.com/in/lev-misiliuk/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin} />}>levmisiliuk</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.instagram.com/levmisiliuk/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>levmisiliuk</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
