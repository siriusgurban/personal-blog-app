// @ts-nocheck

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  SimpleGrid,
  Box,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  useToast,
} from '@chakra-ui/react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FiEdit3 } from 'react-icons/fi'
import useTitle from '../../hooks/useTitle'
import { ROOTER } from '../../constants/router'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import { getBlogs, rmvBlogId } from '../../services/article'
import { useState } from 'react'
import { shortText } from '../../utils/shortText'

function Settings() {
  const navigate = useNavigate()
  const toast = useToast()

  useTitle('Settings | PB')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data, setData } = useFetchData({
    fetchFn: () => getBlogs(),
  })

  const [currentItem, setCurrentItem] = useState()

  async function handleDelete(id: number) {
    try {
      await rmvBlogId(id)
      const newData = data.filter((item) => item?.id != id)
      setData(newData)
      toast({
        // title: 'Account created.',
        description: 'Your post deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
      onClose()
    } catch (error) {
      toast({
        // title: 'Account created.',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
      console.log(error)
    }
  }

  return (
    <SimpleGrid
      spacing={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={10}
      py={6}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="red.500">Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>for deleting {currentItem?.title}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleDelete(currentItem?.id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Heading mx="auto">Settings</Heading>

      <TableContainer>
        <Table variant="striped" colorScheme="telegram" size="lg">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th isNumeric>Edit Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              ?.filter((item) => item?.id > 95)
              ?.map((item) => {
                return (
                  <Tr key={item?.id + 'create'}>
                    <Td>{shortText(item?.title, 16)}</Td>
                    <Td>{shortText(item?.desciption, 24)}</Td>
                    <Td isNumeric>
                      <Box display="flex" justifyContent="flex-end">
                        <ButtonGroup>
                          <Button
                            bg="orange"
                            onClick={() =>
                              navigate(ROOTER.CREATE + `?blog_id=${item?.id}`)
                            }
                          >
                            <FiEdit3 />
                          </Button>
                          <Button
                            bg="red"
                            onClick={() => {
                              onOpen()
                              setCurrentItem(item)
                            }}
                          >
                            <RiDeleteBin5Line />
                          </Button>
                        </ButtonGroup>
                      </Box>
                    </Td>
                  </Tr>
                )
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th isNumeric>Edit Delete</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </SimpleGrid>
  )
}

export default Settings
