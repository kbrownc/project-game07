import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => setCustomers(customers));
    console.log('Customers fetched...', customers);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Customers</h2>
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
