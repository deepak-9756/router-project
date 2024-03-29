import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

//loader s hover krne pr github pr useEffect s bhi tej fetch hota hai hover pr hi fecth start hojata hai data ko cache m rkh leta hai....

// path:"*" isme koi bhi path dala jo define nahi krta us case m ye chl jayga

// <Route index element={<Home />} />  default path hota hai 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userId' element={<User/>}/>
      <Route
      loader={gitHubInfoLoader} path="github" element={<Github/>}/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
