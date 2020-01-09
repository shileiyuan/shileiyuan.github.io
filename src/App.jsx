import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from '@/utils/history'
import { RequestProvider } from '@/context/RequestContext'
import request from '@/utils/request'
import MainLayout from '@/components/MainLayout'
import Demo from '@/pages/Demo'
import Issues from '@/pages/Issues'
import 'antd/dist/antd.less'
import '@/assets/styles/index.less'

if (process.env.NODE_ENV === 'mock') {
  require('@/mocks')
}

export default function App() {
  return (
    <RequestProvider value={request}>
      <Router history={history}>
        <MainLayout>
          <Switch>
            <Redirect from='/' to='/Demo' exact />
            <Route path='/Demo' component={Demo} />
            <Route path='/Issues' component={Issues} />
          </Switch>
        </MainLayout>
      </Router>
    </RequestProvider>
  )
}
