import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { MdRestartAlt } from "react-icons/md";

const Buttons = (props) => {
    const {
        onBreak,
        setOnBreak,
        timerOn,
        setTimerOn,
        time,
        setTime,
        sessionLength,
        setSessionLength,
        breakLength,
        setBreakLength,
        playBreakSound,
    } = props;

    const controlTime = () => {
        console.log(timerOn);
        let second = 250;
        let date = new Date().getTime();
        let nextDate = new Date().getTime() + second;
        let onBreakVariable = onBreak;

        if (!timerOn) {
            let interval = setInterval(() => {
                date = new Date().getTime();
                if (date > nextDate) {
                    setTime((prev) => {
                        console.log(prev);
                        if (prev <= 0 && !onBreakVariable) {
                            playBreakSound();
                            onBreakVariable = true;
                            setOnBreak(true);
                            const temp = sessionLength*30;
                            console.log(temp);
                            return temp;
                        } else if (prev <= 0 && onBreakVariable) {
                            onBreakVariable = false;
                            setOnBreak(false);
                            const temp = breakLength * 60;
                            console.log(temp);
                            return temp;
                        }
                        return prev - 1;
                    });

                    nextDate += second;
                }
            }, 1000);
            localStorage.clear();
            localStorage.setItem("interval-id", interval);
        }
        if (timerOn) {
            clearInterval(localStorage.getItem("interval-id"));
        }
        setTimerOn(!timerOn);
    };

    const reset = () => {
        setTimerOn(true);
        setBreakLength(5);
        setSessionLength(25);
        setTime(25 * 60);
    };

    return (
        <div id="buttons-container">
            <div
                id="start_stop"
                onClick={() => {
                    controlTime();
                }}
            >
                {timerOn ? (
                    <BsPauseFill></BsPauseFill>
                ) : (
                    <BsPlayFill></BsPlayFill>
                )}
            </div>
            <MdRestartAlt id="reset" onClick={reset}></MdRestartAlt>
        </div>
    );
};

export default Buttons;
