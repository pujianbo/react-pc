'user strict';
import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router'
import {
  Menu,
  Dropdown,
  Icon,
  Form,
  Modal,
  Alert,
  Input,
  Button
} from 'antd';
import imgLogo from '../../img/icon/logo.png'

import './index.scss'

//网站头部条
export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false
    }
    this.menu = (<Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" onClick={this.pwdEdit.bind(this)}>修改密码</a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" onClick={this.loginOut.bind(this)}>退出登录</a>
      </Menu.Item>
    </Menu>);
  }
  //提交修改
  handleOk() {
    this.setState({loading: true});
    const pwd = this.refs.pwd.value;
    const pwdcon = this.refs.pwd.value;
    if (pwd == '' || pwdcon == '') {
      this.setState({msg: '请填写密码和确认密码'});
      return
    } else if (pwd == pwdcon) {
      this.setState({msg: '两次密码不一致'});
      return
    }
    this.setState({loading: false, visible: false});
  }
  handleCancel() {
    this.setState({visible: false})
  }

  //密码修改
  pwdEdit() {
    this.setState({visible: true})
  }
  //退出登录
  loginOut() {
    // localStorage.clear();
    hashHistory.push('/login')
  }

  render() {
    const {visible, loading, msg} = this.state
    return (<header className="header">
      <div className='logobox'>
        <span>康医生后端管理系统</span>
      </div>
      <div className='userinfo'>
        <Dropdown overlay={this.menu}>
          <a className="ant-dropdown-link">
            {localStorage.username}
            <Icon type="down"/>
          </a>
        </Dropdown>
      </div>
      <Modal visible={visible} title="修改密码" onCancel={this.handleCancel.bind(this)} footer={[
          <Button key="back" onClick={this.handleCancel.bind(this)}>取消</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
            确定
          </Button>
        ]}>
        <Form onSubmit={this.handleOk.bind(this)}>
          {
            msg
              ? <Alert message="错误提示" description={msg} type="error"/>
              : null
          }
          <div style={{
              marginTop: '20px'
            }}>
            <Input placeholder="输入新密码" ref='pwd'/>
          </div>
          <div style={{
              marginTop: '20px'
            }}>
            <Input placeholder="输入确认密码" ref='pwdcon'/>
          </div>
        </Form>
      </Modal>
    </header>)
  }
}
