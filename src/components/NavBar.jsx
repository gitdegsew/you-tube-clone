import {Box, Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {logo} from '../utils/constants';
import SearchTab from './SearchTab';

const NavBar = ({searchTerm,setSearchTerm,handleSearch}) =>{
  const navigate =useNavigate()
 
  return (
    <Stack display='flex'  flexDirection="row" justifyContent="space-between" width='100%' padding="10px" position='fixed' top='0' left='0' backgroundColor='black' zIndex='10' >

    <Box sx={{'&:hover':{cursor:'pointer'}}} onClick={()=>navigate('/')}>
    <img src={logo} alt="logo" height="40px" width="40px"  />
    </Box>
    <SearchTab searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
  </Stack>
  );
}
  
  
   
  


export default NavBar