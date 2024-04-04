import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import './MainLayout.css'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import AIcon from '@/components/AIcon.tsx'

const { Header, Sider, Content } = Layout

const MainLayout: React.FC = ({ menuList }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const navigate = useNavigate()
  function doNavigation({ keyPath }) {
    // 直接用 routes 里的 path 作为  menu items 中的 key (避免额外维护一套 key值)
    const routePath = keyPath.reverse().join('/')
    navigate(routePath)
  }

  const items: ItemType[] = []
  menuList.forEach(route => {
    if (route.meta) {
      const item = {
        key: route.path,
        icon: <AIcon name={route.meta.icon} />,
        label: route.meta.label
      }

      if (route.children && route.children.length) {
        const itemChildren: ItemType[]  = []
        route.children.forEach(route => {
          if (route.meta) {
            itemChildren.push({
              key: route.path,
              icon: <AIcon name={route.meta.icon} />,
              label: route.meta.label
            })
          }
        })
        item.children = itemChildren
      }

      items.push(item)
    }
  })

  // 刷新页面菜单保持高亮
  let { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
  useEffect(() => {
    // 去掉前导的 "/"
    pathname = pathname.substring(1)

    // 如果还有/, 就是二级菜单
    if (pathname.includes("/")) {
      setSelectedKeys(pathname.split("/"))
    } else {
      // 一级菜单
      setSelectedKeys(["/" + pathname])
    }
  },[pathname])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={doNavigation}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
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
