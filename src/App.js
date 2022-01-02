import React from "react";
import TimeControl from "./TimeControl";
import Timer from "./Timer";
import Buttons from "./Buttons";
import { useState, useEffect } from "react";

const App = () => {
    const audioSource =
        "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [time, setTime] = useState(25*60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const [audio, setAudio] = useState(new Audio(audioSource));

    const playBreakSound = () => {
        audio.currentTime = 0;
        audio.play();
    };

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return (
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds)
        );
    };

    return (
        <div id="container">
            <h1>25 + 5 Clock</h1>
            <TimeControl
                timerOn={timerOn}
                formatTime={formatTime}
                breakLength={breakLength}
                setBreakLength={setBreakLength}
                sessionLength={sessionLength}
                setSessionLength={setSessionLength}
                setTime={setTime}
            ></TimeControl>
            <Timer
                time={time}
                formatTime={formatTime}
                setTime={setTime}
                timerOn={timerOn}
            ></Timer>
            <Buttons
                onBreak={onBreak}
                setOnBreak={setOnBreak}
                timerOn={timerOn}
                setTimerOn={setTimerOn}
                time={time}
                setTime={setTime}
                breakLength={breakLength}
                setBreakLength={setBreakLength}
                sessionLength={sessionLength}
                setSessionLength={setSessionLength}
                playBreakSound={playBreakSound}
            ></Buttons>
        </div>
    );
};

export default App;
