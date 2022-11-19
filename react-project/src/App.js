import './style.css';

import Navbar from './components/Navbar/Navbar';
import Tasklist from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Tasklist title = "To do"/>
        <Tasklist title = "Doing"/>
        <Tasklist title = "Done"/>
      </div>
    </div>
  );
}

export default App;
