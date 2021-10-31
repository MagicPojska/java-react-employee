import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllEmployees } from '../services/EmployeeService'

export const ListEmployee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const response = async () => {
            const res = await getAllEmployees();
            setEmployees(res.data)
        }
        response();
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <Link to='/add-employee' className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
