-Created Head and Body Component
-In App.js file imported Head and Body Component
-In the Head Component added logo and user Icon
-In the Body Component Added Sidebar file and  MainConatiner File
-In the Sidebar File Added Lit of items like Subscriptions,Home,Shorts
-In the Main Container file added buttonlist file and video conatiner file
-In the Watch Page file imported <LiveChat> && <CommentsContainer /> component
----------------------***********Features in Youtube Project****************-------------------------------

-Created Head component and Added humburger ,Youtube and user Icon logo
-Created Sidebar Component  and added list of unordered items like Home,Subscription,Videos,Live
-Added Redux js toolkit -->npm i @reduxjs/toolkit ----->npm i react-redux
-Created Store and appSlice Reducer
-In the Head Component dispatch an toggleMenuHandler to store (If the Store is true)
-In the Sidebar Component -->Fetched the Toggle menu(Like T or F) from Store based on the useSelector
-In the Main Container Added List of Buttons(Button.js)
-In the ButtonList Created a list of items(Like Video,Live buttons )and passed the data as props to child component(Button.js) so it will printed in the UI
-Created the Constant file Inside the Utils folder-->First we added the Google api key and then added Youtube_video_API(get Request)
-In the Video Container used the map concept to print all the list of Youtube videos and in the "Constant file added "&maxResults=50&regionCode=IN&" -->It will show the india region code videos as well as 50 films
-In the Videocard file paseed the info as props like channel title,title,views from VideoContainer file(Parent component)

-Created Another Page as WatchPage.js file So Once we clicked on youtube video it will navigate to WatchPage file using Router 
-Installed React Router Dom--> npm install react-router-dom
-In App.js file added router so it will navigate to Another Page(like WatchPage.js)
-Used Search Params hooks in watch page file to read and modify the query string in the URL for the current location

-------------------------******Note**********---------------------------
--Higher Order components is a function It will take original component(as VideoCard.js file) and retruns a new component(AdVideoCard.js file)
-HOC it takes an existing  component and modifies little and retruns an new component
-In real world scenario (HOC)-->If we want to do an small modification on the Videocard(Original component) that retruns a new component like adding videoad on the youtube
-On the Youtube Video channel adding AdVideoCard (Its nothing but small modification on original component)

-----------------------------************
-Debouncing: the search function is only called after the user has stopped typing for the specified debounce time, reducing the number of unnecessary calls and improving performance.

-Note#Evertime it should not call an api , whenevr i am writing in Search Bar if difference between 2 key strokes is >200ms make an API call

typing slow = 200ms 
typing fast = 30ms

Perfomance:

iphone pro max = 14 letter * 1000 = 140000
with debouncing= 3 API calls * 1000 = 3000
Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
if difference between 2 key strokes is >200ms make an API call

*Key press-i
-render the component
-calls the useEffect() everytime whenever the serachquery is changed
-It will start the timer(uisng setTimeout) --->make api call after 200ms

*Key press second variable as p -ip (If the second variable key is pressed within <200ms then decline the Api call)
-destroy the component(useEffect return method)
-render the component
-calls the useEffect() everytime whenever the serachquery is changed
-It will start the timer(uisng setTimeout) --->make api call after 200ms()

---------------****************
-Outlet in React Router DOM
   -Def# Outlet component is used to render the child routes within the parent route(Body.js)  dynamically with help of Router Page
   So here Body is the parent Component and [MainConatiner && watchPage are child routes]
   Outlet is used when we want to render a route dynamically based upon the path
   -RWA-->Once we clicked on video it will navigate to watch page--like "/watch"
     or if we give the link as "/" path it will show the Maincontainer Page(means Videos)
  ------------------------
  Example#App.js
  const appRouter=createBrowserRouter([{
    //If the path is / it will render the body component  
     path:"/",
     element:<Body/>

     children:[
    {
      // If the path is / it will navigate to mainContainer page(like Buttonlist,VideoContainer)
        path:"/",
        element:<MainContainer/>,
    },
    {
      //If the path is /watch it will navigate to Watchpage Page(Videocards)
      path:"/watch",
      element:<WatchPage/>
    }

    ]
  }])
  -------------------------
  Body.js file
  -------------------
  const Body = () => {
  return (
    <div className="flex">

    <Sidebar/>
    {/* <MainContainer/> */}

    {/* Outlet component is used to render the child routes within the parent route(Body.js)  dynamically with help of Router Page*/}
    <Outlet/>

   </div>
  )
}


