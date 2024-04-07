// @ts-nocheck

import { useEffect, useState } from 'react'

export function useFetchData({
  fetchFn,
  dependency = [],
}: {
  fetchFn: () => void
  dependency: []
}) {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const get_blogs = await fetchFn()
        setData(get_blogs?.data)
        console.log(get_blogs, 'get_blogs')
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [...dependency])

  return { data, error, loading, setData }
}
