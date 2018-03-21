'use strict';
import React, {Component} from 'react'
import {hashHistory} from 'react-router'
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Select,
  Cascader
} from 'antd';

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
          span: 2
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 10
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
          offset: 2
        }
      }
    };
    const {getFieldDecorator} = this.props.form
    return (<div>
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="管理员手机">
          {
            getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: '请填写管理员手机号'
                }, {
                  type: 'email',
                  message: '请填写正确的手机号'
                }
              ]
            })(<Input placeholder='该手机号用于登录医院后台'/>)
          }
          <span>确定后将发送随机登录密码到管理员手机</span>
        </FormItem>
        <FormItem {...formItemLayout} label="管理员姓名">
          {
            getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请填写管理员姓名'
                }
              ]
            })(<Input placeholder='请填写管理员姓名'/>)
          }
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <span style={{
              fontSize: '1.2em'
            }}>医院信息</span>
        </FormItem>
        <FormItem {...formItemLayout} label="医院名称">
          {
            getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请填写医院名称'
                }
              ]
            })(<Input placeholder='请填写医院名称'/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="医院地址">
          {
            getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请选择医院地址'
                }
              ]
            })(<Cascader options={options} placeholder='请选择医院地址'/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="医院类型">
          <Select defaultValue="gongli" style={{
              width: 120
            }}>
            <Option value="gongli">公立</Option>
            <Option value="sili">私立</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="经营类型">
          <Select defaultValue="zonghe" style={{
              width: 120
            }}>
            <Option value="zonghe">综合</Option>
            <Option value="zhuanke">专科</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="医院等级">
          <Select defaultValue="sante" style={{
              width: 120
            }}>
            <Option value="sante">三特</Option>
            <Option value="sanjia">三甲</Option>
            <Option value="sanyi">三乙</Option>
            <Option value="sanbing">三丙</Option>
          </Select>
        </FormItem>
        <FormItem {...formItemLayout} label="医院等级">
          <Select defaultValue="sante" style={{
              width: 120
            }}>
            <Option value="sante">三特</Option>
            <Option value="sanjia">三甲</Option>
            <Option value="sanyi">三乙</Option>
            <Option value="sanbing">三丙</Option>
          </Select>
        </FormItem>
        <FormItem>

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
