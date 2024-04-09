// @ts-nocheck

import { instanceAxios } from '../helpers/instanceAxios'

export const getBlogs = async () => {
  const response = await instanceAxios({ method: 'GET', url: 'posts' })

  return response
}
export const getBlogId = async (id: number) => {
  const response = await instanceAxios({ method: 'GET', url: 'posts/' + id })

  return response
}

export const crtBlog = async (data) => {
  const response = await instanceAxios({ method: 'POST', url: 'posts', data })

  return response
}
export const rmvBlogId = async (id: number) => {
  await instanceAxios({ method: 'DELETE', url: 'posts/' + id })
}
