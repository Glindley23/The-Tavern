import React, { useEffect, useState } from "react"

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
            <div className='col-sm-6'>
                <h2>
                    {employee.name}
                </h2>
                <p>
                    {employee.job_title}
                </p>
                <img id='index-img' src={employee.portrait} alt={employee.portrait} />
                <p>
                    Years of experience: {employee.years_of_experience}
                </p>
                <p>
                    Weekly Salary: {employee.weekly_salary}
                </p>
            </div>
        )
    })
    //page render
    return (
        <main>
            <h1>Employee Management</h1>
            <button className='new'>New Employee</button>
            <form method="POST" action='/employees'>
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
            
            <div className='row'>
                {employeeList}
            </div>
        </main>
    )
}

export default Employees