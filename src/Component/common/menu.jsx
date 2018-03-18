'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {Menu,Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '../../Scss/Common/menu.scss'

const routeArr=['/form','/datalist']

export default class menu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    if(routeArr[e.key])
      hashHistory.push(routeArr[e.key])
  }
  render() {
    return (<div className='menu clearfix'>
      <div className='menubox'>
        <Menu onClick={this.handleClick.bind(this)} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
          <SubMenu key="sub1" title={<span> <Icon type="team" /><span>医站管理</span></span>}>
            <Menu.Item key="0">表单提交</Menu.Item>
            <Menu.Item key="1">数据列表</Menu.Item>
            <Menu.Item key="2">医生列表</Menu.Item>
            <Menu.Item key="3">医生列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span> <Icon type="edit" /><span>笔记管理</span></span>}>
            <Menu.Item key="4">笔记分类</Menu.Item>
            <Menu.Item key="5">笔记配置</Menu.Item>
            <Menu.Item key="6">笔记配置</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span> <Icon type="line-chart" /><span>网站统计</span></span>}>
            <Menu.Item key="7">登录统计</Menu.Item>
            <Menu.Item key="8">购买统计</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span> <Icon type="database" /><span>数据分析</span></span>}>
            <Menu.Item key="9">用户新增分析</Menu.Item>
            <Menu.Item key="10">模块使用分析</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span> <Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="11">网站配置</Menu.Item>
            <Menu.Item key="12">角色管理</Menu.Item>
            <Menu.Item key="14">用户管理</Menu.Item>
            <Menu.Item key="13">系统帮助</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>)
  }
}
