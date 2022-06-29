import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Table, Button } from 'antd';
import 'antd/dist/antd.css';
import CreateUser from './CreateUser';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const UsersContainer = () => {
  const [users, setUsers] = useState('');
  const componentDidMount = () => {
    axios.get('http://localhost:3000/api/users.json', {
    header: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/api/users',
      "Content-Type": "application/json; charset=utf-8"
  }})
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    if (users === '') {
      componentDidMount()
    }
  }, [])

  return(
    <div>
      <Row>
        <Table
          dataSource={users.data}
          pagination={false}
          rowKey={(record) => record.id}
        >
          <Table.Column
            title={'id'}
            render={(record) => record.id}
          />
          <Table.Column
            title={'user_name'}
            render={(record) => record.attributes.user_name}
          />
          <Table.Column
            title={'user_email'}
            render={(record) => record.attributes.user_email}
          />
          <Table.Column
            title={'birthdate'}
            render={(record) => record.attributes.birthdate}
          />
          <Table.Column
            title={'phone_number'}
            render={(record) => record.attributes.phone_number}
          />
        </Table>
      </Row>
      <Router>
        <Routes>
          <Route exact path='/users/new' element={<CreateUser />}></Route>
        </Routes>
        <Link to='/users/new'>
          <Button>Create user</Button>
        </Link>
      </Router>
    </div>
  )
}

export default UsersContainer;
