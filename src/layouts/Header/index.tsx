import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'
import { Button, Layout } from 'antd'
import Fullscreen from '@/layouts/Header/components/Fullscreen.tsx'
import AvatarIcon from '@/layouts/Header/components/AvatarIcon.tsx'

const { Header } = Layout

export default function LayoutHeader({collapsed, setCollapsed, colorBgContainer}) {
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
        <Fullscreen />
        <span className="username">Billcat</span>
        <AvatarIcon/>
      </div>
    </Header>
  )
}
