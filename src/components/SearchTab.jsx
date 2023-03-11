import { Search } from '@mui/icons-material'
import {Paper,IconButton} from "@mui/material"
import React from 'react'

const SearchTab = ({searchTerm,setSearchTerm,handleSearch}) => {
  return (
    
    <Paper
    component='form'
    onSubmit={(e)=>{
      e.preventDefault()
      console.log('trying to go')
      handleSearch(e)
    }}
    sx={{
      display:"flex",
      justifyContent:"space-between",
      width:"280px",
      borderRadius: 20,
      border: '1px solid #e3e3e3',
      pl: 2,
      boxShadow: 'none',
      mr: { sm: 5 },
      
      
    }}
  >
    <input
      type="text"
      
      placeholder='Search...'
      style={{borderStyle:"none",}}
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      
    />
    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
      <Search />
    </IconButton>
  </Paper>
    
  )
}

export default SearchTab