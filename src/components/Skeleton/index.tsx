import { Box, Spinner } from '@chakra-ui/react'

function SpinnerLoad() {
  return (
    <Box justifyContent="center" display="flex" pt={10} mx="auto">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  )
}

export default SpinnerLoad
