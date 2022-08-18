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

//adds zeros in front of a number
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

const myInterval = () => setInterval(()=> {
    getTime();
    getDate();
},1000)

/*chronometer section*/

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
            seconds=0;
            minutes=0;
            hours=0;
            chronoHours.innerHTML = `${addLeadingZeros(hours, 2)}`;
            chronoMinutes.innerHTML = `${addLeadingZeros(minutes, 2)}`;
            chronoSeconds.innerHTML = `${addLeadingZeros(seconds, 2)}`;
        });
    
    });
};


const timerFunction = () => {

};



