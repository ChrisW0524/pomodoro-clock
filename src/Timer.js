import React from "react";

const Timer = (props) => {
    const { time, setTime, isPlaying, formatTime } = props;

    return (
        <div id="timer-container">
            <h3 id="timer-label">Session</h3>
            <h1 id="time-left">{formatTime(time)}</h1>
        </div>
    );
};

export default Timer;
