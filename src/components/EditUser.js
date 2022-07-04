import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, DatePicker } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

const EditUser = () => {
  const state = useLocation();
  const [user, setUser] = useState();
  const userId = state.pathname.split('/')[2]
  const navigate = useNavigate();

  const onFinish = (value) => {
    if (value !== undefined) {
      axios.patch(`http://localhost:3000/api/users/${userId}.json`, value, {
        header: {
          'Access-Control-Allow-Origin': 'http://localhost:3000/api/users',
          "Content-Type": "application/json; charset=utf-8"
      }})
    }
    navigate('/users')
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${userId}/edit.json`, {
      header: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/api/users',
        "Content-Type": "application/json; charset=utf-8"
      }})
      .then(response => {
        setUser(response.data.data.attributes)
      })
      .catch(error => console.log(error))
  }, [])

  return(
    (user !== undefined &&
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
      >
        <Input
          defaultValue={user.user_name}
        />
      </Form.Item>
      <Form.Item
        label='User email'
        name='user_email'
      >
        <Input
          defaultValue={user.user_email}
        />
      </Form.Item>
      <Form.Item
        label='Birthdate'
        name='birthdate'
      >
        <DatePicker
          defaultValue={moment(user.birthdate, 'YYYY/MM/DD')}
        />
      </Form.Item>
      <Form.Item
        label='Phone number'
        name='phone_number'
      >
        <Input
          defaultValue={user.phone_number}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>)
  )
}

export default EditUser;
