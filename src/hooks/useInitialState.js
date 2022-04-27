import {useState,useEffect} from 'react';



const useInitialState = (API_titles,API_photos) => {
    const [videos,setVideos] = useState([]);

    const FetchData = async () => {

      try{
        const response_title = await fetch(API_titles);
        const response_photo = await fetch(API_photos);
        const data_title = await response_photo.json();
        const data_photo = await response_title.json();

        setVideos(data_title,data_photo);
      }catch(error){
        throw new Error(error);
      }

      
    }

    useEffect(() => {
          //  fetch(API)
          //     .then(response => response.json())
          //     .then(data => setVideos(data))
              
              
        
            FetchData();
            
        },[]);
        
       


      //  console.log(videos.caption)

       

      //  for(var item of videos){
      //    console.log(item)
      //  }

        
        return videos;
        
    
}

export {useInitialState};