
import { useState } from 'react';
import './Counter.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Clock from './components/Clock';
import Step from './components/Step';




const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(true);
    const [step, setStep] = useState(1);


    const updateCounter = (action) => {
        if (action === 'add') {
            setCounter(counter + 1);
        } else if (action === 'reset') {
            setCounter(props.counterInitValue)
        } else if (action === 'zero') {
            setCounter(0)
        } else {
            setCounter(counter + step)
        };

    };

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel stepValue={step} updateCounter={updateCounter} />
            <Step step={step} setStep={setStep} />
            {showClock ? <Clock setShowClock={setShowClock} /> : <p><span className="clockControl" onClick={() => setShowClock(true)}>Pokaż zegar</span></p>}
        </div>
    );

};

export default Counter;
