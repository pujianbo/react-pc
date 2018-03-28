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
    person: '李俊平',
    phone: '13500000000',
    equipment: 'IOS',
    version: '3.0.0',
    createtime: '2018.01.07 17:54:34',
    description: <p style={{
          maxWidth: '40vw'
        }}>手机还有百分之10几的点关机了开不开叫充电！不换系统流畅不流畅这一点也太垃圾了吧，原来可以用一天现在只能用到6点。太费电了，出不出来好系统都一直在9.02等啊，出真多没用的垃圾系统！以后再也不会买苹果了，从4买到6带平板也算到头了！不是6.7的东西我早摔了，真生气</p>
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
      visible: false,
      pagination: {
        current: 1,
        pageSize: 10,
        total: 46
      }
    };
    this.columns = [
      {
        title: '反馈用户',
        dataIndex: 'person'
      }, {
        title: '用户手机',
        dataIndex: 'phone'
      }, {
        title: '用户设备',
        dataIndex: 'equipment'
      }, {
        title: '用户版本',
        dataIndex: 'version'
      }, {
        title: '反馈时间',
        dataIndex: 'createtime'
      }, {
        title: '反馈内容',
        dataIndex: 'description'
      }, {
        title: '操作',
        key: 'action',
        render: (txt, record) => (<span className='links'>
          <a title='回复' onClick={this.replay.bind(this, txt, '删除')}><Icon type="form"/></a>
        </span>)
      }
    ];
  }
  handleTableChange(pagination, filters, sorter) {
    this.setState({pagination})
    console.log(filters);
  }
  //回复
  replay() {
    this.setState({visible: true})
  }
  handleCancel() {
    this.setState({visible: false})
  }
  handleOk(e) {
    e.preventDefault();
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
    const {data, pagination, loading, dltdisabled, visible} = this.state
    return (<div>
      <Form layout="inline" className='frminput' onSubmit={this.submit.bind(this)}>
        <Row gutter={48}>
          <Col span={8}>
            <FormItem label="反馈用户">
              <Input placeholder='搜索反馈用户名' onChange={this.getValue.bind(this, 0)}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="用户手机">
              <Input placeholder='搜索反馈手机号' onChange={this.getValue.bind(this, 0)}/>
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="反馈时间">
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
          <FormItem label="回复内容">
            <TextArea placeholder="输入回复内容" autosize={{
                minRows: 3
              }}/>
          </FormItem>
        </Form>
      </Modal>
      <Table columns={this.columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange.bind(this)}/>
    </div>)
  }
}
