import React, { } from 'react';
import axios from 'axios';
import { Form, Input, Button, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios.post('https://marvelous-big-bend-72908.herokuapp.com/api/users', values, {
      header: {
        'Access-Control-Allow-Origin': 'https://marvelous-big-bend-72908.herokuapp.com/api/users',
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });

    navigate('/')
  };

  return(
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label='User name'
        name='user_name'
        rules={[
          {
            required: true,
            message: 'Please input user name!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label='User email'
        name='user_email'
        rules={[
          {
            required: true,
            message: 'Please input user email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label='Birthdate'
        name='birthdate'
        rules={[
          {
            required: true,
            message: 'Please input birthdate!',
          },
        ]}
      >
        <DatePicker/>
      </Form.Item>
      <Form.Item
        label='Phone number'
        name='phone_number'
        rules={[
          {
            required: true,
            message: 'Please input phone number!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateUser;
