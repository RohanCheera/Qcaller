import {Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTasks from './pages/tasks/MyTasks.js';
import Tasks from './pages/tasks/Tasks.js';
import Layout from './pages/Layout.js';
import CreateTask from './pages/tasks/CreateTask.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Profile from './pages/profile/Profile.js';


function App() {
  return (
    <div className="App">

      <Routes >
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/mytasks' element={<MyTasks/>}/>
          <Route path='/create' element={<CreateTask/>}/>
          <Route path='/profile' element={<Profile/>}/>
          
          
        </Route>
        <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
