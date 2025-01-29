import {employeeList} from './employeeList'
import './employee.css'
import ListOfEmployee from './ListOfEmployee'
import EmployeeDetails from './EmployeeDetails'
import { useState } from 'react'
const Employee=()=>{
    const [employees,setEmployees]=useState(employeeList)
    const [employeeD,setEmployeeD]=useState([])
    const [addnewemp,setAddnewemp]=useState(false)
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [newEmployee, setNewEmployee] = useState({
      name: '',
      email: '',
      domain: '',
      image_url: '',
      date_of_birth: ''
    });
    const getEmp=(emp)=>{
   setEmployeeD(emp)
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(currentEmployee!==null){
        const updatedEmployee=employees.map((employee,index)=>
          currentEmployee===index?{...newEmployee}:employee
        )
        setEmployees(updatedEmployee)
        setAddnewemp(false)
      }else{
        setEmployees([...employees, newEmployee]);
      }
      
      setNewEmployee({
        name: '',
        email: '',
        domain: '',
        image_url: '',
        date_of_birth: ''
      });
      setAddnewemp(!addnewemp)
    };
    
 
  const handleEdit = (index) => {
      setCurrentEmployee(index);
      setNewEmployee(employees[index]);
      setAddnewemp(true)
    };
 return(
 <> <div className='employee'>
    <div className='empHeader'>
    <h2>Employee Database Management</h2>
    <button className='addnewEmp' onClick={()=>{setAddnewemp(!addnewemp)}}>Add</button>
    </div>
    <div className='employeeContainer'>
      <div className="employeeList">
        {employees.map((emp)=>{
            return <ListOfEmployee name={emp.name} id={emp.id}  employees={employees} handleEdit={handleEdit} setEmployees={setEmployees} onClick={()=>{getEmp(emp)}}/>
        })}
      </div>
      <EmployeeDetails  employeeD={employeeD}/>
      {
        addnewemp && <div className='addPopup'>
          <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newEmployee.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={newEmployee.email} onChange={handleChange} required />
        <input type="text" name="domain" placeholder="Domain" value={newEmployee.domain} onChange={handleChange} required />
        <input type="url" name="image_url" placeholder="Image URL" value={newEmployee.image_url} onChange={handleChange} required />
        <input type="date" name="date_of_birth" placeholder="Date of Birth" value={newEmployee.date_of_birth} onChange={handleChange} required />
        <button type="submit">Add Employee</button>
      </form>
        </div>
      }
    </div>
    
 </div>
 </>

 )
}
export default Employee