import './App.css';
import CountdownTimer from './CountdownTimer';
import comingSoonImg from './comingSoon.png';

function App() {
  return (
    <div className='container'>
      <img className="comingSoon" src={comingSoonImg} alt="Coming Soon"/>
      <CountdownTimer/>
      <div>
        <span className='timerLabel'>DAYS</span>
        <span className='timerLabel'>HOURS</span>
        <span className='timerLabel'>MINUTES</span>
        <span className='timerLabel'>SECONDS</span>
      </div>
    </div>
  );
}

export default App;
