import { Box, Typography } from '@mui/material'
import React from 'react'
import Videos from './Videos'

const SearchFeed = ({searchedItems,searchTerm}) => {
  return (
    <Box sx={{display:"flex",flexDirection:'column',mt:'60px'}}>
     <Box height='50px' width='100%'>
        <Typography variant='h2' color='white'>

        </Typography>
     </Box>
      <Videos items={searchedItems} width='23vw' />
    </Box>
  )
}

export default SearchFeed