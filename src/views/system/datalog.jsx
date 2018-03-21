import React, {Component} from 'react'
import {Table} from 'antd';

const columns = [
  {
    title: '用户名',
    dataIndex: 'name'
  }, {
    title: '手机号',
    dataIndex: 'phone'
  }, {
    title: '科室',
    dataIndex: 'keshi'
  }, {
    title: '职称',
    dataIndex: 'zhicheng'
  }, {
    title: '状态',
    dataIndex: 'status'
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (<span className='links'>
      <a>编辑</a>
      <a>删除</a>
    </span>)
  }
];

const data = [
  {
    key: '1',
    name: '张斌超',
    phone: 15928287799,
    keshi: '儿科',
    zhicheng: '专家',
    status: '正常'
  }, {
    key: '2',
    name: '张斌超',
    phone: 15928287799,
    keshi: '儿科',
    zhicheng: '专家',
    status: '未激活'
  }, {
    key: '3',
    name: '张斌超',
    phone: 15928287799,
    keshi: '儿科',
    zhicheng: '专家',
    status: '冻结'
  }
];

export default class datalist extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<Table columns={columns} dataSource={data}/>)
  }
}
