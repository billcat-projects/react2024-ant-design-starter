import { Secret } from '@/pages/secret'
import Dashboard from '@/pages/dashboard/Dashboard.tsx'
import { Navigate, Outlet } from 'react-router-dom'
import IconsPage from '@/pages/showcase/icons'
import FormsPage from '@/pages/showcase/forms'
import AdminLayout from '@/layouts/admin/Layout.tsx'

export const menuList = [
  {
    path: '/', element: <Dashboard />,
    meta: {
      requiresAuth: true,
      label: 'Dashboard',
      icon: 'DashboardOutlined'
    }
  },
  {
    path: '/secret', element: <Secret />,
    meta: {
      requiresAuth: true,
      label: 'Secrets',
      icon: 'ShoppingOutlined'
    }
  },
  {
    path: '/showcase', element: <Outlet />,
    meta: {
      requiresAuth: true,
      label: 'ShowCase',
      icon: 'AntDesignOutlined'
    },
    children: [
      {
        path: 'icons', element: <IconsPage />,
        meta: {
          requiresAuth: true,
          label: 'Icons',
          icon: 'FormatPainterOutlined'
        }
      },
      {
        path: 'forms', element: <FormsPage />,
        meta: {
          requiresAuth: true,
          label: 'Forms',
          icon: 'FormOutlined'
        }
      },
    ]
  }
]

export const protectedRoutes = [
  {
    path: '',
    element: <AdminLayout menuList={menuList} />,
    children: [
      ...menuList,
      { path: '*', element: <Navigate to="." /> }
    ],
  },
]
