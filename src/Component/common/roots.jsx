'user strict';
import React, {
    Component
} from 'react'

import Header from './header'
import Menu from './menu'

//定义一个公共的组件盒子
export default class roots extends Component {
    render() {
        return (
            <div className='content'>
              <Header />
              <Menu />
              <div className='publicbox'>{this.props.children}</div>
            </div>
        );
    }
}
