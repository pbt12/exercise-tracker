import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import ExerciseList from './components/exerciseList/ExerciseList';
import User from './components/user/User';
import AddUser from './components/addUser/AddUser';
import AddExercise from './components/addExercise/AddExercise';
import EditExercise from './components/editExercise/EditExercise';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ExerciseList/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path='/addExercise' element={<AddExercise/>}/>
        {/* <Route path='/editExercise' element={<EditExercise/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
