import { Card,Typography } from '@mui/material'
import React from 'react'

const ChanlalCard = ({item}) => {
  return (
    <Card  sx={{ width:{xs:"70vw",sm:'35vw',md:"25vw"},height:260,backgroundColor:'black', display:'flex',flexDirection:'column' ,textAlign:'center' }} >

        <img src={item.snippet.thumbnails.medium.url} alt='chanal image' />

        <Typography variant='subtitle2'  sx={{fontSize:'12px' ,color:'gray','&:hover':{color:'#cad9de',cursor:'pointer'}}}>
                    {item.snippet.channelTitle}
                </Typography>
        </Card>
  )
}

export default ChanlalCard