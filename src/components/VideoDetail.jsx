import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RelatedVieos from './RelatedVideos'
import VideoPlay from './VideoPlay'
import { fetchData } from "../utils/fetchData";
import ReactPlayer from 'react-player'

const VideoDetail = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  
  const [items,setItems]=useState(null)
  const [videoDetail,setVideoDetail]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    
    const fetchItems=async()=>{

      try {
       
        
        const data1=await fetchData('search',{relatedToVideoId:id,part:'snippet,id',maxResults:'52'})
        const data2=await fetchData('videos',{part:'contentDetails,snippet,statistics',id:id})
        console.log('after')
          setItems(data1.items)
          setVideoDetail(data2.items[0])
          console.log(data2)
          console.log(data1)
          setIsLoading(false)
          

       
        
       } catch (error) {
        setIsLoading(false)
        setError(error.message)
        
       }

    }
   
    

    
      fetchItems().catch((error)=>{
        console.log('error',error)
      })

   
  },[id]);
  return (
    
       
        <Box sx={{ display:'flex',flexDirection:{xs:'column',sm:'row'},rowGap:'50px',justifyContent:'space-between',mt:'60px',px:'50px'}}>
        {
        isLoading?(<p>
          loading
        </p>):
        !isLoading && error?<p>
          {error}
        </p>
        :
        <>
        <Box sx={{display:'flex',flexDirection:'column',rowGap:'10px'}}>
        <Box sx={{width:{xs:'90vw',md:'62vw'} ,height:{xs:'40vh',md:'80vh'}}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%' height='100%'  controls />
        </Box>
        <Typography variant='h5'fontSize='20px' fontWeight='bold'  >
        {videoDetail.snippet.title}
        </Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography  variant='subtitle2' onClick={()=>navigate(`/channel/${videoDetail.snippet.channelId}`)}  sx={{fontSize:'16px' ,color:'gray','&:hover':{color:'#cad9de',cursor:'pointer'} }}>
                    {videoDetail.snippet.channelTitle}
                </Typography>
          <Box sx={{display:'flex',columnGap:'17px'}}>
          <Typography  variant='subtitle2'   sx={{fontSize:'16px' ,color:'gray' }}>
                    {`${videoDetail.statistics.viewCount} views`}
                </Typography>
                <Typography  variant='subtitle2'  sx={{fontSize:'16px' ,color:'gray' }}>
                {`${videoDetail.statistics.likeCount} likes`}
                </Typography>

          </Box>
        </Box>

        </Box>
        <RelatedVieos items={items} /></>
      }


        </Box>
    
  )
}

export default VideoDetail