import { Drawer, Divider, Switch } from 'antd'
import { useState } from 'react'
import { FireOutlined, SettingOutlined } from '@ant-design/icons'

const Theme = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <i
        className="icon-style iconfont icon-zhuti"
        onClick={() => {
          setVisible(true)
        }}
      ></i>
      <Drawer
        title="Layout"
        closable={false}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        width={320}
      >
        {/* Global Theme */}
        <Divider className="divider">
          <FireOutlined />
          Global Theme
        </Divider>
        <div className="theme-item">
          <span>Dark mode</span>
        </div>
        <div className="theme-item">
          <span>Gray mode</span>
          <Switch
          />
        </div>
        <div className="theme-item">
          <span>Color Weakness Mode</span>
          <Switch />
        </div>
        <br />
        {/* UI Settings */}
        <Divider className="divider">
          <SettingOutlined />
          UI Settings
        </Divider>
        <div className="theme-item">
          <span>Collapse Menu</span>
          <Switch />
        </div>
      </Drawer>
    </>
  )
}

export default Theme
