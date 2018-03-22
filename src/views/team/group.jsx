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
  Select,
  Tabs,
  Upload,
  message
} from 'antd';
// import moment from 'moment';
const {MonthPicker, RangePicker} = DatePicker;
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const FormItem = Form.Item;
const Option = Select.Option;
const data = [];
for (let i = 1; i <= 46; i++) {
  data.push({
    key: i,
    name: '骨科',
    number: Math.floor(Math.random() * 100)
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
      visible: false,
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
        title: '名称',
        dataIndex: 'name'
      }, {
        title: '人数',
        dataIndex: 'number'
      }, {
        title: '操作',
        key: 'action',
        render: (txt, record) => (<span className='links'>
          <Link title='详情' to={`/team/person/${txt.key}`}><Icon type="info-circle"/></Link>
          <a title='编辑' onClick={this.addGroup.bind(this, txt)}><Icon type="edit"/></a>
          <a title='删除' onClick={this.edit.bind(this, txt, '删除')}><Icon type="delete"/></a>
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
  //新建账户弹框
  addGroup(txt) {
    console.log(txt);
    this.setState({visible: true})
  }

  handleCancel() {
    this.setState({visible: false})
  }
  handleOk(e) {
    e.preventDefault();
  }

  render() {
    const {
      data,
      pagination,
      loading,
      visible,
      rowSelection,
      dltdisabled
    } = this.state
    return (<div>
      <Form className='frmbtntop text-right'>
        <Button type="danger" disabled={dltdisabled} onClick={this.handleSlt.bind(this)}>批量删除</Button>
        <Button onClick={this.addGroup.bind(this)}>新建分组</Button>
      </Form>
      <Modal visible={visible} title="新建分组" onCancel={this.handleCancel.bind(this)} footer={[
          <Button key="back" onClick={this.handleCancel.bind(this)}>取消</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
            确定
          </Button>
        ]}>
        <Form onSubmit={this.handleOk.bind(this)}>
          <FormItem label="分组名称">
            <Input placeholder="输入分组名称"/>
          </FormItem>
        </Form>
      </Modal>
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange.bind(this)}/>
    </div>)
  }
}
