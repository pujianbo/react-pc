import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

export default class form extends Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values)=>{
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };



    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          <Input />
        </FormItem>
        <FormItem>
          <Input type="password" />
        </FormItem>
        <FormItem>
            <Input type="password" onBlur={this.handleConfirmBlur} />
        </FormItem>
        <FormItem>
          <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            <Input />
        </FormItem>
        <FormItem>
            <Cascader options={residences} />
        </FormItem>
        <FormItem>
            <Input style={{ width: '100%' }} />
        </FormItem>
        <FormItem>
              <Input />
        </FormItem>
        <FormItem>
          <Row gutter={8}>
            <Col span={12}>
                <Input />
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}
