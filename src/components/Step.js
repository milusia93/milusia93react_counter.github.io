import './Step.css';

const Step = (props) => {

    const changingSteps = (e) => {
        props.setStep(e.target.valueAsNumber);
    };

    return (
        <div className="step">
            <span className="stepLabel">Step:</span>
            <input type="number" min="1" value={props.step} onChange={changingSteps} />
        </div>

    );
};

export default Step;