import { Box } from '@mui/material'
import React, { useState } from 'react'
import VideoCard from "./VideoCard";

const RelatedVideos = ({items}) => {
    // const [items,setItems]=useState(JSON.parse(localStorage.getItem('videos')))
  return (
   <Box id="some"  sx={{display:'flex',flexDirection:'column',maxHeight:'600px', overflowY:'auto'}} >
    {
          items.map((item,index)=><VideoCard key={index} item={item}  width="23vw" />)
        }
   </Box>
  )
}

export default RelatedVideos