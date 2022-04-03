import {useState,useEffect} from 'react';



const useInitialState = (API) => {
    const [videos,setVideos] = useState([]);

    // const FetchData = async () => {
    //     try{
    //         const response = await fetch('http://localhost:3000/initalState');
    //         const data = await response.json();
    //         setVideos(data);
    //     }catch(error){
    //         console.log(error(error))
    //     }
    // }

    useEffect(() => {
           fetch(API)
              .then(response => response.json())
              .then(data => setVideos(data))
        
            //FetchData();
            
        },[]);
        
        
        return videos;
        
    
}

export {useInitialState};