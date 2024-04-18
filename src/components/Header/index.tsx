// @ts-nocheck

import {
  Badge,
  Box,
  Button,
  Image,
  Stack,
  Flex,
  IconButton,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROOTER } from '../../constants/router.js'
import { useGlobalContext } from '../../store/global/GlobalProvider.js'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'

function Header() {
  const navigate = useNavigate()
  const [disp, setDisp] = useState('none')

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
        <Box display={['none', 'none', 'flex', 'flex']} gap={18}>
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
              <Badge color="red">
                {!!favorite?.length && favorite?.length}
              </Badge>
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
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mt={2}
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => setDisp('flex')}
        />
      </Box>

      {/* responsive starts here */}
      <Flex
        w="100vw"
        h="100vh"
        pos="fixed"
        top="0"
        right="0"
        display={disp}
        flexDirection="column"
        bgColor="green.500"
        zIndex={20}
      >
        <Box display="flex" justifyContent="space-between">
          <Image
            mt={0.5}
            ml={12}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.HOME)
              setDisp('none')
            }}
            cursor="pointer"
            fontSize="3xl"
            src="../../../icons8-blog-96.png"
          />
          <IconButton
            mt={7}
            mr={10}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => setDisp('none')}
          />
        </Box>

        <Stack direction="column" spacing={4} align="center">
          <Button
            color={isActive(ROOTER.HOME)}
            colorScheme="telegram"
            variant="ghost"
            onClick={() => {
              navigate(ROOTER.HOME)
              setDisp('none')
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
              setDisp('none')
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
              setDisp('none')
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
              setDisp('none')
            }}
          >
            FAQ
          </Button>
          <Button
            color={isActive(ROOTER.CREATE)}
            colorScheme="telegram"
            variant="solid"
            onClick={() => {
              navigate(ROOTER.CREATE)
              setDisp('none')
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
              setDisp('none')
            }}
          >
            Settings
          </Button>
        </Stack>
      </Flex>
    </div>
  )
}

export default Header
