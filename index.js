const getTime = () => {
    const time = document.querySelector('#time');
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time.innerHTML = `${hours} : ${addLeadingZeros(minutes,2)} : ${addLeadingZeros(seconds,2)}`;
}

const getDate = () => {
    const date = document.querySelector('#date');
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    date.innerHTML = `${addLeadingZeros(day,2)} - ${addLeadingZeros(month+1,2)} - ${addLeadingZeros(year,4)}`
}

//adds zeros in front of a number (number, number of digits)
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

const myInterval = () => setInterval(()=> {
    getTime();
    getDate();
},1000)

/*chronometer page*/

const chronometerFunction = () => {
    let seconds=0;
    let minutes=0;
    let hours=0;
    //boton listener
    chronoButtonStart.addEventListener('click', ()  => {
        chronoButtonStart.innerHTML = "Start!"
        //starting interval
        const chronoInterval = setInterval(() => {
            seconds++;
            if(seconds===60) {
                seconds = 0;
                minutes++;
                chronoMinutes.innerHTML = `${addLeadingZeros(minutes, 2)}`;
            }
            if(minutes===60) {
                minutes = 0;
                hours++;
                chronoHours.innerHTML = `${addLeadingZeros(hours, 2)}`;
            }
            chronoSeconds.innerHTML = `${addLeadingZeros(seconds, 2)}`;
        },1000);
        chronoButtonStart.disabled = true;//disabling the button

        //boton stops listener
        chronoButtonStop.addEventListener('click', () => {
            clearInterval(chronoInterval);
            chronoButtonStart.disabled = false;
            chronoButtonStart.innerHTML = "Continue!"
        });


        //boton resets listener
        chronoButtonReset.addEventListener('click', () => {
            clearInterval(chronoInterval);
            chronoButtonStart.disabled = false;
            chronoButtonStart.innerHTML = "Start!"
            seconds=0;
            minutes=0;
            hours=0;
            chronoHours.innerHTML = `${addLeadingZeros(hours, 2)}`;
            chronoMinutes.innerHTML = `${addLeadingZeros(minutes, 2)}`;
            chronoSeconds.innerHTML = `${addLeadingZeros(seconds, 2)}`;
        });
    
    });
};




/*timer page*/
let timerInterval;
    
const startTimer = () => {
    let hours = timerHours.value;
    let minutes = timerMinutes.value;
    let seconds = timerSeconds.value;
    timerButtonContinue.classList.add('inactive');

    if(seconds==='' || minutes==='' || hours==='') {
        timerAdvertise.classList.remove('inactive');
    } else {
        timerAdvertise.classList.add('inactive');

        timerButtonStart.disabled = true;
        timerButtonStop.disabled = false;
        timerButtonReset.disabled = false;

        timerHours.classList.add('inactive');
        newTimerHours.innerHTML = `${addLeadingZeros(hours, 2)}`;
        newTimerHours.classList.remove('inactive');
        timerMinutes.classList.add('inactive');
        newTimerMinutes.innerHTML = `${addLeadingZeros(minutes, 2)}`;
        newTimerMinutes.classList.remove('inactive');
        timerSeconds.classList.add('inactive');
        newTimerSeconds.innerHTML = `${addLeadingZeros(seconds, 2)}`;
        newTimerSeconds.classList.remove('inactive');
        timerInterval = setInterval(makeTimerInteval,1000);    
    }   

}

const continueTimer = () => {
    timerInterval = setInterval(makeTimerInteval,1000);
    timerButtonStart.classList.add('inactive');
    timerButtonContinue.classList.remove('inactive');
    timerButtonStart.disabled = true;
    timerButtonContinue.disabled = true;
}

