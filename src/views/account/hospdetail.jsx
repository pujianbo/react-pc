import React, {Component} from 'react'
import {Link} from 'react-router'
import {Avatar, Tag, Icon} from 'antd';

import imgZhizhao from '../../img/other/zhizhao.jpg'
import imgYiyuan from '../../img/other/yiyuan.jpg'

export default class datalist extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div className='tbdetail'>
      <a className='block' target='_blank'>
        <img src={imgYiyuan} />
      </a>
      <div className='tbbar'>基本信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td>姓名：</td>
          <td>李琛</td>
        </tr>
        <tr>
          <td>医院名称：</td>
          <td>北京市二医院</td>
        </tr>
        <tr>
          <td>医院地址：</td>
          <td>北京 北京市 西城区 宣内大街油坊胡同36号</td>
        </tr>
        <tr>
          <td>医院类型：</td>
          <td>公立</td>
        </tr>
        <tr>
          <td>经营类型：</td>
          <td>综合</td>
        </tr>
        <tr>
          <td>医院等级：</td>
          <td>三甲</td>
        </tr>
        <tr>
          <td>联系人1姓名：</td>
          <td>李琛</td>
        </tr>
        <tr>
          <td>联系人1手机：</td>
          <td>13500000000</td>
        </tr>
        <tr>
          <td>联系人2姓名：</td>
          <td>李琛</td>
        </tr>
        <tr>
          <td>联系人2手机：</td>
          <td>13500000000</td>
        </tr>
      </table>
      <div className='tbbar'>证件信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td colSpan='2'>
            <p>医疗机构执业许可证：</p>
            <p>
              <a className='imglink' target='_blank' href={imgZhizhao}>
                <img src={imgZhizhao}/>
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td>有效时间：</td>
          <td>2018.3.3~2019.3.3<Icon className='istus cgreen' type="check-circle"/></td>
        </tr>
      </table>
      <div className='tbbar'>增值服务</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td>接诊状态：</td>
          <td>在岗</td>
        </tr>
        <tr>
          <td>医院规模：</td>
          <td>857/1000</td>
        </tr>
        <tr>
          <td>通知：</td>
          <td>2014.3.3~2017.3.3<Icon className='istus cred' type="exclamation-circle"/></td>
        </tr>
        <tr>
          <td>话题：</td>
          <td>2018.3.3~2019.3.3<Icon className='istus cgreen' type="check-circle"/></td>
        </tr>
        <tr>
          <td>文件：</td>
          <td>5G, 2018.3.3~2019.3.3<Icon className='istus cgreen' type="check-circle"/></td>
        </tr>
      </table>
      <div className='tbbar'>其他信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td>管理员姓名：</td>
          <td>李琛</td>
        </tr>
        <tr>
          <td>管理员手机：</td>
          <td>13500000000</td>
        </tr>
        <tr>
          <td>账号状态：</td>
          <td>
            <Tag color="red">冻结</Tag>
          </td>
        </tr>
        <tr>
          <td>冻结理由：</td>
          <td>笔记中带有违规内容</td>
        </tr>
        <tr>
          <td>创建时间：</td>
          <td>2018.1.22 17:54:32</td>
        </tr>
        <tr>
          <td>登录时间：</td>
          <td>2018.3.19 17:54:32</td>
        </tr>
      </table>
    </div>)
  }
}
