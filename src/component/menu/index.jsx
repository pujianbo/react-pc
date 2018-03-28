'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import './index.scss'

const defaultKey=location.hash.split('?')[0].toLocaleLowerCase().slice(2)

export default class menu extends Component {

  handleClick(e) {
      localStorage.syskeyPath=e.keyPath[1]
      hashHistory.push(`/${e.key}`)
  }
  render() {
    return (<div className='menu clearfix'>
      <div className='menubox'>
        <Menu onClick={this.handleClick.bind(this)} defaultOpenKeys={[localStorage.syskeyPath]} defaultSelectedKeys={[defaultKey]} mode="inline">
          <SubMenu key="account" title={<span> <Icon type="key" /><span>账户管理</span></span>}>
            <Menu.Item key="account/">普通账户</Menu.Item>
            <Menu.Item key="account/doc">医生账户</Menu.Item>
            <Menu.Item key="account/hosp">医院账户</Menu.Item>
            <Menu.Item key="account/admin">后台账户</Menu.Item>
          </SubMenu>
          <SubMenu key="team" title={<span> <Icon type="team" /><span>医院管理</span></span>}>
            <Menu.Item key="account/hospdetail/1/23">医院信息</Menu.Item>
            <Menu.Item key="team/group">分组管理</Menu.Item>
            <Menu.Item key="team/person">人员管理</Menu.Item>
          </SubMenu>
          <SubMenu key="data" title={<span> <Icon type="database" /><span>数据库管理</span></span>}>
            <Menu.Item key="9">数据库备份</Menu.Item>
            <Menu.Item key="10">数据库重置</Menu.Item>
          </SubMenu>
          <SubMenu key="statistics" title={<span> <Icon type="line-chart" /><span>网站统计</span></span>}>
            <Menu.Item key="7">登录统计</Menu.Item>
            <Menu.Item key="8">购买统计</Menu.Item>
          </SubMenu>
          <SubMenu key="system" title={<span> <Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="system/config">系统配置</Menu.Item>
            <Menu.Item key="system/version">版本管理</Menu.Item>
            <Menu.Item key="system/datalog">系统日志</Menu.Item>
            <Menu.Item key="system/feedback">反馈信息</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>)
  }
}
