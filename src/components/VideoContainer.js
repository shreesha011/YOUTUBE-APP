import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
//import { logDOM } from '@testing-library/react';
import VideoCard,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  // Whatever we fetch the api data need to store in videos(usestate)
  const[videos,setVideos]=useState([]);

  useEffect(() =>{

    getVideos();

  },[]);

  const getVideos=async () =>{
       const data=await fetch(YOUTUBE_VIDEOS_API);

       const json=await data.json();
      //  console.log(json.items);
       setVideos(json.items);
   };

  return (
    <div className="flex flex-wrap">

     {/* Passing the props as info from VideoContainer file to AdVideoCard file */}
     {/* If the first element (videos[0]) in the videos array exists and is truthy, then render the AdVideoCard component with the info prop set to the value of videos[0]." */}
      {videos[0] && <AdVideoCard info={videos[0]} />}

          
      {/* Print all the list of youtube movies using map concept along with unique key Id */}
      {videos.map((video) => 
      <Link key={video.id} to={"/watch?v="+video.id}>
         <VideoCard  info={video} />
      </Link> 
       )}

      {/* Youtube api data will send to Videocard file as props to child component(checking for 1 data)*/}
       {/* <VideoCard info={videos[0]} /> */}
        </div>
  )
}

export default VideoContainer