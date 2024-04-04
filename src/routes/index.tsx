import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import { useAuth } from '@/hooks/useAuth.tsx'

export const Router = () => {
  const auth = useAuth()

  const routes = auth.user ? protectedRoutes : publicRoutes
  const commonRoutes = [{ path: '*', element: <div>not found</div> }]

  return useRoutes([...routes, ...commonRoutes])
}
