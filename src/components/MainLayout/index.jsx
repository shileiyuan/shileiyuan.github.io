import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

const { Header, Content } = Layout

export default function MainLayout(props) {
  return (
    <Layout className='main-layout'>
      <Header className='main-layout-header'>
        <div className='logo'>YSL</div>
        <Menu mode='horizontal'>
          <Menu.Item><Link to='/Demo'>Demo</Link></Menu.Item>
          <Menu.Item><Link to='/Issues'>Issues</Link></Menu.Item>
          <Menu.Item>note</Menu.Item>
        </Menu>
      </Header>
      <Content className='main-layout-content'>{props.children}</Content>
    </Layout>
  )
}
