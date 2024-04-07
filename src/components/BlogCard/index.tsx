import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
} from '@chakra-ui/react'
import { ShortText } from '../../utils/ShortText'

function BlogCard({
  title,
  desc,
  onReadMore,
}: {
  title: string
  desc: string
  onReadMore: () => void
}) {
  {
    console.log(ShortText(desc, 5), 'new desc')
  }

  return (
    <Card maxW="sm" maxH="sm">
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>{title}</Text>
        <Button variant="solid" onClick={onReadMore}>
          Show More
        </Button>
      </CardHeader>
      <CardBody>
        <Text>{ShortText(desc, 5)}</Text>
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