const makeTimerInteval = () => {
    let hours = newTimerHours.innerHTML;
    let minutes = newTimerMinutes.innerHTML;
    let seconds = newTimerSeconds.innerHTML;

    console.log(hours, minutes, seconds);
    if (parseInt(seconds)===0 && parseInt(minutes)===0 && parseInt(hours)===0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerButtonStart.disabled = true;
        timerButtonStop.disabled = true;
        timerButtonReset.disabled = false;
        timerButtonStart.innerHTML = "Start"
    } else {
        // console.log("continuar tiempo");
        seconds--;
        if(parseInt(seconds) < 0) {
            seconds = 59; 
            minutes--;
            if(parseInt(minutes) < 0) {
                minutes = 59;
                hours--;
                if (parseInt(hours) < 0) {
                    hours = 0
                }
            }
        }
        newTimerSeconds.innerHTML = `${addLeadingZeros(seconds, 2)}`; 
        newTimerMinutes.innerHTML = `${addLeadingZeros(minutes, 2)}`; 
        newTimerHours.innerHTML = `${addLeadingZeros(hours, 2)}`; 
    }
}

const stopTimer = () => {
    clearInterval(timerInterval);
    // timerInterval = null;
    timerButtonStart.disabled = false;
    timerButtonStop.disabled = true;
    timerButtonReset.disabled = false;
    timerButtonStart.classList.add('inactive');
    timerButtonContinue.classList.remove('inactive');
}

const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerButtonStart.disabled = false;
    timerButtonStop.disabled = true;
    timerButtonReset.disabled = false;
    timerButtonStart.innerHTML = "Start";
    
    //disable p etiqeutees
    timerAdvertise.classList.add('inactive');
    timerHours.classList.remove('inactive');
    newTimerHours.classList.add('inactive');
    timerMinutes.classList.remove('inactive');
    newTimerMinutes.classList.add('inactive');
    timerSeconds.classList.remove('inactive');
    newTimerSeconds.classList.add('inactive');

}


//pomodoro page
let pomodoroInterval;
let whereAmI = "pomodoro";

const startPomodoro = () => {
    pomodoroButtonStop.classList.remove('inactive');
    pomodoroButtonContinue.classList.add('inactive');
    pomodoroButtonStart.classList.add('inactive');
    pomodoroButtonStart.disabled = true;

    pomodoroInterval = setInterval(countPomodoro,1000);
}

const countPomodoro = () => {
    let minutes = pomodoroMinutes.innerHTML;
    let seconds = pomodoroSeconds.innerHTML;
    // console.log(minutes, seconds);
    if (parseInt(minutes) === 0 && parseInt(seconds) === 0) {
        clearInterval(countPomodoro);
    } else {
        seconds--;
        if (parseInt(seconds) < 0) {
            seconds = 59;
            minutes--;
            pomodoroMinutes.innerHTML=`${addLeadingZeros(minutes, 2)}`;
        }
        pomodoroSeconds.innerHTML=`${addLeadingZeros(seconds, 2)}`;
    }
}

const stopPomodoro = () => {
    clearInterval(pomodoroInterval);
    pomodoroButtonStop.classList.add('inactive');
    pomodoroButtonContinue.classList.remove('inactive');
    pomodoroButtonStart.classList.add('inactive');
}
const continuePomodoro = () => {
    pomodoroInterval = setInterval(countPomodoro,1000);
    pomodoroButtonStop.classList.remove('inactive');
    pomodoroButtonContinue.classList.add('inactive');
    pomodoroButtonStart.classList.add('inactive');
}


const skipPomodoro = () => {
    if (whereAmI === "pomodoro") {
        stopPomodoro();
        pomodoroButtonStop.classList.add('inactive');
        pomodoroButtonContinue.classList.add('inactive');
        pomodoroButtonStart.classList.remove('inactive');
        pomodoroButtonStart.disabled = false;
        pomodoroInterval = null;
        pomodoroMinutes.innerHTML=`${addLeadingZeros(5, 2)}`;
        pomodoroSeconds.innerHTML=`${addLeadingZeros(0, 2)}`;
        whereAmI = "break";
    } else {
        stopPomodoro();
        pomodoroButtonStop.classList.add('inactive');
        pomodoroButtonContinue.classList.add('inactive');
        pomodoroButtonStart.classList.remove('inactive');
        pomodoroButtonStart.disabled = false;
        pomodoroInterval = null;
        pomodoroMinutes.innerHTML=`${addLeadingZeros(25, 2)}`;
        pomodoroSeconds.innerHTML=`${addLeadingZeros(0, 2)}`;
        whereAmI = "pomodoro";
    }
}
