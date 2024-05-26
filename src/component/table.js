import React from 'react';

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Date Of Birth</th>
          <th>EmailId</th>
          <th>MobileNumber</th>
          <th>Gender</th>
          <th>Education</th>
          <th>Hobbies</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.date}</td>
            <td>{item.email}</td>
            <td>{item.mobilenumber}</td>
            <td>{item.gender}</td>
            <td>{item.education}</td>
            <td>{item.hobbies}</td>
            

            <td>
              <button className="btn btn-primary me-2" onClick={() => onEdit(item)}>Edit</button>
              <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
