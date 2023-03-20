import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import DatePicker from 'react-datepicker'
import './AddExercise.css'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

function AddExercise() {
  let rendercount =0;
  rendercount++;
  let user = {};
  console.log(rendercount);
  const [exercise,setExercise] = useState('');
  const [username,setUsername] = useState('');
  const [duration,setDuration]=useState('');
  const [date,setDate]=useState(new Date());
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/users/')
  .then(res => {
    const usersArr = res.data.map(user => user.username);
    console.log(usersArr);
    setUsers(usersArr);
  })
  .catch(err => console.log(err));
  console.log(user)

  console.log('effect');
  },[user])

  // console.log(users);

  // useMemo(() => {
  //   axios.get('http://localhost:5000/users/')
  //   .then(res => {
  //     const usersArr = res.data.map(user => user.username);
  //     console.log(usersArr);
  //     setUsers(usersArr);
  //   })
  //   .catch(err => console.log(err));
  // },[user])

  const onSubmit = (e) => {
    e.preventDefault();
     user = {
      username,
      exercise,
      duration,
      date
    }
    axios.post('http://localhost:5000/exercises/add',{user})
    .then(() => console.log('User added successfully'))
    .catch((err)=>console.log(err));
  }

  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
          <h4>username </h4>
          <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
          <input className="form-control" list="list" id="exampleDataList" placeholder="Type to search..." value={username} onChange={(e)=>{console.log('username state');setUsername(e.target.value)}}/>
          <datalist id="list">
            {
              users.map((user) => {
                return <option key={user} value={user}>{user}</option>
              })
            }
          </datalist>
          <h4>Exercise </h4>
          <input type="text" className="form-control" placeholder="Exsercise name..." aria-label="name_lebel1" aria-describedby="name_area1" value={exercise} onChange = {(event)=>{console.log('exercise state');setExercise(event.target.value)}}/>
          <h4>Duration </h4>
          <input  type="number" className="form-control" placeholder="Duration..." aria-label="name_lebel2" aria-describedby="name_area2" value={duration} onChange={(event) => {console.log('duration state');setDuration(event.target.value)}}/>
          <h4>Date</h4>
          <DatePicker selected={date} onChange={(date) => {console.log('date state');setDate(date)} }/>
          <input type="submit" className='btn btn-primary'/>
        </form>
    </div>
  )
}

export default AddExercise;
