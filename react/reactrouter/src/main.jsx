import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/Contactus/ContactUs'
import User from './components/User/User'
import Github,{githubLoader} from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {path:"",
//         element:<Home/>

//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'ContactUs',
//         element:<ContactUs/>
//       }
//     ]
//   }
// ]
//)
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path='user/:userid' element={<User />} />
        <Route loader={githubLoader} path='github' element={<Github />}/>
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
