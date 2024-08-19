import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' Component={LoginPage} />
        <Route path='/signup' Component={SignupPage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
