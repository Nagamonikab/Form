import React, { useState, useEffect } from 'react';

const Form = ({ currentItem, onSave }) => {
  const [item, setItem] = useState({ id: '', name: '' ,age:'',email:'',mobilenumber:'',gender:'',education:'',hobbies:'',date:''});
  const[Error, setErrors]= useState({});
  const [message, setMessage] = useState('');


  useEffect(() => {
    if (currentItem) {
      setItem(currentItem);
    } else {
      setItem({ id: '', name: '' ,age:'',email:'',mobilenumber:'',gender:'',education:'',hobbies:'',date:''});
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value,type ,checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setItem({ ...item, hobbies: [...item.hobbies, value] });
      } else {
        setItem({ ...item, hobbies: item.hobbies.filter(hobby => hobby !== value) });
      }
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
    onSave(item);
    setItem({ id: '', name: '' ,age:'',email:'',mobilenumber:'',gender:'',education:'',hobbies:'',date:''});
    setErrors({});
    setMessage('Thanks for your response!')  
    setTimeout(() => {
      setMessage('');
    }, 3000);                         
    }
  };

  const validate = () => {
    const newErrors = {};
    //id validation
    if (!item.id.trim()) {
      newErrors.id = 'ID is required !';
    } else if (item.id.length < 1 || item.id.length > 5) { 
      newErrors.id = 'Invalid id * ';
    }
    //name
    if (!item.name.trim()) {
      newErrors.name = 'Name is required !';
    } else if (item.name.length < 3 || item.name.length > 50) {
      newErrors.name = 'Invalid name *';
    }
    //age
    if (!item.age.trim()) {
      newErrors.age = 'Age is required !';
    } else if (item.age <10 || item.age > 100) {
      newErrors.age = 'Invalid age *';
    }
    //email
    if (!item.email.trim()) {
      newErrors.email = 'Email is required !';
    } else if (!/\S+@\S+\.\S+/.test(item.email)) {
      newErrors.email = 'Email is invalid *';
    }else if (item.email.length < 5 || item.email.length > 50) {
      newErrors.email = 'Invalid email *';
    }
     //mobile number
    if (!item.mobilenumber.trim()) {
      newErrors.mobilenumber = 'Mobile number is required !';
    } else if (!/^\d{10}$/.test(item.mobilenumber)) {
      newErrors.mobilenumber = 'Mobile number must be a 10-digit number.';
    }
    
    if (!item.gender) newErrors.gender = 'Gender is required !';
    if (!item.education) newErrors.education = 'Education is required !';
    if (item.hobbies.length ===0) newErrors.hobbies = 'At least one hobby is required !';
    if (!item.date) newErrors.date = 'Date is required !';
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <label>ID</label>
        <input type="number" className="form-control" name="id" value={item.id}  onChange={handleChange} />
        {Error.id && <small className="text-danger">{Error.id}</small>}
      </div>


      <div className="mt-3">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={item.name}  onChange={handleChange} />
        {Error.name && <small className="text-danger">{Error.name}</small>}
      </div>


      <div className="mt-3">
        <label for="age">Age</label>
        <input type="number" className="form-control" name="age" value={item.age} onChange={handleChange} />
        {Error.age && <small className="text-danger">{Error.age}</small>}
      </div>


      <div className="mt-3">
        <label>Data Of Birth</label>
        <input type="date" className="form-control" name="date" value={item.date} onChange={handleChange} />
        {Error.date && <small className="text-danger">{Error.date}</small>}
      </div>


      <div className="mt-3">
        <label>EmailId</label>
        <input type="text" className="form-control" name="email" value={item.email} onChange={handleChange} />
        {Error.email && <small className="text-danger">{Error.email}</small>}
      </div>


      <div className="mt-3">
        <label>MobileNumber</label>
        <input type="number" className="form-control" name="mobilenumber" value={item.mobilenumber} onChange={handleChange} />
        {Error.mobilenumber && <small className="text-danger">{Error.mobilenumber}</small>}
      </div>

      <div className="mt-3">
      <label>Gender</label> 
      <div class="form-check">
          <input class="form-check-input" type="radio"  name="gender" id="flexRadioDefault1" value="male" checked={item.gender==='male'} onChange={handleChange}/>
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
      </div>
      <div class="form-check">
          <input class="form-check-input" type="radio" value="female" name="gender" id="flexRadioDefault2" checked={item.gender==='female'} onChange={handleChange}/>
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
      </div>
      {Error.gender && <small className="text-danger">{Error.gender}</small>}
      </div>


      <div className="mt-3">
        <label>Education</label>
        <select className="form-control" name="education" value={item.education} onChange={handleChange} >
        <option value="">Select Education Level</option>
        <option value="secondary">Secondary school</option>
        <option value="ug">UG in Arts/Engineering</option>
        <option value="pg">PG in Arts/Engineering</option>
        </select>
        {Error.education && <small className="text-danger">{Error.education}</small>}
      </div>

      <div className="mt-3">
      <label>Hobbies</label><br></br>
      <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="hobbies" value="dancing" checked={item.hobbies.includes('dancing')} onChange={handleChange}/>
           <label class="form-check-label" for="inlineCheckbox1">Dancing</label>
      </div>
      <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="hobbies" value="drawing" checked={item.hobbies.includes('drawing')} onChange={handleChange}/>
           <label class="form-check-label" for="inlineCheckbox2">Drawing</label>
      </div>
      <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="hobbies" value="reading" checked={item.hobbies.includes('reading')} onChange={handleChange}/>
           <label class="form-check-label" for="inlineCheckbox3">Reading</label>
      </div>
      <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="hobbies" value="handicraft" checked={item.hobbies.includes('handicraft')} onChange={handleChange}/>
           <label class="form-check-label" for="inlineCheckbox3">Handicraft</label>
      </div>
      <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name="hobbies" value="gardening"  checked={item.hobbies.includes('gardening')} onChange={handleChange}/>
           <label class="form-check-label" for="inlineCheckbox3">Gardening</label>
      </div>
      {Error.hobbies && <small className="text-danger">{Error.hobbies}</small>}
      </div>
      

      <button type="submit" className="btn btn-success">Save</button>
      {message && <span className="ml-3 text-success">{message}</span>}
    </form>
  );
};

export default Form;
