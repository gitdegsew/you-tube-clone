import { Box } from "@mui/material";
import { useEffect,useState } from "react";

import VideoCard from "./VideoCard";

const Videos = ({items,width}) => {
 

  return (
    
      <Box
      display="flex"
      flexDirection="row"
      sx={{flexWrap:"wrap",rowGap:"40px",m:"10px",justifyContent:"space-between",pl:{xs:"7%",sm:0}}}
      
      >
        {
          items.map((item,index)=><VideoCard key={index} item={item} width={width} />)
        }
      </Box>
    
  )
}

export default Videos