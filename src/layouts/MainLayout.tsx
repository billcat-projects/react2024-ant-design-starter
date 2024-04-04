import { Button } from 'antd'
import { useAuth } from '@/hooks/useAuth.tsx'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  const { logout } = useAuth()
  return (
    <>
      <header>
        This is head <Button onClick={logout}>logout</Button>
      </header>
      <Outlet/>
    </>
  )
}
