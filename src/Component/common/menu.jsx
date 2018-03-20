'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '../../Scss/Common/menu.scss'

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
          <SubMenu key="team" title={<span> <Icon type="team" /><span>账户管理</span></span>}>
            <Menu.Item key="user/">普通账户</Menu.Item>
            <Menu.Item key="user/doc">医生账户</Menu.Item>
            <Menu.Item key="user/hosp">医院账户</Menu.Item>
            <Menu.Item key="user/admin">后台账户</Menu.Item>
          </SubMenu>
          <SubMenu key="sys" title={<span> <Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="config">网站配置</Menu.Item>
            <Menu.Item key="role">角色管理</Menu.Item>
            <Menu.Item key="users">用户管理</Menu.Item>
            <Menu.Item key="datalog">系统日志</Menu.Item>
          </SubMenu>
          <SubMenu key="statistics" title={<span> <Icon type="line-chart" /><span>网站统计</span></span>}>
            <Menu.Item key="7">登录统计</Menu.Item>
            <Menu.Item key="8">购买统计</Menu.Item>
          </SubMenu>
          <SubMenu key="data" title={<span> <Icon type="database" /><span>数据分析</span></span>}>
            <Menu.Item key="9">用户新增分析</Menu.Item>
            <Menu.Item key="10">模块使用分析</Menu.Item>
          </SubMenu>
          <SubMenu key="doctor" title={<span> <Icon type="star" /><span>模板使用</span></span>}>
            <Menu.Item key="form">表单提交</Menu.Item>
            <Menu.Item key="datalist">数据列表</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>)
  }
}
