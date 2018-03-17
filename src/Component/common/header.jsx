'user strict';
import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router'
import {Menu, Dropdown, Icon} from 'antd';
import imgLogo from '../../Img/Icon/logo.png'

import '../../Scss/common/header.scss'
const menu = (<Menu>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer">用户信息</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer">修改密码</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" rel="noopener noreferrer">退出登录</a>
  </Menu.Item>
</Menu>);

//网站头部条
export default class header extends Component {

  render() {
    return (<header className="header">
      <div className='logobox'>
        <span>康医生后端管理系统</span>
      </div>
      <div className='userinfo'>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link">
            admin
            <Icon type="down"/>
          </a>
        </Dropdown>
      </div>
    </header>)
  }
}
