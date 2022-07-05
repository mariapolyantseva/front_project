
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Switcher from './components/Switcher';

function App() {
  return (
    <div>
      <Router >
        <Switcher />
      </Router>
    </div>
  );
}

export default App;
