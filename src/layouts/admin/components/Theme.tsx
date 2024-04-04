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
        title="布局设置"
        closable={false}
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
        width={320}
      >
        {/* 全局主题 */}
        <Divider className="divider">
          <FireOutlined />
          全局主题
        </Divider>
        <div className="theme-item">
          <span>暗黑模式</span>
        </div>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch
          />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch />
        </div>
        <br />
        {/* 界面设置 */}
        <Divider className="divider">
          <SettingOutlined />
          界面设置
        </Divider>
        <div className="theme-item">
          <span>折叠菜单</span>
          <Switch />
        </div>
      </Drawer>
    </>
  )
}

export default Theme
