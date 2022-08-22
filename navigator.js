homeLink.addEventListener('click', () => {
    location.hash = '';
    console.log(':D');
});
chronometerLink.addEventListener('click', () => {
    location.hash = '#chronometer';
});
timerLink.addEventListener('click', () => {
    location.hash = '#timer';
});
pomodoroLink.addEventListener('click', () => {
    location.hash = '#pomodoro';
})


window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false)

function navigator () {
    console.log({ location });
    if (location.hash.startsWith('#chronometer')) {
        chronometerPage();
    } else if (location.hash.startsWith('#timer')) {
        timerPage();
    } else if (location.hash.startsWith('#pomodoro')) {
        pomodoroPage();
    } else {
        homePage();
    };
}

function homePage() {
    homeLink.style.textDecoration = 'underline';
    chronometerLink.style.textDecoration = 'none';
    timerLink.style.textDecoration = 'none';
    pomodoroLink.style.textDecoration = 'none';

    homeSection.classList.remove('inactive');
    chronometerSection.classList.add('inactive');
    timerSection.classList.add('inactive');
    pomodoroSection.classList.add('inactive');

    getTime();
    getDate();
    myInterval();
}
function chronometerPage() {
    homeLink.style.textDecoration = 'none';
    chronometerLink.style.textDecoration = 'underline';
    timerLink.style.textDecoration = 'none';
    pomodoroLink.style.textDecoration = 'none';

    homeSection.classList.add('inactive');
    chronometerSection.classList.remove('inactive');
    timerSection.classList.add('inactive');
    pomodoroSection.classList.add('inactive');

    chronometerFunction();
}
function timerPage() {
    homeLink.style.textDecoration = 'none';
    chronometerLink.style.textDecoration = 'none';
    timerLink.style.textDecoration = 'underline';
    pomodoroLink.style.textDecoration = 'none';

    homeSection.classList.add('inactive');
    chronometerSection.classList.add('inactive');
    timerSection.classList.remove('inactive');
    pomodoroSection.classList.add('inactive');

    
    timerButtonStop.disabled = true;
    timerButtonReset.disabled = true;

}
function pomodoroPage() {
    homeLink.style.textDecoration = 'none';
    chronometerLink.style.textDecoration = 'none';
    timerLink.style.textDecoration = 'none';
    pomodoroLink.style.textDecoration = 'underline';

    homeSection.classList.add('inactive');
    chronometerSection.classList.add('inactive');
    timerSection.classList.add('inactive');
    pomodoroSection.classList.remove('inactive');
}





