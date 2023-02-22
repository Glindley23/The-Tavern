import React, { useEffect, useState, } from "react"
import { Button, ButtonGroup, Modal, Card } from 'react-bootstrap'
import '../App.css';



function deleteEmployee(employee_id) {
    fetch(`http://localhost:8080/employees/${employee_id}`, { method: 'DELETE' })
        .then(
            response => {
                return (
                    window.location.reload()
                )

            })
}


function Employees() {

    //State and function for changing state on new (post) Form
    const [formShow, setFormShow] = useState(false);
    //const handle
    const handleClose = () => setFormShow(false);
    const handleShow = () => setFormShow(true);


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

        , [])
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
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={formShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        Add Employee
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='row'>
                {employeeList}
            </div>

        </main>
    )
}

export default Employees