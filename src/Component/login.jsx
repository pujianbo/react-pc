'use strict';
import React, {Component} from 'react'
import {Input, Icon} from 'antd';
import '../Scss/login.scss'

export default class login extends Component {
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
  render() {
    const {userName} = this.state;
    const suffix = userName
      ? <Icon type="close-circle" onClick={this.emitEmpty}/>
      : null;
    return (<div className='login clearfix'>
    <div className='loginbox'>
      <Input placeholder="Enter your username" prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} suffix={suffix} value={userName} onChange={this.onChangeUserName} ref={node => this.userNameInput = node}/>
      <Input placeholder="Enter your username" prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} suffix={suffix} value={userName} onChange={this.onChangeUserName} ref={node => this.userNameInput = node}/>
    </div>

    </div>)
  }
}
