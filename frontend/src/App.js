import './App.css';
import './Components/Navbar.js';
//import Navbar from './Components/Navbar.js';

const App = () => {
  return (
    <>
      <div className="header">
        <h2>Header</h2>
      </div>

      <div className="row">
        <div className="column side">Column</div>
        <div className="column middle">Column</div>
        <div className="column side">Column</div>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </>
  );
}

export default App;
