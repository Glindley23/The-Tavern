import React from "react";
import { Form, Button } from 'react-bootstrap';
import '../App.css';

function NewForm({ handleAdd, newEmployee, setNewEmployee }) {
    const handleSubmit = (event) => {
        handleAdd(event);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee((employeeList) => ({
            ...employeeList,
            [name]: value,
        }))
    }
    //page render
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter name"
                name='name'
                value={newEmployee.name}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter Job"
                name='job_title'
                value={newEmployee.job_title}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formYearsOfExperience">
                <Form.Label>Years of Experience</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter years of experience"
                name='years_of_experience'
                value={newEmployee.years_of_experience}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPortrait">
                <Form.Label>Portrait</Form.Label>
                <Form.Control 
                type="url" 
                placeholder="Enter an updated portrait"
                name='portrait'
                value={newEmployee.portrait}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWeeklySalary">
                <Form.Label>Weekly Salary</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter weekly salary"
                    name='weekly_salary'
                    value={newEmployee.weekly_salary}
                    onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            <Button variant='danger' href="http://localhost:3001/employees">
                Cancel
            </Button>
        </Form>
    )
}

export default NewForm