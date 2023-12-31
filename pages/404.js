import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'


const NotFound = () => {
  return (
    <Container mt={20}>
      <Heading as='h1'>Not Found</Heading>
      <Text>The page you are looking for was not found</Text>
      <Divider my={6} />

      <Box my={6} align='center'>
        <NextLink href='/' passHref>
          <Button colorScheme='teal'>Go to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound