'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {
  DatePicker,
  Upload,
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  Icon,
  Cascader
} from 'antd';
const {RangePicker } = DatePicker;
const createForm = Form.create;
const FormItem = Form.Item;
const Option = Select.Option;
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖'
          }
        ]
      }
    ]
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门'
          }
        ]
      }
    ]
  }
];
let Demo = React.createClass({
  getInitialState() {
    return {
      passBarShow: false, // 是否显示密码强度提示条
      rePassBarShow: false,
      passStrength: 'L', // 密码强度
      rePassStrength: 'L'
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log(values);
    });
  },

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 3
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 14
        }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 3
        }
      }
    };
    const {getFieldDecorator} = this.props.form
    return (<div className='tbdetail'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="管理员手机">
          {
            getFieldDecorator('adminphone', {
              rules: [
                {
                  required: true,
                  message: '请填写管理员手机号'
                }
              ]
            })(<Input placeholder='该手机号用于登录医院后台' style={{
                width: '200px'
              }}/>)
          }
          <span style={{
              marginLeft: '10px'
            }} className='cgreen'>确定后将发送随机登录密码到管理员手机</span>
        </FormItem>
        <FormItem {...formItemLayout} label="管理员姓名">
          {
            getFieldDecorator('adminname', {
              rules: [
                {
                  required: true,
                  message: '请填写管理员姓名'
                }
              ]
            })(<Input placeholder='请填写管理员姓名' style={{
                width: '200px'
              }}/>)
          }
        </FormItem>
        <FormItem>
          <div className='tbbar'>医院信息</div>
        </FormItem>
        <FormItem {...formItemLayout} label="医院名称">
          {
            getFieldDecorator('hospname', {
              rules: [
                {
                  required: true,
                  message: '请填写医院名称'
                }
              ]
            })(<Input placeholder='请填写医院名称' style={{
                width: '300px'
              }}/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="医院地址">
          {
            getFieldDecorator('hospaddress', {
              rules: [
                {
                  required: true,
                  message: '请选择医院地址'
                }
              ]
            })(<Cascader options={options} style={{
                width: 170
              }} placeholder='请选择医院地址'/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="详细地址">
          {
            getFieldDecorator('hospaddressd', {
              rules: [
                {
                  required: true,
                  message: '请填写医院详细地址'
                }
              ]
            })(<Input placeholder='请填写详情地址' style={{
                width: '300px'
              }}/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="医院类型">
          <Select defaultValue="gongli" style={{
              width: 80
            }}>
            <Option value="gongli">公立</Option>
            <Option value="sili">私立</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="经营类型">
          <Select defaultValue="zonghe" style={{
              width: 80
            }}>
            <Option value="zonghe">综合</Option>
            <Option value="zhuanke">专科</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="医院等级">
          <Select defaultValue="sante" style={{
              width: 80
            }}>
            <Option value="sante">三特</Option>
            <Option value="sanjia">三甲</Option>
            <Option value="sanyi">三乙</Option>
            <Option value="sanbing">三丙</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="联系人1姓名">
          {
            getFieldDecorator('name1', {
              rules: [
                {
                  required: true,
                  message: '请填写联系人1姓名'
                }
              ]
            })(<Input placeholder='请填写联系人1姓名' style={{
                width: '200px'
              }}/>)
          }
          <span style={{
              fontSize: '24px',
              marginLeft: '20px',
              verticalAlign: 'middle'
            }}>
            <Icon className='cgreen' type="plus-square"/>
            <Icon style={{
                marginLeft: '10px'
              }} className='cred' type="minus-square"/>
          </span>
        </FormItem>
        <FormItem {...formItemLayout} label="联系人1手机">
          {
            getFieldDecorator('phone1', {
              rules: [
                {
                  required: true,
                  message: '请填写联系人1手机号'
                }
              ]
            })(<Input placeholder='请填写联系人1手机号' style={{
                width: '200px'
              }} maxLength='11'/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="联系人2姓名">
          {
            getFieldDecorator('name2', {
              rules: [
                {
                  required: true,
                  message: '请填写联系人2姓名'
                }
              ]
            })(<Input placeholder='请填写联系人2姓名' style={{
                width: '200px'
              }}/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="联系人2手机">
          {
            getFieldDecorator('phone2', {
              rules: [
                {
                  required: true,
                  message: '请填写联系人2手机号'
                }
              ]
            })(<Input placeholder='请填写联系人2手机号' style={{
                width: '200px'
              }} maxLength='11'/>)
          }
        </FormItem>
        <FormItem>
          <div className='tbbar'>证照信息</div>
        </FormItem>
        <FormItem {...formItemLayout} label="医疗许可证">
          <Upload>
            <Button>
              <Icon type="upload"/>
              选择文件
            </Button>
          </Upload>
        </FormItem>
        <FormItem {...formItemLayout} label="有效时间">
          <RangePicker />
        </FormItem>
        <FormItem {...formItemLayout} label="营业执照">
          <Upload>
            <Button>
              <Icon type="upload"/>
              选择文件
            </Button>
          </Upload>
        </FormItem>
        <FormItem {...formItemLayout} label="有效时间">
          <RangePicker />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button>取消</Button>
          <Button style={{
              marginLeft: '20px'
            }} type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    </div>);
  }
});
Demo = createForm()(Demo);
export default class form extends Component {
  render() {
    return <Demo/>
  }
}
