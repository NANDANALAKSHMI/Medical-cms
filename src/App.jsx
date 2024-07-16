import { useState } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import { Box } from '@mui/material';
import Dashboard from './Dashboard/container/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Shared/Navebar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>

    <Routes>
     
      <Route
        path='/*'
        element={
          <Dashboard/>
        }
      />
    </Routes>
  </Router>

  );
}

export default App;
