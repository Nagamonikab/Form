import React, { useState } from 'react';
import Table from './component/table';
import Form from './component/form';

const App = () => {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const handleSave = (item) => {
    if (currentItem) {
      setData(data.map((d) => (d.id === item.id ? item : d)));
    } else {
      setData([...data, item]);
    }
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <h1 className="mt-5">CRUD Table</h1>
      <div className="row">
        <div className="col-md-8">
          <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
       <div className="col-md-1"></div>
        <div className="col-md-3">
          <Form currentItem={currentItem} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default App;
