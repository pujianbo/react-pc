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
// 路由组件
const index = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/index').default)
  }, 'index')
}
// 页面组件
const login = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/login').default)
  }, 'login')
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


const RouteConfig = (<Router history={hashHistory}>
  <Route path='/login' getComponent={login}/>
  <Route path='/' getComponent={roots}>
    <IndexRoute getComponent={index}/>
    <Route path='/form' getComponent={form}/>
    <Route path='/datalist' getComponent={datalist}/>

    <Route path='/test' getComponent={test}/>
    <Route path='/test2' getComponent={test2}/>
    <Route path='/test3' getComponent={test3}/>
    <Route path='/error' getComponent={error}/>
    <Route path='*' getComponent={error}/>
  </Route>
</Router>)
export default RouteConfig;
