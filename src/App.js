import logo from './logo.svg';
import './css/global.css';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import TodaysPlan from './components/TodaysPlan';

function App() {
  return (
    <div className = "page">
      <div className = "ToDoContainer">
        <NavBar/>
        <ToDoList/>
        <TodaysPlan/>
        
      </div>
    </div>

  );
}

export default App;
