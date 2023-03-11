import {BrowserRouter ,Routes,Route, useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';
import NavBar from './components/NavBar';
import SearchFeed from './components/SearchFeed';
import ChanalDetail from './components/ChanalDetail';
import Feeds from './components/Feeds';
import VideoDetail from './components/VideoDetail';
import { useEffect, useState } from 'react';
import { fetchData } from './utils/fetchData';

const  App=()=>{
  const navigate=useNavigate()
  const [searchTerm,setSearchTerm] =useState('')
  const [searchedItems,setSearchedItems] =useState(null)

 const handleSearch=async(e)=>{
  console.log('handling search')
  e.preventDefault()
  console.log('handling search')
  try {
    const data=await fetchData('search',{q:searchTerm,part:'snippet,id',maxResults:'52'})
    setSearchedItems(data.items)
    navigate(`/search/${searchTerm}`)
  } catch (error) {
    
  }

 }

  return (
<Box  sx={{ backgroundColor:'#000' }}>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Feeds/>} />
        <Route path ="/video/:id" element={<VideoDetail/>} />
        <Route path ="/channel/:channelId" element={<ChanalDetail/>} />
        <Route path ="/search/:searchTerm" element={<SearchFeed searchTerm={searchTerm} searchedItems={searchedItems} />} />
      </Routes>
    </Box>
    
  )

  }
export default App;
