import React from "react";

const ToDoList = () => {
    const [students, setStudents] = React.useState([]);
    const [student, setStudent] = React.useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        age: 0,
    });
    const [editIndex, setEditIndex] = React.useState(null);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
        console.log("Change button clicked");
    };
    const handleAdd = (e) => {
        e.preventDefault();
        setStudents([...students, student]);
        if (editIndex !== null) {
            const updated = [...students];
            updated[editIndex] = student;
            setStudents(updated);
            setEditIndex(null);
        } else {
            setStudents([...students, student]);
        }

        console.log("Add button clicked");
    };
    // Handle edit
    const handleEdit = (index) => {
        setStudent(students[index]);
        setEditIndex(index);
    };

    // Handle delete
    const handleDelete = (email) => {
        const deleteData = students.filter(data => data.email !== email)
        setStudents(deleteData);
    };
    return (
        <>
            <h1>To Do List Application</h1>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <select
                    id="gender"
                    name="gender"
                    placeholder="Choose.."
                    onChange={handleChange}
                >
                    <option value={""}>Select</option>
                    <option value={"female"}>Female</option>
                    <option value={"male"}>Male</option>
                    <option value={"other"}>Other</option>
                </select>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />
                <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
            </form>
            {students.length > 0 && (
                <table border={1} cellPadding={5} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 &&
                            students.map((data, index) => (
                                <tr key={data.id || index}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.age}</td>
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Edit</button>

                                        <button onClick={() => handleDelete(data.email)} type="delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </>
    );
};
export default ToDoList;
