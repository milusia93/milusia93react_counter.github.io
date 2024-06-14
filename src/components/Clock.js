import { useEffect, useState } from "react";

const Clock = (props) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        console.log("zamontowano");
        const interval = setInterval(() => {
            console.log("wykonuje interwal")
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (<p>
        {time}{"  "}
        <span className="clockControl" onClick={() => props.setShowClock(false)}>x</span>
    </p>
    );
};

export default Clock;