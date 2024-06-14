import './ButtonsPanel.css'

const ButtonsPanel = (props) => {

    return (
        <div className="buttonsPanel">
            <button onClick={() => props.updateCounter('add')}>Add</button>
            <button onClick={() => props.updateCounter('reset')}>Reset</button>
            <button onClick={() => props.updateCounter('zero')}>Set 0</button>
            <button onClick={() => props.updateCounter('step')}>Icrease by {props.stepValue}</button>
        </div>
    );
};

export default ButtonsPanel;