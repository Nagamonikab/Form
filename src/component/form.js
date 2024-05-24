import React, { useState, useEffect } from 'react';

const Form = ({ currentItem, onSave }) => {
  const [item, setItem] = useState({ id: '', name: '' ,email:'',mobilenumber:''});

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    } else {
      setItem({ id: '', name: '' ,email:'',mobilenumber:''});
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item);
    setItem({ id: '', name: '' ,email:'',mobilenumber:''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>ID</label>
        <input type="text" className="form-control" name="id" value={item.id} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={item.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>EmailId</label>
        <input type="text" className="form-control" name="email" value={item.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>MobileNumber</label>
        <input type="number" className="form-control" name="mobilenumber" value={item.mobilenumber} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};

export default Form;
