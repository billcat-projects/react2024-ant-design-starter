import { useRoutes } from 'react-router-dom'

import { publicRoutes, adminRoutes } from './routes.tsx'
import { useAuth } from '@/hooks/useAuth.tsx'

export const Router = () => {
  const auth = useAuth()

  const routes = auth.user ? adminRoutes : publicRoutes

  return useRoutes(routes)
}
