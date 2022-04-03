import {useState,useEffect} from 'react';



const useInitialState = (API) => {
    const [videos,setVideos] = useState([]);

    // const FetchData = async () => {
    //     try{
    //         const response = await fetch(API,{
    //           method:"GET",
    //           mode:"no-cors",
    //           credentials:"include"
    //         });
    //         const data = await response.json();
    //         setVideos(data);
    //     }catch(error){
    //         throw new Error(error)
    //     }
    // }

    useEffect(() => {
           fetch(API,{
             mode:"no-cors",
             method:"GET",
             credentials:"include"
           })
              .then(response => response.json())
              .then(data => setVideos(data))
        
            //FetchData();
            
        },[]);
        
        
        return videos;
        
    
}

export {useInitialState};