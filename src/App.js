// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  const appRouter=createBrowserRouter([{
    //If the path is / it will render the body component  
     path:"/",
     element:<Body/>,

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

  return (
   <Provider store={store}>

   <div>
      <Head/>
      <RouterProvider router={appRouter}/>

      {/* 
       *Head
       *Body
         *Sidebar
            *MenuItems
          *Main container 
              ButtonsList
              Video Container
              Video Card
      
      */}
    </div>

    </Provider>
  );
}

export default App;
