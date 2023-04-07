import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
// import ErrorPage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/Errorpage/Errorpage';

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/home',
//     element:<About></About>
//   },
//   {
//     path:'/about',
//     element:<div>this is default page</div>
//   },
//   {
//     path:'/',
//     element:<App></App>,
//     errorElement:<ErrorPage></ErrorPage>
//   },
// ])
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        element: <First />
      },
      {
        path: '/friends',
        element: <Friends />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/post/:postId',
        element: <PostDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
