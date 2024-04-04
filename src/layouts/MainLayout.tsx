import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { Layout, theme } from 'antd'
import './MainLayout.less'
import { SideMenu } from '@/layouts/Menu'
import LayoutHeader from '@/layouts/Header'

const { Content } = Layout

const MainLayout: React.FC = ({ menuList }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} menuList={menuList} />
      <Layout>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
