import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import Users from './Users'
import Count from './Count'
import Refs from './Refs'
import Diagram from './Diagram'
import './index.less'

const { Sider, Content } = Layout

const menus = [
  {
    key: 'Users',
    Component: Users
  },
  {
    key: 'Count',
    Component: Count
  },
  {
    key: 'Refs',
    Component: Refs
  },
  {
    key: 'Diagram',
    Component: Diagram
  }
]

export default function Demo() {
  const { path } = useRouteMatch()
  const getPath = comPath => `${path}/${comPath}`
  return (
    <Layout className='demo'>
      <Sider className='demo-sider'>
        <Menu mode='inline'>
          {menus.map(menu => {
            const { key } = menu
            return (
              <Menu.Item key={key}>
                <Link to={getPath(key)}>{key}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Content className='demo-content'>
        <Switch>
          <Redirect from={path} to={getPath('Users')} exact />
          {menus.map(menu => {
            const { key, Component } = menu
            return <Route path={getPath(key)} key={key}><Component /></Route>
          })}
        </Switch>
      </Content>
    </Layout>
  )
}
