'user strict';
import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router'
import imgLogo from '../../Img/Icon/logo.png'

import '../../Scss/common/header.scss'

//网站头部条
export default class header extends Component {

  render() {
    return (<header className="header">
      <div className='logobox'>
        <span>康医生后端管理系统</span>
      </div>
      <div className='userinfo'>
        用户信息
      </div>
    </header>)
  }
}
