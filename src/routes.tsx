import { createBrowserRouter } from 'react-router-dom'

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
])
