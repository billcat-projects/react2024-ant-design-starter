import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import Fullscreen from './components/Fullscreen.tsx'
import AvatarIcon from './components/AvatarIcon.tsx'
import Theme from '@/layouts/admin/components/Theme.tsx'
import Language from '@/layouts/admin/components/Language.tsx'

const { Header } = Layout

export default function MyHeader({ collapsed, setCollapsed, colorBgContainer }) {
  return (
    <Header style={{ background: colorBgContainer }}>
      <div className="header-lf">
        <Button
          type="text"
          className="btn-on-header"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="header-ri">
        <Theme />
        <Language />
        <Fullscreen />
        <span className="username">Billcat</span>
        <AvatarIcon />
      </div>
    </Header>
  )
}
