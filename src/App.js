import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Tabs from './components/Tabs';
function App() {
  return (
    <div className="App">
      <div className='headerer'>
       <Header />

      </div>
      <div className='taber'>
       <Tabs />

      </div>
      <div className='contacter'> 
      <Contact />

      </div>

    </div>
  );
}

export default App;
