import React, { useEffect, useState, } from "react"
import { Button, ButtonGroup, Modal, Card } from 'react-bootstrap'
import '../App.css';
import NewEmployeeForm from './NewEmployeeForm'
import NewEditForm from "./NewEditForm";




function Employees() {

    //State and function for changing state on new (post) Form
    const [formShow, setFormShow] = useState(false);
    const [editFormShow, setEditFormShow] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const handleClose = () => setFormShow(false);
    const handleShow = () => setFormShow(true);
    const handleEditShow = () => setEditFormShow(true);
    const handleEditClose = () => setEditFormShow(false);

    //setting state for employee data
    const [employeesData, setEmployeesData] = useState([])
    const [newEmployee, setNewEmployee] = useState({
        name: '',
        job_title: '',
        years_of_experience: '',
        portrait: '',
        weekly_salary: ''
    })

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
        , []);

    const handleAdd = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/employees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee)
        })
        .then((response) => response.json())
        .then((data) => {
            setEmployeesData([...employeesData, data]);
            setNewEmployee({
                name: '',
                job_title: '',
                years_of_experience: '',
                portrait: '',
                weekly_salary: ''
            });
            setFormShow(false); 
        })
        .catch((error) => console.error(error));
    }    

    function deleteEmployee(employee_id) {
        fetch(`http://localhost:8080/employees/${employee_id}`, { method: 'DELETE' })
            .then(
                response => {
                    return (
                        window.location.reload()
                    )

                })
    }

    const handleEdit = (employee_id, updatedEmployee) => {
        fetch(`http://localhost:8080/employees/${employee_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(updatedEmployee),
        })
          .then(() => {
            const updatedEmployee = employeesData.map((employee) => {
              if (employee._id === employee_id) {
                return { ...employee, ...updatedEmployee };
              }
              return employee;
            });
            setEmployeesData(updatedEmployee);
            setEditFormShow(false);
            setSelectedEmployee(null);
          })
          .catch((error) => console.error(error));
      };  

    let employeeList = employeesData.map((employee, index) => {
        return (
            <Card className='employee-card' key={index} style={{ width: '18rem' }}>
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
                    
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup variant='secondary'>
                        <Button onClick={() => {
                            setSelectedEmployee(employee._id)
                            handleEditShow(true);
                        }} variant="success">Edit</Button>
                        <Button onClick={() => deleteEmployee(employee._id)} variant="danger">Delete</Button>
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1 className="componentText">Employee List</h1>
            <Button variant="warning" className='newFormButton' onClick={handleShow}>
                Add New Employee
            </Button>
            <Modal show={formShow} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Employee Information</Modal.Title>
                </Modal.Header>
                <Modal.Body><NewEmployeeForm key="employee._id" handleAdd={handleAdd} newEmployee={newEmployee}
                    setNewEmployee={setNewEmployee} formShow={formShow} setFormShow={setFormShow} />
                </Modal.Body>
            </Modal>

            <Modal show={editFormShow} onHide={() => {
                
            }}>
                <Modal.Header>
                    <Modal.Title>Edit </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedEmployee && (
                        <NewEditForm
                            selectedEmployee={selectedEmployee}
                            handleEdit={handleEdit}
                        />
                    )}
                </Modal.Body>
                    </Modal>
            <div className='row'>
                {employeeList}
            </div>

        </main>
    )
}

export default Employees