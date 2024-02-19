import './App.css';
import Header from './components/Header';
import AddEmployee from "./components/AddEmployee"
import AllEmployees from './components/AllEmployees';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import UpdateEmployee from './components/UpdateEmployee';
import AddSalary from './components/AddSalary';
import AllSalaries from './components/AllSalaries';
import UpdateSalary from './components/UpdateSalary';
import QRcodeGenerator from './components/QRcodeGenerator';
import WebCamScanner from './components/WebCamScanner';
import Alle from './components/Alle';
import Attendance from './components/Attendance';



function App() {
  return (
    
    <div className="container">
      <h1><center>Employee Management</center></h1>
      
      <Header/>
      
      <Routes>
      
      <Route path="/add" exact element={<AddEmployee/>}></Route> 
      <Route path="/" exact element={<AllEmployees/>}></Route>
      <Route path="/update/:id"element={<UpdateEmployee/>}></Route>
      <Route path="/gets" exact element={<AllSalaries/>}></Route>
      <Route path="/addsalary" exact element={<AddSalary/>}></Route>
      <Route path="/updates/:id"element={<UpdateSalary/>}></Route>
      <Route path="/QRcodeGenerator"element={<QRcodeGenerator/>}></Route>
      <Route path="/WebCamScanner"element={<WebCamScanner/>}></Route>
      <Route path="/get/:id"element={<Alle/>}></Route>
      <Route path="/getss" exact element={<Attendance/>}></Route>
     
      

      
      
      </Routes>
      
    </div>
    

  );
}

export default App;
