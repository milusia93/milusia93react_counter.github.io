const Display = (props) => {
    return(
        <p>
            <span>Counter: </span><span className="displayNumber">{props.counter}</span>
        </p>
        ); 
}

export default Display;