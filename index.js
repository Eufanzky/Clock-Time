const getTime = () => {
    const time = document.querySelector('#time');
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time.innerHTML = `${hours}:${addLeadingZeros(minutes,2)}:${addLeadingZeros(seconds,2)}`;
}

const getDate = () => {
    const date = document.querySelector('#date');
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    date.innerHTML = `${addLeadingZeros(day,2)}-${addLeadingZeros(month+1,2)}-${addLeadingZeros(year,4)}`
}


//adds zeros in front of a number
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

const myInterval = () => setInterval(()=> {
    getTime();
    getDate();
},1000)

getTime();
getDate();
myInterval();



