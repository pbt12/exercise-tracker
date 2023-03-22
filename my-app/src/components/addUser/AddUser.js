import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function AddUser() {

  const [user,setUser] = useState("");
  const onUserChange =  (event)=>{
     setUser(event.target.value);
  }

  const onSubmit = (e)=>{
    console.log(user);
    console.log('submitted')
    const username = user;
    axios.post('http://localhost:5000/users/add',{username: username})
    .then((res) => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <h3><b>Create New User</b></h3>
        <label htmlFor="Username" className="form-label"><b>Username</b></label>
        <input className="form-control" id="username" placeholder="Type to search..." onChange={onUserChange} value={user}/>
        <br />
        <button className='btn btn-primary' onClick={onSubmit}>Add user</button>
    </div>
  )
}

export default AddUser;
