// @ts-nocheck

import { getBlogs } from '../../services/article'
import { SimpleGrid } from '@chakra-ui/react'
import BlogCard from '../../components/BlogCard'
import { useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router'
import { useFetchData } from '../../hooks/useFetchData'
import SpinnerLoad from '../../components/Skeleton'

// type Obj = {
//   title: string
//   desc: string
//   cover_url: string
//   images: string[]
//   created: number
//   category: number
// }

function Home() {
  const navigate = useNavigate()

  const { data, loading } = useFetchData({
    fetchFn: () => getBlogs(),
  })

  return (
    <SimpleGrid spacing={20} display="flex" flexWrap="wrap" px={10} py={10}>
      {loading ? (
        <SpinnerLoad />
      ) : (
        data
          ?.filter((item) => item?.id > 95)
          ?.map((item) => {
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
  )
}

export default Home
