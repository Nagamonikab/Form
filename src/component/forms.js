import React, { useState, useEffect } from 'react';

const Form = ({ currentItem, onSave }) => {
  const [item, setItem] = useState({ id: '', name: '', email: '', mobilenumber: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    } else {
      setItem({ id: '', name: '', email: '', mobilenumber: '' });
    }
  }, [currentItem]);

  const validate = () => {
    const newErrors = {};

    if (!item.id.trim()) newErrors.id = 'ID is required.';
    if (!item.name.trim()) newErrors.name = 'Name is required.';
    if (!item.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(item.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!item.mobilenumber.trim()) {
      newErrors.mobilenumber = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(item.mobilenumber)) {
      newErrors.mobilenumber = 'Mobile number must be a 10-digit number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(item);
      setItem({ id: '', name: '', email: '', mobilenumber: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={item.id}
          onChange={handleChange}
        />
        {errors.id && <small className="text-danger">{errors.id}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={item.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="mobilenumber">Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          id="mobilenumber"
          name="mobilenumber"
          value={item.mobilenumber}
          onChange={handleChange}
        />
        {errors.mobilenumber && <small className="text-danger">{errors.mobilenumber}</small>}
      </div>
      <button type="submit" className="btn btn-success">Save</button>
    </form>
  );
};

export default Form;
