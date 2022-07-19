import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div  className='content'>
        <HomePage />

      </div>
    </div>
  );
}

export default App;
