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
                <div className='row'>
                    {employeeList}

                </div>
            </main>
    )
}

export default Employees