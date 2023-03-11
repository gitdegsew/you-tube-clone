import {Card,CardMedia,CardContent,Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';



const VideoCard = ({item,width}) => {
    const channelClicked=false
    const url=channelClicked? `/channel/${item.snippet.channelId}`:`/video/${item.id.videoId}`
    const navigate=useNavigate()
  return (
    <div>
        <Card onClick={()=>navigate( url)} sx={{ width:{xs:"85vw",sm:'35vw',md:width},height:260,backgroundColor:'black' ,'&:hover':{cursor:'pointer'} }} >
            <CardMedia 
            component='img'
            height='160'
            image={item.snippet.thumbnails.medium.url}
            />
            <CardContent
            sx={{display:"flex",flexDirection:"column", maxHeight:200,color:'white'}}
            >
                <Typography variant='body1' fontWeight='bold' fontSize='14px'>
                    {item.snippet.title}
                </Typography>
                <Typography  variant='subtitle2' onClick={()=>channelClicked=true}  sx={{fontSize:'12px' ,color:'gray','&:hover':{color:'#cad9de',cursor:'pointer'} }}>
                    {item.snippet.channelTitle}
                </Typography>
            </CardContent>
           
        </Card>
    </div>
  )
}

export default VideoCard