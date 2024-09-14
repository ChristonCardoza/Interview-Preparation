import React, { useState, useRef } from 'react'

import "./timer.css";

const Timer = () => {

    const initalValues = {
        hours: "00",
        minutes: "00",
        seconds: "00"
    }

    const [formData, setFormData] = useState(initalValues);
    const [showStart, setShowStart] = useState(true);

    const interval = useRef();;

    const changeInput = (e) => {
       const {name, value} =  e.target;

       setFormData( {
        ...formData,
        [name]: value.slice(0,2)
       })
    }

    const stopTimer = () => {
        setShowStart( prev => !prev)
        clearInterval(interval.current);
    }

    const startTimer = () => {
  
        setShowStart( prev => !prev)

        interval.current = setInterval(() => {
            timer()
        }, 1000)
    }

    const resetTimer = () => {
        setFormData(initalValues);
        stopTimer()
    }

    const timer = () => {

        setFormData(prevFormData => {
            let {hours, minutes, seconds} = prevFormData;

            hours = Number(hours);
            minutes = Number(minutes);
            seconds = Number(seconds);

            console.log("hours == 0 && minutes == 0 && seconds == 0", hours == 0 && minutes == 0 && seconds == 0)

            if (hours == 0 && minutes == 0 && seconds == 0) {
                stopTimer();
            }else if (seconds > 0) {
                seconds -= 1;
            } else if (minutes > 0) {
                minutes -= 1;
                seconds = 59;
            } else if (hours > 0) {
                hours -= 1;
                minutes = 59;
                seconds = 59;
            }

            return { 
                hours: hours.toString().padStart(2, '0'), 
                minutes: minutes.toString().padStart(2, '0'), 
                seconds: seconds.toString().padStart(2, '0')
            }

        })
    }


  return (
    <form className="container" name="timerForm" >

        <div className="timer_header">
            <h1 className='timer_header-title'> CountDown Timer</h1>
        </div>

        <div className="timer_lables">
            <p className="timer_label">Hours</p>
            <p className="timer_label">Minutes</p>
            <p className="timer_label">Seconds</p>
        </div>

        <div className="timer_values">
            <input 
                className='timer_values_hours'
                type="number" 
                onChange={changeInput}
                value={formData.hours}
                placeholder='00'
                name="hours"
            />
               
            <input 
                className='timer_values_minutes'
                type="number" 
                onChange={changeInput}
                value={formData.minutes}
                placeholder='00'
                name="minutes"
            />

            <input 
                className='timer_values_seconds'
                type="number" 
                onChange={changeInput}
                value={formData.seconds}
                placeholder='00'
                name="seconds"
            />
        </div>

        <div className="timer_buttons">
            <button type='button' className='timer_button-start' onClick={startTimer} style={{display: showStart ? "initial" : "none"}}>Start</button>
            <button type='button' className='timer_button-stop' onClick={stopTimer} style={{display: !showStart ? "initial" : "none"}}>Stop</button>
            <button type='button' className='timer_button-reset' onClick={resetTimer}>reset</button>
        </div>
    </form>
  )
}

export default Timer