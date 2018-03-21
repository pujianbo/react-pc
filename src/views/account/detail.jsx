import React, {Component} from 'react'
import {Link} from 'react-router'
import {Avatar, Tag} from 'antd';

export default class datalist extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div className='tbdetail'>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td rowSpan='2'><Avatar size="large" icon="user"/></td>
          <td>昵称：你行你上</td>
        </tr>
        <tr>
          <td>手机号：13500000000</td>
        </tr>
        <tr>
          <td>姓名：</td>
          <td>李亦梅</td>
        </tr>
        <tr>
          <td>性别：</td>
          <td>女</td>
        </tr>
        <tr>
          <td>医院：</td>
          <td>四川大学华西医院</td>
        </tr>
        <tr>
          <td>邮箱：</td>
          <td>无</td>
        </tr>
        <tr>
          <td>地区：</td>
          <td>四川 成都</td>
        </tr>
        <tr>
          <td>地址：</td>
          <td>青羊区三道堰23号</td>
        </tr>
        <tr>
          <td>个性签名：</td>
          <td>护士可真命苦啊！谁来救救我！</td>
        </tr>
      </table>
      <div className='tbbar'>医生信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td>姓名：</td>
          <td>李琛</td>
        </tr>
        <tr>
          <td>医院：</td>
          <td>北京市二医院</td>
        </tr>
        <tr>
          <td>科室：</td>
          <td>骨科</td>
        </tr>
        <tr>
          <td>职称：</td>
          <td>主任医师</td>
        </tr>
        <tr>
          <td>学校职称：</td>
          <td>教授</td>
        </tr>
        <tr>
          <td>擅长方向：</td>
          <td>运用中西医结合治疗强直性脊柱炎、骶髂关节炎、颈椎病、腰椎病、腰椎间盘突出症、腰椎间盘膨出症、腰椎管狭窄症、腰椎滑脱症、 腰肌劳损等脊柱关节疾病</td>
        </tr>
        <tr>
          <td>职业优势：</td>
          <td>从医30年 学术发表458篇 骨科协会副会长</td>
        </tr>
        <tr>
          <td>个人简介：</td>
          <td>在国内率先开展中医微创可视针刀镜、热凝靶点消融术，自体软骨细胞培植，其采用微创治疗脊柱关节疾病方面具有一定造诣并已形成 特色，是目前国内脊柱关节疾病同行敬重的临床中老年专家。</td>
        </tr>
      </table>
      <div className='tbbar'>接诊信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
        <tr>
          <td>接诊状态：</td>
          <td>在岗</td>
        </tr>
        <tr>
          <td>接诊时间：</td>
          <td>周一~周五</td>
        </tr>
        <tr>
          <td>接诊类型：</td>
          <td>病情咨询 ￥30/次</td>
        </tr>
      </table>
      <div className='tbbar'>其他信息</div>
      <table>
        <colgroup span="1" className='tbtitle'/>
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
