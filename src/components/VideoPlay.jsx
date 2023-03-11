import {Card,CardMedia,CardContent,Typography} from '@mui/material';
import React from 'react'
import  { useState } from 'react'

const VideoPlay = ({item}) => {
    // const [items,setItems]=useState(JSON.parse(localStorage.getItem('videos')))
    // const item=items[0]
  return (
    <Card  sx={{ width:{xs:"90vw",sm:'60vw'},height:540,backgroundColor:'black',pl:'20px' }} >
    <CardMedia 
    component='img'
    height='420'
    image={item.snippet.thumbnails.medium.url}
    />
    <CardContent
    sx={{display:"flex",flexDirection:"column",color:'white'}}
    >
        <Typography variant='body1' fontWeight='bold' fontSize='24px'>
            {item.snippet.title}
        </Typography>
       
    </CardContent>
   
</Card>
  )
}

export default VideoPlay