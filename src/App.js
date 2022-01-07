import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App(props) {
  useEffect(() => {
    console.log('reloaded')
  })
  return (
    <div className="App">
      <Link to="login" style={{ paddingRight: "10px" }}>Login</Link>
      <Link to="home">Home</Link>
      <Outlet />
    </div>
  );
}

export default App;
