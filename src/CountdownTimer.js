import Countdown from 'react-countdown';

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
    <table>
        <tbody>
            <tr>
                <td className="timer">{days}</td>
                <td className="timer">:</td>
                <td className="timer">{hours}</td>
                <td className="timer">:</td>
                <td className="timer">{minutes}</td>
                <td className="timer">:</td>
                <td className="timer">{seconds}</td>
            </tr>
            <tr>
                <td className='timerLabel'>DAYS</td>
                <td></td>
                <td className='timerLabel'>HOURS</td>
                <td></td>
                <td className='timerLabel'>MINUTES</td>
                <td></td>
                <td className='timerLabel'>SECONDS</td>
            </tr>
        </tbody>
    </table>
    );
};

function CountdownTimer() {
    return <Countdown 
        date={new Date('2023-06-01T00:00:00')}
        renderer={renderer}
    />;
}

export default CountdownTimer;