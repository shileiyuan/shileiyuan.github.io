import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import Users from './Users'
import Count from './Count'
import './index.less'

const { Sider, Content } = Layout

export default function Demo() {
  const { path } = useRouteMatch()
  const getPath = comPath => `${path}/${comPath}`
  return (
    <Layout className='demo'>
      <Sider className='demo-sider'>
        <Menu mode='inline'>
          <Menu.Item>
            <Link to={getPath('Users')}>Users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={getPath('Count')}>Count</Link>
          </Menu.Item>
          <Menu.Item>note1</Menu.Item>
          <Menu.Item>note1</Menu.Item>
        </Menu>
      </Sider>
      <Content className='demo-content'>
        <Switch>
          <Redirect from={path} to={getPath('Users')} exact />
          <Route path={getPath('Users')}><Users /></Route>
          <Route path={getPath('Count')}><Count /></Route>
        </Switch>
      </Content>
    </Layout>
  )
}
