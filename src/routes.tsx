import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { LoginPage } from './pages/login'
import { ProfilePage } from './pages/profile'

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <LoginPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
