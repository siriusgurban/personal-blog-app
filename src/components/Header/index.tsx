// @ts-nocheck

import { Badge, Box, Button, Image, Stack } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router.js'
import { useGlobalContext } from '../../store/global/GlobalProvider.js'

function Header() {
  const navigate = useNavigate()

  const {
    state: { favorite },
  } = useGlobalContext()

  const { pathname } = useLocation()
  function isActive(param: string) {
    return pathname === param ? 'orange.700' : 'telegram'
  }

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
        <Image
          colorScheme="telegram"
          variant="ghost"
          onClick={() => {
            navigate(ROOTER.HOME)
          }}
          cursor="pointer"
          fontSize="3xl"
          src="../../../icons8-blog-96.png"
        />
        <Stack direction="row" spacing={4} align="center">
          <Button
            color={isActive(ROOTER.HOME)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.HOME)
            }}
          >
            Home
          </Button>
          <Button
            color={isActive(ROOTER.ARTICLES)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.ARTICLES)
            }}
          >
            Articles
          </Button>
          <Button
            color={isActive(ROOTER.FAVORITE)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.FAVORITE)
            }}
          >
            Favorite
            <Badge color="red">{!!favorite?.length && favorite?.length}</Badge>
          </Button>
          <Button
            color={isActive(ROOTER.FAQ)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.FAQ)
            }}
          >
            FAQ
          </Button>
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button
            color={isActive(ROOTER.CREATE)}
            colorScheme="telegram"
            variant="solid"
            onClick={() => {
              navigate(ROOTER.CREATE)
            }}
          >
            Create
          </Button>
          <Button
            color={isActive(ROOTER.SETTINGS)}
            colorScheme="telegram"
            variant="solid"
            onClick={() => {
              navigate(ROOTER.SETTINGS)
            }}
          >
            Settings
          </Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Header
