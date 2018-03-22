import React, {Component} from 'react'
import {Link} from 'react-router'
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Icon,
  Select
} from 'antd';
// import moment from 'moment';
const {MonthPicker, RangePicker} = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const FormItem = Form.Item;
const Option = Select.Option;
const data = [];
for (let i = 1; i <= 46; i++) {
  if (i < 10)
    i = '0' + i;
  let cls = '';
  if (i % 3 == 0) {
    cls = 'cgreen'
  }
  data.push({
    key: i,
    name: `四川省第${i}人民医院`,
    phone: 15928287799,
    type: '公立',
    jytype: '综合',
    level: '三甲',
    createtime: '2018.01.07 17:54:34',
    logintime: '2018.01.07 17:54:34',
    status: '正常'
  });
}
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
        title: '医院名称',
        dataIndex: 'name'
      }, {
        title: '管理员手机号',
        dataIndex: 'phone'
      }, {
        title: '医院类型',
        dataIndex: 'type'
      }, {
        title: '经营类型',
        dataIndex: 'jytype'
      }, {
        title: '医院等级',
        dataIndex: 'level'
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
          <Link title='查看详情' to='/account/hospdetail/1/23'><Icon type="info-circle"/></Link>
          <a title='冻结账户' onClick={this.edit.bind(this, txt, '冻结')}><Icon type="lock"/></a>
          <a title='删除账户' onClick={this.edit.bind(this, txt, '删除')}><Icon type="delete"/></a>
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
    Modal.confirm({
      title: `您确定要${type}以下账户吗?`,
      content: `姓名：${txt.name}`,
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
  //批量操作
  handleSlt(e) {
    console.log(e.target.innerText);
    Modal.confirm({
      title: `您确定要${e.target.innerText}以下账户吗?`,
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

  //选择时间
  sltTime(time, type) {
    console.log(time);
    console.log(type);
  }

  //获取Input内容
  getValue(value, e) {
    console.log(value);
    console.log(e.target.value);
  }

  //提交表单
  submit(e) {
    console.log('submit');
    e.preventDefault();
  }
  render() {
    const {data, pagination, loading, rowSelection, dltdisabled} = this.state
    return (<div>
      <Form className='frmbtntop text-right'>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量冻结</Button>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量解冻</Button>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量删除</Button>
        <Button href='#/account/hospedit'>新建用户</Button>
      </Form>
      <Form layout="inline" className='frminput' onSubmit={this.submit.bind(this)}>
        <Row gutter={48}>
          <Col span={8}>
            <FormItem label="用户昵称">
              <Input placeholder='搜索昵称或姓名' onChange={this.getValue.bind(this, 0)}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="手机号码">
              <Input placeholder='手机号' ref='phone' name='phone' maxLength='11' onChange={this.getValue.bind(this, 1)}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="账号状态">
              <Select defaultValue="normal" onChange={this.sltStatus.bind(this)}>
                <Option value="nouse">未激活</Option>
                <Option value="normal">正常</Option>
                <Option value="frozen">冻结</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={48}>
          <Col span={8}>
            <FormItem label="创建时间">
              <RangePicker onChange={this.sltTime.bind(this, 0)} style={{
                  width: '220px'
                }}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="登录时间">
              <RangePicker onChange={this.sltTime.bind(this, 1)} style={{
                  width: '220px'
                }}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="认证状态">
              <Select defaultValue="renzheng" onChange={this.sltStatus.bind(this)}>
                <Option value="renzheng">认证</Option>
                <Option value="renzhengno">未认证</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row gutter={48}>
          <Col span={8}>
            <FormItem label="医院名称">
              <Input placeholder='搜索医院名称' style={{
                  width: '260px'
                }}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="科室名称">
              <Input placeholder='搜索科室名称' style={{
                  width: '260px'
                }}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="医生职称">
              <Select defaultValue="zhiyedoc" onChange={this.sltStatus.bind(this)}>
                <Option value="zhiyedoc">职业医师</Option>
                <Option value="zhudoc">主治医师</Option>
                <Option value="zhuren">主任医师</Option>
                <Option value="zhurenfu">副主任医师</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange.bind(this)}/>
    </div>)
  }
}
