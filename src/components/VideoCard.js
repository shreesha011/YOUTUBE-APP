import React from 'react'

const VideoCard = ({info}) => {

    // if (!info) {
    //     return null; // or some fallback content
    //   }

    //console.log(info);
    const { snippet, statistics } = info;

    // if (!snippet) {
    //     return null; // or handle the case where 'snippet' is missing
    //   }

    const { channelTitle, title, thumbnails } = snippet;


   

  return (
    <div className="p-2 m-2 w-80 shadow-lg">
    <img className="rounded-lg" alt="video" src={thumbnails.medium.url}/>

    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        {/* <li>{statistics.likeCount} Likes</li> */}
    </ul>

  </div>
  )
}


// HOC is a Function(AdVideocard)
export const AdVideoCard=({info}) => {
    return(
      <div className="p-1 m-1 border border-red-500">
        <VideoCard info={info}/>
      </div>
    )
}

export default VideoCard;