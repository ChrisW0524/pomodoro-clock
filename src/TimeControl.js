import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TimeControl = (props) => {
    const {
        timerOn,
        breakLength,
        setBreakLength,
        sessionLength,
        setSessionLength,
        setTime,
    } = props;

    const increment = (value) => {
        if (value + 1 > 60) {
            return value;
        }
        return value + 1;
    };

    const decrement = (value) => {
        if (value - 1 < 1) {
            return value;
        }
        return value - 1;
    };

    const changeTime = (amount, type) => {
        if (type == "break") {
            if (breakLength + amount > 60 || breakLength + amount < 1) {
                return;
            }
            setBreakLength((prev) => {
                return prev + amount;
            });
        } else {
            if (sessionLength + amount > 60 || sessionLength + amount < 1) {
                return;
            }
            setSessionLength((prev) => {
                return prev + amount;
            });
            if (!timerOn) {
                setTime((prev) => {
                    return prev + amount * 60;
                });
            }
        }
    };

    return (
        <div id="controller-container">
            <div className="control-container">
                <h3 id="break-label">Break Length</h3>
                <div id="break-container">
                    <FaArrowUp
                        id="break-increment"
                        onClick={() => {
                            changeTime(1, "break");
                        }}
                    />
                    <p id="break-length">{breakLength}</p>
                    <FaArrowDown
                        id="break-decrement"
                        onClick={() => {
                            changeTime(-1, "break");
                        }}
                    />
                </div>
            </div>
            <div className="control-container">
                <h3 id="session-label">Session Length</h3>
                <div id="session-container">
                    <FaArrowUp
                        id="session-increment"
                        onClick={() => {
                            changeTime(1, "session");
                        }}
                    />
                    <p id="session-length">{sessionLength}</p>
                    <FaArrowDown
                        id="session-decrement"
                        onClick={() => {
                            changeTime(-1, "session");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TimeControl;
