'use strict';
import React, {Component} from 'react'
import {Input, Icon} from 'antd';
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import '../../Scss/Common/menu.scss'

export default class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }
  emitEmpty() {
    this.userNameInput.focus();
    this.setState({userName: ''});
  }
  onChangeUserName() {
    this.setState({userName: e.target.value});
  }
  handleClick(e) {
    console.log('click ', e);
  }
  render() {
    const {userName} = this.state;
    const suffix = userName
      ? <Icon type="close-circle" onClick={this.emitEmpty}/>
      : null;
    return (<div className='menu clearfix'>
      <div className='menubox'>
        <Menu onClick={this.handleClick} style={{}} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
          <SubMenu key="sub1" title={<span> < Icon type = "mail" />< span >导航一</span></span>}>
            <MenuItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">二级菜单</Menu.Item>
              <Menu.Item key="2">二级菜单</Menu.Item>
              <Menu.Item key="1">二级菜单</Menu.Item>
              <Menu.Item key="2">二级菜单</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title="Item 2">
              <Menu.Item key="1">二级菜单</Menu.Item>
              <Menu.Item key="2">二级菜单</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span> < Icon type = "appstore" />< span >导航二</span></span>}>
            <Menu.Item key="1">二级菜单</Menu.Item>
            <Menu.Item key="2">二级菜单</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="1">三级菜单</Menu.Item>
              <Menu.Item key="2">三级菜单</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span> < Icon type = "setting" />< span >导航三</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>)
  }
}
