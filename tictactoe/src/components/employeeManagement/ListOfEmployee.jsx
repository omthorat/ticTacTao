import { useState } from 'react'
const ListOfEmployee=({name,onClick,id,setEmployees,employees,handleEdit})=>{
    const deleteEmp=(id)=>{
        const newList=employees.filter((emp)=>emp.id!==id)
      setEmployees(newList)
    }
      

    return(<>
    <div className="listofemployee" onClick={onClick}>
        <span className="employeename">{name}</span>
        <button className="deleteemp" onClick={()=>{deleteEmp(id)}}>X</button>
        <button className="deleteemp" onClick={()=>{handleEdit(id)}}>Edit</button>
        
    </div>
    </>)
}
export default ListOfEmployee