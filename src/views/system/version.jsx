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
const {TextArea} = Input;
const TabPane = Tabs.TabPane;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const FormItem = Form.Item;
const Option = Select.Option;
const data = [];
for (let i = 1; i <= 46; i++) {
  data.push({
    key: i,
    number: '2.0.' + i,
    person: 'admin',
    createtime: '2018.01.07 17:54:34',
    description: '修复登录BUG',
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
        title: '版本号',
        dataIndex: 'number'
      }, {
        title: '发布人',
        dataIndex: 'person'
      }, {
        title: '发布时间',
        dataIndex: 'createtime'
      }, {
        title: '版本说明',
        dataIndex: 'description'
      }, {
        title: '操作',
        key: 'action',
        render: (txt, record) => (<span className='links'>
          <a title='下载此版本' href='http://acj3.pc6.com/pc6_soure/2018-3/com.netease.cloudmusic_115.apk' ><Icon type="download" /></a>
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
      title: `您确定要${type}以下记录吗?`,
      content: `版本号：${txt.number}`,
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
      title: `您确定要${e.target.innerText}以下记录吗?`,
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
  addVersion() {
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
        <Button onClick={this.addVersion.bind(this)}>发布版本</Button>
      </Form>
      <Form layout="inline" className='frminput' onSubmit={this.submit.bind(this)}>
        <Row gutter={48}>
          <Col span={8}>
            <FormItem label="版本号">
              <Input placeholder='搜索版本号' onChange={this.getValue.bind(this, 0)}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="发布时间">
              <RangePicker onChange={this.sltTime.bind(this, 1)} style={{
                  width: '220px'
                }}/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Modal visible={visible} title="回复用户反馈" onCancel={this.handleCancel.bind(this)} footer={[
          <Button key="back" onClick={this.handleCancel.bind(this)}>取消</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.handleOk.bind(this)}>
            确定
          </Button>
        ]}>
        <Form onSubmit={this.handleOk.bind(this)}>
          {/*<FormItem label="版本序号">
            <Input placeholder='输入版本序号' />
          </FormItem>*/}
          <FormItem label="上传文件">
            <Upload>
              <Button>选择文件</Button>
            </Upload>
          </FormItem>
          <FormItem label="版本描述">
            <TextArea placeholder="输入版本描述" autosize={{
                minRows: 3
              }}/>
          </FormItem>
        </Form>
      </Modal>
      <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange.bind(this)}/>
    </div>)
  }
}
