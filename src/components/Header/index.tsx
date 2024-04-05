import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/rooter.js'

function Header() {
  const navigate = useNavigate()

  return (
    <div>
      <Box
        h={100}
        p={8}
        bgColor="green.500"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth="6px"
        borderColor="orange.700"
      >
        <Text
          colorScheme="telegram"
          variant="ghost"
          onClick={() => {
            navigate(ROOTER.HOME)
          }}
          cursor="pointer"
          fontSize="3xl"
        >
          Home
        </Text>
        <Stack direction="row" spacing={4} align="center">
          <Button
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.HOME)
            }}
          >
            Home
          </Button>
          <Button
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.ARTICLES)
            }}
          >
            Articles
          </Button>
          <Button
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.FAVORITE)
            }}
          >
            Favorite
          </Button>
          <Button
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.FAQ)
            }}
          >
            FAQ
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Header
