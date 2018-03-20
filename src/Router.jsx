import React, {Component} from 'react';
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory,
  hashHistory
} from 'react-router';

const history = process.env.NODE_ENV !== 'production'
  ? browserHistory
  : hashHistory;

// 组件部分
// 公共组件
const roots = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/Common/roots').default)
  }, 'roots')
}
const error = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/Common/error').default)
  }, 'error')
}
const form = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/form').default)
  }, 'form')
}
const datalist = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/datalist').default)
  }, 'datalist')
}
// 测试组件
const test = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test').default)
  }, 'test')
}
const test2 = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test2').default)
  }, 'test2')
}
const test3 = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test3').default)
  }, 'test3')
}
// 页面组件
const index = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/index').default)
  }, 'index')
}
const login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/login').default)
  }, 'login')
}
const pwdfind = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/pwdfind').default)
  }, 'pwdfind')
}
const config = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/config').default)
  }, 'config')
}
const datalog = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/datalog').default)
  }, 'datalog')
}
const role = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/role').default)
  }, 'role')
}
const user = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/user/index').default)
  }, 'user')
}
const userdoc = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/user/doc').default)
  }, 'userdoc')
}
const userhosp = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/user/hosp').default)
  }, 'userhosp')
}
const useradmin = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/user/admin').default)
  }, 'useradmin')
}
const userdetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/user/detail').default)
  }, 'userdetail')
}

const RouteConfig = (<Router history={hashHistory}>
  <Route path='/login' getComponent={login}/>
  <Route path='/pwdfind' getComponent={pwdfind}/>
  <Route path='/' getComponent={roots}>
    <IndexRoute getComponent={index}/>
    <Route path='user/'>
      <IndexRoute getComponent={user}/>
      <Route path='doc' getComponent={userdoc}/>
      <Route path='hosp' getComponent={userhosp}/>
      <Route path='admin' getComponent={useradmin}/>
      <Route path='detail' getComponent={userdetail}/>
    </Route>

    <Route path='config' getComponent={config}/>
    <Route path='datalog' getComponent={datalog}/>
    <Route path='role' getComponent={role}/>

    <Route path='form' getComponent={form}/>
    <Route path='datalist' getComponent={datalist}/>

    <Route path='test' getComponent={test}/>
    <Route path='test2' getComponent={test2}/>
    <Route path='test3' getComponent={test3}/>
    <Route path='error' getComponent={error}/>
    <Route path='*' getComponent={error}/>
  </Route>
</Router>)
export default RouteConfig;
