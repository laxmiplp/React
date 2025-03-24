import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { empData } from './Data/empData'
const App = () => {
  // const empData = [
  //   { id: '1001', empName: 'Jhon', empAge: '24', dep: 'Customer Support', exp: '7 yrs', sal: '50k', isPresent: true },
  //   { id: '1002', empName: 'Rosy', empAge: '30', dep: 'Sales', exp: '10 yrs', sal: '90k', isPresent: true },
  //   { id: '1003', empName: 'Jack', empAge: '29', dep: 'Software', exp: '2 yrs', sal: '30k', isPresent: false },
  //   { id: '1004', empName: 'Robert', empAge: '27', dep: 'Research', exp: '12 yrs', sal: '80k', isPresent: false },
  //   { id: '1005', empName: 'Ricky', empAge: '35', dep: 'HR', exp: '5 yrs', sal: '70k', isPresent: true },
  //   { id: '1006', empName: 'Jasmine', empAge: '31', dep: 'Finance', exp: '8 yrs', sal: '60k', isPresent: false },
  //   { id: '1007', empName: 'Sherin', empAge: '30', dep: 'Operations Management', exp: '9 yrs', sal: '85k', isPresent: true },
  // ]
  const empfilter = empData.filter(emp => emp.isPresent)
  console.log(empfilter)
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>isPresent</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {empData.map((emp, index) => {
            return <tr key={emp.id || index}>
              <td>
                {emp.id}
              </td>
              <td>
                {emp.empName}
              </td>
              <td>
                {emp.empAge}
              </td>
              <td>
                {emp.dep}
              </td>
              <td>
                {emp.exp}
              </td>
              <td>
                {emp.sal}
              </td>
              <td>
                {emp.isPresent ? 'Present' : 'Absent'}

              </td>
              <td>
                <button className='btn btn-primary me-4'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
