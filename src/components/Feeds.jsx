import React, { useState,useEffect } from 'react'
import { Box,Stack } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

import { fetchData } from "../utils/fetchData";

const Feeds = () => {
  const [type,setType]=useState('New')
  const [items,setItems]=useState(null)
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(null)
  
  // JSON.parse(localStorage.getItem('videos')) 
  useEffect(()=>{
    
    
      
      const fetchItems=async()=>{

        try {
         
          const data=await fetchData('search',{q:type,part:'snippet,id',maxResults:'52'})
  
            setItems(data.items)
            setIsLoading(false)
            localStorage.setItem('videos',JSON.stringify(items))
  
         
          
         } catch (error) {
          setIsLoading(false)
          setError(error.message)
          
         }

      }
     
      
  
      
        fetchItems().catch((error)=>{
          console.log('error',error)
        })

    
     
    
    
   
  },[type])


  return (
    <Stack
    display="flex"
    
    
    
    sx={{flexDirection:{sm:"row"},px:"5px",rowGap:"10px",justifyContent:'space-around',mt:'80px',}}
    >
      {
        isLoading?(<p>
          loading
        </p>):
        !isLoading && error?<p>
          {error}
        </p>
        :
        <><SideBar type={type} setType={setType} />
        <Videos items={items} width="25vw" /></>
      }

    </Stack>
  )
}

export default Feeds