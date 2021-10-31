import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteEmployee, getAllEmployees } from '../services/EmployeeService'

export const ListEmployee = () => {
    const [employees, setEmployees] = useState([])

    const response = async () => {
        const res = await getAllEmployees();
        setEmployees(res.data)
    }

    useEffect(() => {
        response();
    }, [])

    const deleteEmp = async (id) => {
        await deleteEmployee(id)
        response();
    }

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
                        <th>Actions</th>
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
                                <td>
                                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className='btn btn-danger ml-5' style={{ marginLeft: "10px" }} onClick={() => deleteEmp(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