---------------*******Advance Features In Youtube Project*********--------------------
-In the Constant file added The Youtube Search suggestion API
-In the Head Component Added The Youtube Search suggestion API  inside the useEffect after 200ms api will fetch using debouncing concepts for suggestion 
-----------------
[suggestions,setSuggestions]=useState([]);
-It will take the suggestion(suggestion is usestate) like [iphone,iphone14 pro] like this using map concepts and updated in the setSuggestion using useState
-----------------------*******************------------------
-Created CommnetsContainer page ,created commnetsdata like [name,text replies] and pass the data to another component(Comments) using props and those will be printed in the UI
-------------
-The CommentsContainer.js component receives data and passes it to the CommentsList component as props, allowing the child component to access and display the comments data.
-The CommentsList component uses the JavaScript map function to iterate over the comments data and render each comment, including the name, text, and replies.
-If a comment has replies, the CommentsList component uses recursion to render another CommentsList for those replies, enabling the display of nested comments of any depth.

---------------**********Wrapping Up Youtube Project************-----------------------------------------------
-In the Live chat Section (challenges)
		    -Get Data Live  --->Data layer
			-Update the UI  ---->UI layer

-How Can I handle the Data(Live Chat)
		        -Web Socket(will Establish the Connection instantly)-->Its a two way Connection like (Ui and Server) && its creates a Handshake
				    and we can quickly send the data from either side(like ui to server  or Server to UI)  && Its a Bidirectional
					 -Example of WebSocket is Tradding App(like Zerodha,Grow,Whatsapp)--->We need the data Instantly 
		        -API Polling-->Ui will fetch the data from Server  and we can see data is fetched or not after 1 sec or 10sec
				    && its a Uni Directional   && its an interval
				    -Example of Api Polling is Gmail && Circbuzz (bcz we dont need the message instantly after 10sec or 20 Sec also fine)
                    -If Still More live chat is comming but Still page is not freezing bcz in the top Section of messages after 100 0r 200 messages is showing top messges will be deleted
----------------------------------------
-->Note#Before doing api polling -->Do console.log("Api Polling"); --So it will show in the console
--->The push method is used to add one or more elements to the end of an array.
    -Example#let fruits = ["apple", "banana", "orange"];
	           // Adding a new element to the end of the array
                let newLength = fruits.push("grape");

            console.log(fruits);  // ["apple", "banana", "orange", "grape"]
            console.log(newLength);  // 4
--->the unshift method is used to add one or more elements to the beginning of an array
    -Example#let fruits = ["banana", "orange", "apple"];

       // Adding elements to the beginning of the array
          let newLength = fruits.unshift("grape", "kiwi");

           console.log(fruits);  // ["grape", "kiwi", "banana", "orange", "apple"]
           console.log(newLength);  // 5
---->Splice method
 --------------------------------------------------------------------------------
 -Inside Watch Page -->Imported <LiveChat> component  &&  <CommentsContainer> component
-Inside Livechat.js file imported <ChatMessage> component so chatmessage will shown in the UI
-Created Live Chat component-->
     --Example#<ChatMessage name="Akshay Saini" message="This is Namaste React live 🙏"/>

-Created ChatMessage component-->Added user icon ,name and message && name and message is used as props from Live chat component .So name and message will be Prinited in the UI

-Created the chatSlice file---> inside that addMessage reducer is  used and push an payload data in Store
    && we used splice concept to add 10 message after that 1 message will be deleted(So web page it will not freeze)
-In the Live chat componnet with the help of "usedispatch Hook"---message will updated in the Store 
-In the Live chat component we used "useselector hook--->Need to retieve the message from the Store
-In the LiveChat component we used "useEffect" hook---->Inside the useEfefct we used api polling means after  2msec chat meassage will shown continously using the Concept "SetTinterval"(It will executed Continously)
-Example# useEffect(()=>{
        const i=setInterval(() =>{
          // Api polling Data 
          console.log("API polling");

          dispatch(
            addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀",
          }))

        },1000);
        return()=>clearInterval(i);
  },[])
-In the helper.js file added "generateRandomName" function $$ "makeRandomMessage" function  $$ in the Live chat component it will dispatch the name and message to store uisng the bellow Code
        -Example# dispatch(
            addMessage({
            name:generateRandomName(),
            message:makeRandomMessage(20) + "🚀",
          }))
---------------------------*******************------------------------------------
**Why we need to use as useState locally for tying the <input type="text">

