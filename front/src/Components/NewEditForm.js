import  {React, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import '../App.css';

function NewEditForm(props) {
    const [employeeName, setName] = useState([props.employees.name]);
    const [jobTitle, setJobTitle] = useState([props.employees.job_title]);
    const [experience, setExperience] = useState([props.employees.years_of_experience]);
    const [employeePortrait, setPortrait] = useState([props.employees.portrait]);
    const [salary, setSalary] = useState([props.employees.weekly_salary]);

const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmployee = {
      name: employeeName,
      job_title: jobTitle,
      years_of_experience: experience,
      portrait: employeePortrait,
      weekly_salary: salary,
    };
    props.handleEdit(props.employees._id, updatedEmployee);
    };
    
    const handleClick = (event) => {
        event.stopPropagation();
      }

    //page render
    return (
        <div onClick={handleClick}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="employeeName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={employeeName}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
    
            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
              />
            </Form.Group>
    
            <Form.Group controlId="experience">
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                type="number"
                value={experience}
                onChange={(event) => setExperience(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="employeePortrait">
              <Form.Label>Portrait</Form.Label>
              <Form.Control
                type="url"
                value={employeePortrait}
                onChange={(event) => setPortrait(event.target.value)}
              />
            </Form.Group>
    
            <Form.Group controlId="">
              <Form.Label>Weekly Salary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            <Button variant="secondary" href="http://localhost:3000/employees">
            Cancel
          </Button>
          </Form>
        </div>
      );
    }
    
    export default NewEditForm;