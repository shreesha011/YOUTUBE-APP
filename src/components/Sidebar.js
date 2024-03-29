import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // We need to Fetch the Toggle menu(Like T or F) from Store based on the useSelector
   const isMenuOpen=useSelector(store=>store.app.isMenuOpen);

  //  Early Return pattern
   if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">

     <ul className="font-bold">

      {/* If we clicked on home page it will navigate to main page using <link> */}
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

       <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

       <h1 className="font-bold pt-5">Watch Later</h1>
       <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
       </ul>

    </div>
  )
}

export default Sidebar