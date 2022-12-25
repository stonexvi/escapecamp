import './App.css';
import CountdownTimer from './CountdownTimer';
import comingSoonImg from './comingSoon.png';

function App() {
  return (
    <div className='container'>
      <img className="comingSoon" src={comingSoonImg} alt="Coming Soon"/>
      <CountdownTimer/>
    </div>
  );
}

export default App;
