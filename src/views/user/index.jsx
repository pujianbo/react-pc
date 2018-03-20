import React, {Component} from 'react'
import {Link} from 'react-router'
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  RangePicker,
  Select
} from 'antd';
import moment from 'moment';
const {MonthPicker, RangePicker} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const FormItem = Form.Item;
const Option = Select.Option;
const data = [];
for (let i = 1; i <= 46; i++) {
  if (i < 10)
    i = '0' + i;
  data.push({
    key: i,
    name: '张斌超' + i,
    phone: 15928287799,
    hosp: '北京市二医院',
    createtime: '2018.01.07 17:54:34',
    logintime: '2018.01.07 17:54:34',
    status: '正常'
  });
}
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
export default class datalist extends Component {
  constructor() {
    super();
    this.selectedRowKeys = '';
    this.state = {
      loading: false,
      data,
      dltdisabled: true,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 46
      },
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          this.setState({
            dltdisabled: selectedRowKeys.length == 0
          })
          this.selectedRowKeys = selectedRowKeys
        }
      }
    };
    this.columns = [
      {
        title: '昵称',
        dataIndex: 'name'
      }, {
        title: '手机号',
        dataIndex: 'phone'
      }, {
        title: '医院',
        dataIndex: 'hosp'
      }, {
        title: '创建时间',
        dataIndex: 'createtime'
      }, {
        title: '登录时间',
        dataIndex: 'logintime'
      }, {
        title: '状态',
        dataIndex: 'status'
      }, {
        title: '操作',
        key: 'action',
        render: (txt, record) => (<span className='links'>
          <Link title='查看详情' to='/userdetail/23'><Icon type="info-circle"/></Link>
          <a title='冻结账户' onClick={this.edit.bind(this, txt, 0)}><Icon type="lock"/></a>
          <a title='删除账户' onClick={this.edit.bind(this, txt, 1)}><Icon type="delete"/></a>
        </span>)
      }
    ];
  }
  handleTableChange(pagination, filters, sorter) {
    this.setState({pagination})
    console.log(filters);
  }

  edit(txt, type) {
    console.log(txt);
    if (type == 1) {
      Modal.confirm({
        title: '你确定要删除此条记录?',
        content: `序号：${txt.index}，姓名：${txt.name}`,
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        }
      });
    }
  }
  //批量操作
  handleSlt(e) {
    console.log(e.target.innerText);
    Modal.confirm({
      title: '你确定要删除所选记录?',
      content: `选择项：${this.selectedRowKeys.join(',')}`,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }
  //选择状态
  sltStatus(value) {
    console.log(`selected ${value}`);
  }
  render() {
    const {data, pagination, loading, rowSelection, dltdisabled} = this.state
    return (<div>
      <Form className='frmbtntop'>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量删除</Button>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量冻结</Button>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量解冻</Button>
        <Button>新建用户</Button>
      </Form>
      <Form className='frmbtntop' layout="inline">
        <FormItem label="昵称">
          <Input placeholder='搜索昵称或姓名'/>
        </FormItem>
        <FormItem label="手机号">
          <Input placeholder='搜索手机号' maxLength='11'/>
        </FormItem>
        <FormItem label="医院">
          <Input placeholder='搜索医院'/>
        </FormItem>
        <FormItem label="创建时间">
          <RangePicker/>
        </FormItem>
        <FormItem label="登录时间">
          <RangePicker/>
        </FormItem>
        <FormItem label="账号状态">
          <Select defaultValue="lucy" onChange={this.sltStatus.bind(this)}>
            <Option value="lucy">未激活</Option>
            <Option value="Yiminghe">正常</Option>
            <Option value="jack">冻结</Option>
          </Select>
        </FormItem>
      </Form>
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange.bind(this)}/>
    </div>)
  }
}
