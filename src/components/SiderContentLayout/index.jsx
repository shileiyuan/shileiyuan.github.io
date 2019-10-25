import React from 'react'
import { Layout } from 'antd'

const { Sider, Content } = Layout

export default function SiderContentLayout(props) {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
  )
}
