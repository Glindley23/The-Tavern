import React, { useEffect, useState, } from "react"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
//import { Redirect } from 'react-router-dom'
//import DropdownButton from "react-bootstrap/esm/DropdownButton";
//import Dropdown from "react-bootstrap/esm/Dropdown";
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newEmployee() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteEmployee(employee_id) {
    fetch(`http://localhost:8080/employees/${employee_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }
// Close the dropdown menu if the user clicks outside of it
/* window.onclick = function (event) {
    if (!event.target.matches('.new-button')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('.show')) {
                openDropdown.classList.remove('.show');
            }
        }
    }
} */
function Employees() {
    //setting state for employee data
    const [employeesData, setEmployeesData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/employees')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setEmployeesData(data)
                })
    }

        , [])
    console.log(employeesData);
    let employeeList = employeesData.map((employee, index) => {
        return (
            <Card className='employee-card' key={index} style={{ width: '18rem'}}>
                <Card.Img className='employee-portrait' variant="top" src={employee.portrait} alt={employee.portrait} />
                <Card.Body>
                    <Card.Title>{employee.name}</Card.Title>
                    <Card.Text>
                        Job Title: {employee.job_title}
                    </Card.Text>
                    <Card.Text>
                        Years of experience: {employee.years_of_experience}
                    </Card.Text>
                    <Card.Text>
                        Weekly Salary: {employee.weekly_salary}
                    </Card.Text>
                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteEmployee(employee._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Employee List</h1>
            <div className="dropdown">
                <Button onClick={newEmployee} className='new-button dropdown-basic-button' variant="outline-secondary">New Employee</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:8080/employees'>
                        <div className='form-group'>
                            <label htmlFor="name">
                                Name:
                                <input className='form-control' id='name' type="text" name='name' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='job_title'>
                                Job Title:
                                <input className='form-control' id='job_title' type="text" name='job_title' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='years_of_experience'>
                                Years of experience:
                                <input className='form-control' id='years_of_experience' type="text" name='years_of_experience' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='portrait'>
                                Portrait
                                <input className='form-control' id='portrait' type="url" name='portrait' />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='weekly_salary'>
                                Weekly Salary:
                                <input className='form-control' id='weekly_salary' type="text" name='weekly_salary' required />
                            </label>
                        </div>
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className='row'>
                {employeeList}
            </div>

        </main>
    )
}

export default Employees