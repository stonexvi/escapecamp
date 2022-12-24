import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
    <div className="timer">
        <span>{days} : {hours} : {minutes} : {seconds}</span>
    </div>
    );
};

function CountdownTimer() {
    return <Countdown 
        className="timer" 
        date={new Date('2023-06-01T00:00:00')}
        renderer={renderer}
    />;
}

export default CountdownTimer;