import React, {Component} from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

export default class datalist extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit() {
    console.log(23);
  }

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
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 2,
        },
      },
    };
    return (<Form onSubmit={this.handleSubmit.bind(this)} style={{
        marginTop: '40px'
      }}>
      <FormItem {...formItemLayout} label="网站名称">
        <Input/>
      </FormItem>
      <FormItem {...formItemLayout} label="版权信息">
        <Input type="textarea"/>
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">修改</Button>
      </FormItem>
    </Form>);
  }
}
