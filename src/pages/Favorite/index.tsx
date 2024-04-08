// @ts-nocheck

import { getBlogs } from '../../services/article'
import { SimpleGrid } from '@chakra-ui/react'
import BlogCard from '../../components/BlogCard'
import { useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router'
import { useFetchData } from '../../hooks/useFetchData'
import SpinnerLoad from '../../components/Skeleton'
import { useGlobalContext } from '../../store/global/GlobalProvider'

function Favorite() {
  const navigate = useNavigate()
  const {
    state: { favorite },
  } = useGlobalContext()

  const { data, loading } = useFetchData({
    fetchFn: () => getBlogs(),
  })

  return (
    <SimpleGrid
      spacing={16}
      display="flex"
      flexDirection="column"
      px={10}
      py={6}
    >
      <SimpleGrid spacing={16} display="flex" flexWrap="wrap" px={10}>
        {loading ? (
          <SpinnerLoad />
        ) : (
          favorite?.map((item) => {
            return (
              <BlogCard
                key={item?.id + 'card'}
                {...item}
                onReadMore={() => navigate(ROOTER.ARTICLES + '/' + item?.id)}
              />
            )
          })
        )}
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default Favorite
