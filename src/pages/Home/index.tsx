import {
  Box,
  Card,
  CardBody,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import useTitle from '../../hooks/useTitle'

function Home() {
  useTitle('Home | PB')

  return (
    <div>
      <SimpleGrid
        spacing={20}
        display="flex"
        justifyContent="around"
        px={10}
        py={10}
        height="100vh"
      >
        <Box w="50%">
          <Heading lineHeight="tall">
            <Highlight
              query="Blog App"
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'orange.400' }}
            >
              Welcome to Blog App
            </Highlight>
          </Heading>
          <Text pt="2" fontSize="lg">
            View a summary of all your clients over the last month. View a
            summary of all your clients over the last month. View a summary of
            all your clients over the last month. View a summary of all your
            clients over the last month.
          </Text>
        </Box>
        <Box boxSize="lg">
          <Card bg={'orange.400'} boxShadow="dark-lg">
            <CardBody>
              <Image
                src="https://shoutem.com/wp-content/uploads/2022/05/How-To-Make-A-Blog-Mobile-App-In-3-Easy-Steps.jpg"
                alt="blog"
                borderRadius="lg"
              />
            </CardBody>
          </Card>
        </Box>
      </SimpleGrid>
    </div>
  )
}

export default Home
