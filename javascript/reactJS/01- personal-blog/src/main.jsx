import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import GuestLayout from './layouts/Guest.jsx'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/Error.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import LearningReact from './pages/LearningReact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/my-projects',
        element: <ProjectPage />,
      },
      {
        path: '/LearningReact',
        element: <LearningReact />,
      },
    ],
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
