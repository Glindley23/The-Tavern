import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './App.css';
//Component Import
import Home from './Components/Home';
import Food from './Components/Food';
import Drink from './Components/Drink';
import Employees from './Components/Employees';
import Equipment from './Components/Equipment';
import Rooms from './Components/Rooms';
import QuestBoard from './Components/QuestBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar bg="light" expand="lg">
            <Nav className='Nav' defaultActiveKey='/'>
                <Link to='/'>Home</Link>
                <Link to='/employees'>Employees</Link>
                <Link to='/food'>Food Inventory</Link>
                <Link to='/drink'>Drink Inventory</Link>
                <Link to='/equipment'>Equipment</Link>
                <Link to='/rooms'>Rooms</Link>
                <Link to='/questboard'>Quest Board</Link>
            </Nav>
          </Navbar>
          </Container>
          <div className='display'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/food' element={<Food />} />
              <Route path='/drink' element={<Drink />} />
              <Route path='/equipment' element={<Equipment />} />
              <Route path='/rooms' element={<Rooms />} />
              <Route path='/questboard' element={<QuestBoard />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
