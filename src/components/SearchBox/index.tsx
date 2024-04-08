// @ts-nocheck

import { Box, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

function SearchBox({ onSearch }) {
  const [inp, setInp] = useState('')

  return (
    <Box display="flex" justifyContent="center" gap={10}>
      <Input
        variant="filled"
        placeholder="Search by title"
        size="lg"
        w="50% "
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <Button
        // isLoading
        loadingText="searching"
        colorScheme="teal"
        variant="solid"
        size="lg"
        onClick={() => onSearch(inp)}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBox
