// @ts-nocheck

import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useFetchData } from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { getBlogId } from '../../services/article'
import { shortText } from '../../utils/shortText'
import { convertTime } from '../../utils/convertTime'
import SpinnerLoad from '../../components/Skeleton'
import { useGlobalContext } from '../../store/global/GlobalProvider'
import { TYPES } from '../../store/global/types'
import useTitle from '../../hooks/useTitle'

function ArticleDetail() {
  const { id } = useParams()
  const { state, dispatch } = useGlobalContext()

  const { data, loading } = useFetchData({
    fetchFn: () => getBlogId(parseInt(id)),
  })
  useTitle(`${shortText(data?.title, 16)} | PB`)

  const favBool = state?.favorite?.find((item) => item?.id == id)

  function toggleFav() {
    console.log(state, 'state')

    if (favBool) {
      const favBool = state?.favorite?.filter((item) => item?.id != id)
      dispatch({ type: TYPES.FAV, payload: favBool })
      return
    }

    dispatch({ type: TYPES.FAV, payload: [...state.favorite, data] })
  }

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
            <Button color={favBool ? 'teal' : 'red'} onClick={toggleFav}>
              {favBool ? 'Favorite' : 'Not Favorite'}
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </>
  )
}

export default ArticleDetail
