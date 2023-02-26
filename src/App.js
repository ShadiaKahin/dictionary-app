import Words from './components/Words';
import Hero from './components/Hero';
import './App.css'

function App() {

  return (

    <div className="App">
      <Hero />
      <div className='title-container'>
        <h2 className='title'>Free Dictionary</h2>
      </div>
      <div className='layout'>
        <Words />
      </div>
    </div>
  );
}

export default App;
