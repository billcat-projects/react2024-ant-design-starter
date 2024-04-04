import { Login } from '@/pages/user/login.tsx'
import { Navigate } from 'react-router-dom'

export const publicRoutes = [
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '*',
    element: <Navigate to="/login"/>,
  },
];
