import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
// import pages
import GetInTouch from './pages/GetInTouch'
import AboutMe from './pages/AboutMe'
import Project from './pages/Project'
import Resume from './pages/Resume'
const router =createBrowserRouter([
    {
        path: '/',
        element: <GetInTouch></GetInTouch>
    },
    {
        path: '/about-me',
        element: <AboutMe></AboutMe>
    },
    {
        path: '/project',
        element: <Project></Project>
    },
    {
        path: '/resume',
        element: <Resume></Resume>
    }
])

export default function App(){
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}
