import MainLayout from '@/layouts/MainLayout.tsx'
import { Secret } from '@/pages/secret'
import Dashboard from '@/pages/dashboard/Dashboard.tsx'
import { Navigate } from 'react-router-dom'

export const protectedRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'secret', element: <Secret /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
