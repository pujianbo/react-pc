'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'

import {Input, Icon, Button, Form} from 'antd';
import '../Scss/login.scss'

import imgLogo from '../Img/Icon/logo.png'

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loading: false
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
    vName[e.target.name] = e.target.value;
    this.setState(vName);
  }
  //登录
  submit() {
    this.setState({loading: true});
    sessionStorage.username='admin';
    hashHistory.push('/')
  }

  render() {
    const {userName, password, loading} = this.state;
    const suffixName = userName
      ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'userName')}/>
      : null;
    const suffixPwd = password
      ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this, 'password')}/>
      : null;
    return (<div className='login clearfix'>
      <Form onSubmit={this.submit.bind(this)} className="loginbox">
        <div className='item logobox'>
          <img src={imgLogo} /><span>康医生后端管理系统</span>
        </div>
        <div className='item'>
          <Input placeholder="输入账户名" prefix={<Icon type = "user" />} suffix={suffixName} name='userName' value={userName} onChange={this.onChange.bind(this)} ref={node => this.userNameInput = node}/></div>
        <div className='item'>
          <Input placeholder="输入密码" type='password' prefix={<Icon type = "lock" />} suffix={suffixPwd} name='password' value={password} onChange={this.onChange.bind(this)} ref={node => this.userNameInput = node}/>
        </div>
        <div className='item'>
          <Button type="primary" htmlType="submit" style={{
              width: '100%'
            }} loading={loading}>登 录</Button>
        </div>
      </Form>
    </div>)
  }
}
