import {useNavigate} from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to User Form</h1>
      <div className ="button-container">
      <p>Click to Enter</p>
      <button className="user-button" onClick={() => navigate('/users')}>User</button>
      </div>
    </div>
  );
}

export default App;
