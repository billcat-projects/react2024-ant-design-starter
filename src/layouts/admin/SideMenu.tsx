import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import AIcon from '@/components/AIcon.tsx'
import { buildOpenKeys } from '@/utils/utils.ts'

const { Sider } = Layout

export function SideMenu({collapsed, menuList}) {
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
        const itemChildren: ItemType[] = []
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
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  useEffect(() => {
    // 去掉前导的 "/"
    const name = pathname.substring(1)
    // 如果还有/, 就是二级菜单
    if (name.includes('/')) {
      setSelectedKeys(name.split('/'))
    } else {
      // 一级菜单
      setSelectedKeys([pathname])
    }
  }, [pathname])

  const [openKeys, setOpenKeys] = useState<string[]>([])
  useEffect(() => {
    if (!collapsed) {
      // 设置过 openKeys 以后, Menu 就成了受控组件, 点击二级菜单的父菜单会就打不开了. 需要自己在 onOpenChange 中同步 openKeys 状态
      const openKeys = buildOpenKeys(pathname)
      setOpenKeys(openKeys)
    }
  }, [pathname, collapsed])

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        onClick={doNavigation}

        openKeys={openKeys}
        onOpenChange={setOpenKeys}

        items={items}
      />
    </Sider>
  )
}
