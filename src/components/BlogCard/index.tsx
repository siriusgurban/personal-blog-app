// @ts-nocheck

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
} from '@chakra-ui/react'
import { shortText } from '../../utils/shortText'
import { categories } from '../../constants/categories'

function BlogCard({
  title,
  desc,
  onReadMore,
  category,
}: {
  title: string
  desc: string
  onReadMore: () => void
}) {
  const blogCategory = categories?.find((item) => item.category == category)
  console.log(blogCategory, 'blogCategory')

  return (
    <Card maxW="sm" maxH="sm">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text textShadow="1px 1px #ff0000" m="6">
          {blogCategory?.category}
        </Text>
        <Text>{shortText(title, 15)}</Text>
        <Button variant="solid" onClick={onReadMore}>
          Show More
        </Button>
      </CardHeader>
      <CardBody>
        <Text>{shortText(desc, 5)}</Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
    </Card>
  )
}

export default BlogCard
