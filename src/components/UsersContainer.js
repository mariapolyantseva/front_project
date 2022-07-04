import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Row, Table, Button } from 'antd';
import 'antd/dist/antd.css';

const UsersContainer = () => {
  const [users, setUsers] = useState('');
  const getData = () => {
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

  const deleteUser = (value) => {
    if (value !== undefined) {
      axios.delete(`http://localhost:3000/api/users/${value}.json`, {
      header: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/api/users',
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    }
  }

  useEffect(() => {
    if (users === '') {
      getData()
    }
    console.log(users)
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
          <Table.Column
            render={(record) => (
              <Link to={`/users/${record.id}/edit`}>
                <Button>Edit user</Button>
              </Link>
            )}
          />
          <Table.Column
            render={(record) => (<Button onClick={() => deleteUser(record.id)}>Delete</Button>)}
          />
        </Table>
      </Row>
      <Link to='/users/new'>
        <Button>Create user</Button>
      </Link>
    </div>
  )
}

export default UsersContainer;
