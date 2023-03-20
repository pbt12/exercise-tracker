import React from 'react'
import { useState } from 'react';
function AddUser() {

  const [user,setUser] = useState("");
  const onUserChange =  (event)=>{
     setUser(event.target.value);
  }

  const onSubmit = (event)=>{
    console.log('submitted')
    const username = user;
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
