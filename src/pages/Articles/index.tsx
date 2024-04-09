// @ts-nocheck

import { getBlogs } from '../../services/article'
import { SimpleGrid } from '@chakra-ui/react'
import BlogCard from '../../components/BlogCard'
import { useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router'
import { useFetchData } from '../../hooks/useFetchData'
import SpinnerLoad from '../../components/Skeleton'
import SearchBox from '../../components/SearchBox'
import { useEffect, useState } from 'react'
import useTitle from '../../hooks/useTitle'

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
  const [searchData, setSearchData] = useState([])

  useTitle('Articles | PB')

  const { data, loading } = useFetchData({
    fetchFn: () => getBlogs(),
  })

  useEffect(() => {
    setSearchData(data)
  }, [data])

  function onSearch(text: string) {
    if (text.length != 0) {
      const filteredData = data?.filter((item) =>
        item?.title?.toLowerCase()?.includes(text?.toLowerCase()),
      )
      setSearchData(filteredData)
      console.log(filteredData, 'filteredData')
    } else {
      setSearchData(data)
    }
  }

  return (
    <SimpleGrid
      spacing={16}
      display="flex"
      flexDirection="column"
      px={10}
      py={6}
    >
      <SearchBox onSearch={onSearch} />
      <SimpleGrid spacing={16} display="flex" flexWrap="wrap" px={10}>
        {loading ? (
          <SpinnerLoad />
        ) : (
          searchData
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
    </SimpleGrid>
  )
}

export default Home
