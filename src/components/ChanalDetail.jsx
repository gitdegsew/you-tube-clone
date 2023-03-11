import { Box, CardMedia, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import { fetchData } from "../utils/fetchData";

const ChanalDedtail = () => {
  const {channelId} =useParams()
  const [channelDetails,setChannelDetails]=useState(JSON.parse(localStorage.getItem('channelDetails')))
  const [channelVideos,setChannelVideos]=useState(JSON.parse(localStorage.getItem('channelVideos')))
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)

  useEffect(()=>{
    const fetchItems=async()=>{

      try {
       
        const data1=await fetchData('channels',{part:'snippet',id:channelId})
        const data2=await fetchData('search',{part:'snippet,id',channelId:channelId,maxResults:'52'})

          setChannelDetails(data1.items)
          setChannelVideos(data2.items)
          setIsLoading(false)
          localStorage.setItem('channelDetails',JSON.stringify(channelDetails))
          localStorage.setItem('channelDetails',JSON.stringify(channelVideos))
          console.log(data1.items[0].snippet.thumbnails)
          console.log(data2.items)

       
        
       } catch (error) {
        setIsLoading(false)
        setError(error.message)
        
       }

    }
   

    if(!channelDetails || !channelVideos){
      fetchItems().catch((error)=>{
        console.log('error',error)
      })

    }else{
      setIsLoading(false)
    }
    
  

  },[])
  return (

    
    <Box sx={{display:'flex',flexDirection:'column',rowGap:'150px'}}>

{
        isLoading?(<p>
          loading
        </p>):
        !isLoading && error?<p>
          {error}
        </p>
        :
        <><Box sx={{ position:'relative',  height: '200px',mb:'40px', width: '100%',  backgroundImage: 'linear-gradient(90deg,green,red)' }}>

            <Box  sx={{ position:'relative',top:'80%',left:'45%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center' ,textAlign:'center',width:{xs:'100px',md:'150px'} }}>
           <CardMedia
               
                component='img'
                image={channelDetails[0].snippet.thumbnails.default.url}
                height='100%'
                width='100px'
                sx={{borderRadius:"50%"}}
                
                />
                <Typography variant='body1'>
                  {channelDetails[0].snippet.title}
                </Typography>
                <Typography variant='subtitle2' sx={{color:'gray'}}>
                  {channelDetails[0].statistics.subscriberCount} subscribers
                </Typography>

                {/* <img src={channelDetails[0].snippet.thumbnails.default.url} alt="" /> */}
           </Box>
              

            </Box>
           
            <Videos items={channelVideos} width="23vw" /></>
       
      }
      
    </Box>
    
  )
}

export default ChanalDedtail