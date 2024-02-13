import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const[liveMessage,setLiveMessage]=useState()

  const dispatch=useDispatch();

  const chatMessages=useSelector(store=>store.chat.messages);
    
  // Used Api Polling after 2msec livechat will be shown  
  // && setinterval means after every 2msec message will be shown and it will clear the interval
  useEffect(()=>{
        const i=setInterval(() =>{
          // Api polling Data 
          console.log("API polling");

          dispatch(
            addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀",
          }))

        },500);
        return()=>clearInterval(i);
  },[])

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Akshay Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-gray-400">Send</button>
      </form>
    </>
  );
};
export default LiveChat;

     
     