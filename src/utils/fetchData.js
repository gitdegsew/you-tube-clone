import axios from "axios";

const BASE_URL="https://youtube-v31.p.rapidapi.com"

const options = {
    
    
    headers: {
      'X-RapidAPI-Key': '0b4fb2dbcbmsh6c8a9b6fa8109ddp134972jsn7af8e4636efd',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchData=async(url,params)=>{
    let result=null
    try {
      const response= await axios.get(`${BASE_URL}/${url}`,{...options,params});
      
      result=response.data
      
    } catch (error) {
      throw new Error(error.message)
    }
    return result
    // return new Promise(function(resolve,reject){
    //   setTimeout(()=>resolve(JSON.parse(localStorage.getItem('videos')) ),1000)
      

    // })

}