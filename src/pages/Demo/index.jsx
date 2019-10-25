import React from 'react'
import { Layout, Menu } from 'antd'
import './index.less'

const { Sider, Content } = Layout

export default function Demo() {
  return (
    <Layout className='demo'>
      <Sider className='demo-sider'>
        <Menu mode='inline'>
          <Menu.Item>note1</Menu.Item>
          <Menu.Item>note1</Menu.Item>
          <Menu.Item>note1</Menu.Item>
        </Menu>
      </Sider>
      <Content className='demo-content'>Content</Content>
    </Layout>
  )
}
