import { CallToAction } from "@mui/icons-material";
import { Stack,Button } from "@mui/material";
import { minWidth } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";


const SideBar = ({type,setType}) => {
    const selected="New";
  return (
    <Stack direction="row"  sx={{
        
        overflowX:{xs:"auto",sm:"visible"},
        textAlign:"center",
        gap:{xs:"50px",sm:"10px"},
       

        whiteSpace:"nowrap",
        flexDirection:{sm:"column"},
        justifyContent:"space-between",
        
        height:{sx:"auto",sm:'90%'},
        
        
        
        }} >
       {
        categories.map((category,index)=>(
            <Button key={index} sx={{ 
                display:"flex",
                
                justifyContent:"start",
                gap:"10px" ,
                mx:{sx:"30px",sm:"0"} ,
                color:"white",
                backgroundColor:category.name==type? "green":"none",
                borderRadius:"20px",
                minWidth:{xs:"max-content",sm:"auto",
              },
              '&:hover':{backgroundColor:category.name==type?'green':'grey',
              },
              
            }} 
                variant="text"
                
                
                
                onClick={()=>setType(category.name)}
               
                >
                
                <span style={{color:"red"}}>{category.icon} </span>
                

                <span>{category.name} </span>
                </Button>
        ))
       }

    </Stack>
  );
};

export default SideBar;
