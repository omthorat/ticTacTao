const EmployeeDetails = ({ employeeD }) => {
    console.log(employeeD.image_url)
    return (<>
        <div className="employeeDetails">
            <div><img src={employeeD.image_url} alt="employee Image"  className="profileImg"/></div>
            <div>Employee Name: {employeeD.name}</div>
            <div>Employee email: {employeeD.email}</div>
            <div>Employee domain: {employeeD.domain}</div>
            <div>Employee date_of_birth: {employeeD.date_of_birth}</div>
        </div>  </>)
}
export default EmployeeDetails