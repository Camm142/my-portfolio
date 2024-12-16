import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
// import your pages
import GetInTouch from './pages/GetInTouch';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Resume from './pages/Resume';
import { LanguageProvider } from './service/LanguageContext';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <GetInTouch />,
    },
    {
      path: '/about-me',
      element: <AboutMe />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
  ],
  {
   basename: '/my-portfolio', //Ensure the basename matches your GitHub Pages URL
  }
);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
);
}
