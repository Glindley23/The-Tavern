import React, { useEffect, useState, } from "react"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newEmployee() {
    document.getElementById("dropdownForm").classList.toggle("show");
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
    const [employeesData, setEmployeesData] = useState([{}])
    //fetching data from backend
    useEffect(() => {
        fetch('/employees').then(
            response => response.json()
        ).then(
            data => {
                setEmployeesData(data)
            }
        )
    }, [])

    let employeeList = employeesData.map((employee) => {
        return (

            <Card className='employee-card' style={{ width: '18rem' }}>
                <Card.Img className='employee-portrait' variant="top" src='../imgs/nikolaj-main_0.webp' alt={employee.portrait} />
                <Card.Body>
                    <Card.Title>Jaime Lannister</Card.Title>
                    <Card.Text>
                        <p>Job Title: {employee.job_title}</p>
                        <p>Years of experience: {employee.years_of_experience}</p>
                        <p>Weekly Salary: {employee.weekly_salary}</p>
                    </Card.Text>
                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger">Delete</Button>
                        <DropdownButton title="Edit">Edit
                    <form method="POST" className='form' action='/employees'>
                        <Dropdown.Item>
                        <Button as="input" type="button" value="Input" />
                        </Dropdown.Item>
                        <Dropdown.Item>
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
                    
                
                </Dropdown.Item></form>
                        </DropdownButton>

                    </ButtonGroup>
                    
                </Card.Body>
            </Card>
        )
    })
    /*<div className='col-sm-6'>
        <h3>
            Name: {employee.name}
        </h3>
        <h3>
            Job Title: {employee.job_title}
        </h3>
        <img id='index-img' src={employee.portrait} alt={employee.portrait} />
        <h3>
            Years of experience: {employee.years_of_experience}
        </h3>
        <h3>
            Weekly Salary: {employee.weekly_salary}
        </h3>
    </div>
)
})
*/

    //page render
    return (
        <main>
            <h1>Employee Management</h1>
            <div className="dropdown">
                <Button onClick={newEmployee} className='new-button dropdown-basic-button' variant="outline-secondary">New Employee</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='/employees'>
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