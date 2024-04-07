// @ts-nocheck

import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { useFetchData } from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getBlogId } from '../../services/article'
import { shortText } from '../../utils/shortText'
import { convertTime } from '../../utils/convertTime'
import SpinnerLoad from '../../components/Skeleton'

function Home() {
  const { id } = useParams()

  const { data, loading } = useFetchData({
    fetchFn: () => getBlogId(parseInt(id)),
  })

  return (
    <>
      {loading ? (
        <SpinnerLoad />
      ) : (
        <SimpleGrid
          spacing={20}
          display="flex"
          justifyContent="around"
          px={10}
          py={10}
          height="100vh"
        >
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
          {console.log(data, 'data')}
          <Box w="50%">
            <Text pt="2" fontSize="lg">
              {convertTime(data?.created)}
            </Text>
            <Heading lineHeight="tall">{data?.title}</Heading>
            <Text pt="2" fontSize="lg">
              {shortText(data?.desc, 5)}
            </Text>
          </Box>
        </SimpleGrid>
      )}
    </>
  )
}

export default Home
