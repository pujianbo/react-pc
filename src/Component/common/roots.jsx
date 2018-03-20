'user strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'

import Header from './header'
import Menu from './menu'

//定义一个公共的组件盒子
export default class roots extends Component {

  componentWillMount() {
    if (!localStorage.username)
      hashHistory.push('/login')
  }
  render() {
    return (<div className='content'>
      <Header/>
      <Menu/>
      <div className='publicbox'>{this.props.children}</div>
    </div>);
  }
}
