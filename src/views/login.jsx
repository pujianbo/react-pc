'use strict';
import React, {Component} from 'react'
import {hashHistory, Link} from 'react-router'

import {
  Input,
  Icon,
  Button,
  Form,
  message,
  Tabs,
  TabPane,
  Checkbox
} from 'antd';

import imgLogo from '../Img/Icon/logo.png'

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loading: false,
      saveStus: localStorage.userpwd
        ? true
        : false
    };
  }

  emitEmpty(name, e) {
    const vName = {};
    vName[name] = '';
    this.setState(vName);
    document.getElementsByName(name)[0].focus()
  }
  onChange(e) {
    const vName = {};
    vName[e.target.name] = e.target.value.replace(/\s/g, '');
    this.setState(vName);
  }
  //登录
  submit(e) {
    e.preventDefault();
    this.setState({loading: true});
    const {userName, password} = this.state;
    if (userName == '' || password == '') {
      message.warning(
        `请输入${userName
        ? '密码'
        : '用户名'}`);
      setTimeout(() => {
        this.setState({loading: false});
      }, 1000)
      return
    }
    if (this.state.saveStus) {
      localStorage.userpwd = this.state.password
    } else {
      delete localStorage.userpwd
    }
    localStorage.username = userName;
    hashHistory.push('/')
  }

  //记住密码
  savePwd(e) {
    this.setState({saveStus: e.target.checked})
  }

  render() {
    const {userName, password, loading, saveStus} = this.state;
    const suffixName = userName
      ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'userName')}/>
      : null;
    const suffixPwd = password
      ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'password')}/>
      : null;
    return (<div className='login clearfix'>
      <Form onSubmit={this.submit.bind(this)} className="loginbox">
        <div className='item logobox'>
          <img src={imgLogo}/>
          <span>康医生后端管理系统</span>
        </div>
        {/*<Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="账户登录" key="1">1</Tabs.TabPane>
          <Tabs.TabPane tab="咪咕OA认证" key="2">2</Tabs.TabPane>
        </Tabs>*/}
        <div className='item'>
          <Input placeholder="输入账户名" prefix={<Icon type = "user" />} suffix={suffixName} name='userName' value={userName} onChange={this.onChange.bind(this)} ref={node => this.userNameInput = node}/></div>
        <div className='item'>
          <Input placeholder="输入密码" type='password' prefix={<Icon type = "lock" />} suffix={suffixPwd} name='password' value={password} onChange={this.onChange.bind(this)} ref={node => this.userNameInput = node}/>
        </div>
        <div className='item clearfix'>
          <Checkbox className='left' checked={saveStus} onChange={this.savePwd.bind(this)}>记住密码</Checkbox>
          <Link className='right' to='/pwdfind'>找回密码</Link>
        </div>
        <div className='item'>
          <Button type="primary" htmlType="submit" style={{
              width: '100%'
            }} disabled={loading}>登 录</Button>
        </div>
      </Form>
    </div>)
  }
}
