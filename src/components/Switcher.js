import { Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';
import UsersContainer from "./UsersContainer";
import EditUser from "./EditUser";


const Switcher = () => {
  return(
    <Routes>
      <Route exact path='/users/new' element={<CreateUser />}/>
      <Route exact path='/' element={<UsersContainer />}/>
      <Route exact path='/users/:id/edit' element={<EditUser/>}/>
    </Routes>
  )
}

export default Switcher;
