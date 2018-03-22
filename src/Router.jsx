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

//system moudle
const config = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/system/config').default)
  }, 'config')
}
const datalog = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/system/datalog').default)
  }, 'datalog')
}
const version = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/system/version').default)
  }, 'version')
}
const feedback = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/system/feedback').default)
  }, 'feedback')
}

//team moudle
const person = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/team/person').default)
  }, 'person')
}
const unit = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/team/unit').default)
  }, 'unit')
}
const group = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/team/group').default)
  }, 'group')
}

//account moudle
const account = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/index').default)
  }, 'account')
}
const accountdoc = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/doc').default)
  }, 'accountdoc')
}
const accounthosp = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/hosp').default)
  }, 'accounthosp')
}
const accountadmin = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/admin').default)
  }, 'accountadmin')
}
const accountdetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/detail').default)
  }, 'accountdetail')
}
const hospdetail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/hospdetail').default)
  }, 'hospdetail')
}
const hospedit = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./views/account/hospedit').default)
  }, 'hospedit')
}

const RouteConfig = (<Router history={hashHistory}>
  <Route path='/login' getComponent={login}/>
  <Route path='/pwdfind' getComponent={pwdfind}/>
  <Route path='/' getComponent={roots}>
    <IndexRoute getComponent={index}/>

    <Route path='account/'>
      <IndexRoute getComponent={account}/>
      <Route path='doc' getComponent={accountdoc}/>
      <Route path='hosp' getComponent={accounthosp}/>
      <Route path='admin' getComponent={accountadmin}/>
      <Route path='detail/:type/:id' getComponent={accountdetail}/>
      <Route path='hospdetail/:type/:id' getComponent={hospdetail}/>
      <Route path='hospedit(/:id)' getComponent={hospedit}/>
    </Route>

    <Route path='system/'>
      <IndexRoute getComponent={config}/>
      <Route path='config' getComponent={config}/>
      <Route path='version' getComponent={version}/>
      <Route path='feedback' getComponent={feedback}/>
      <Route path='datalog' getComponent={datalog}/>
    </Route>

    <Route path='team/'>
      <IndexRoute getComponent={unit}/>
      <Route path='unit' getComponent={unit}/>
      <Route path='person(/:groupid)' getComponent={person}/>
      <Route path='group' getComponent={group}/>
    </Route>

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
