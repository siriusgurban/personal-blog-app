// @ts-nocheck

import {
  FormControl,
  FormLabel,
  SimpleGrid,
  Input,
  Select,
  Image,
  Heading,
  Button,
  Box,
  FormHelperText,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import useTitle from '../../hooks/useTitle'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { categories } from '../../constants/categories'
import defaulImage from '../../assets/default_image.png'
import { ROOTER } from '../../constants/router'
import { crtBlog, getBlogId } from '../../services/article'
import { useFetchData } from '../../hooks/useFetchData'

const initialValues = {
  title: '',
  desc: '',
  cover_url: '',
  category: null,
  images: [],
  created: Date.now(),
}

function Create() {
  const [img, setImg] = useState('')
  const navigate = useNavigate()
  const toast = useToast()

  useTitle('Create | PB')

  const [par] = useSearchParams()
  const parId = par?.get('blog_id')

  const { data } = useFetchData({
    fetchFn: () => getBlogId(parseInt(parId)),
  })

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: handleEditBloag,
    validate: (form) => {
      const error = {}

      if (!form?.title?.trim()) {
        error.title = 'Require field'
      }
      if (!form?.desc?.trim()) {
        error.desc = 'Require field'
      }

      return error
    },
  })

  async function handleEditBloag(data) {
    console.log(data, 'data')
    try {
      await crtBlog(data)
      navigate(ROOTER.ARTICLES)
      toast({
        description: 'Your post created',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    } catch (error) {
      toast({
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }

  return (
    <SimpleGrid
      spacing={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={10}
      py={6}
    >
      <Heading mx="auto">
        {parId == null ? 'Create New' : 'Update'} Blog
      </Heading>
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          type="text"
          id="title"
          name="title"
          value={data?.title}
          onChange={handleChange}
        />
        {errors?.title && (
          <FormHelperText color="red">{errors?.title}</FormHelperText>
        )}
        <FormLabel htmlFor="desc">Description</FormLabel>
        <Input
          type="text"
          id="desc"
          name="desc"
          value={data?.desc}
          onChange={handleChange}
        />
        {errors?.desc && (
          <FormHelperText color="red">{errors?.desc}</FormHelperText>
        )}
        <FormLabel>Category</FormLabel>
        <Select
          placeholder="Select category"
          name="category"
          onChange={handleChange}
        >
          {categories?.map((item) => (
            <option
              key={item.id}
              value={item.category}
              selected={item.id == data?.category}
            >
              <Text color="red">{item.category}</Text>
            </option>
          ))}
        </Select>
        <FormLabel>Cover Image</FormLabel>
        <Input
          type="text"
          id="image"
          name="cover_url"
          value={img}
          onChange={(e) => {
            setImg(e.current.value)
            handleChange()
          }}
        />
        {errors?.cover_url && (
          <FormHelperText color="red">{errors?.cover_url}</FormHelperText>
        )}
        <Image
          src={values.cover_url ? values.cover_url : defaulImage}
          w="50%"
        />
        <Box display="flex" justifyContent="center">
          <Button colorScheme="telegram" my={5} onClick={handleSubmit}>
            {parId == null ? 'Create' : 'Update'}
          </Button>
        </Box>
      </FormControl>
    </SimpleGrid>
  )
}

export default Create
