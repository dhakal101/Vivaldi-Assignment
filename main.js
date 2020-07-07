// Vivald JS Example

// When a Season Button is Clicked
document.getElementById('summerBtn').addEventListener('click', setSummer);
document.getElementById('autumnBtn').addEventListener('click', setAutumn);
document.getElementById('winterBtn').addEventListener('click', setWinter);
document.getElementById('springBtn').addEventListener('click', setSpring);

// Event Functions
function setSummer() {

     // Ivoke Summer Theme
    setSeason('summer', '#1BA848');
}

function setAutumn() {

    // Ivoke Autumn Theme
    setSeason('autumn', '#FE6732');
    
}

function setWinter() {

    // Ivoke Winter Theme
    setSeason('winter', '#1C64B9')
}

function setSpring() {
    
    // Ivoke Spring Theme
    setSeason('spring', '#0E94D1');
    
}

// Main Function
function setSeason(name, color) {
    // - change concerto text
    document.getElementById('season-text').innerHTML = name;

    // - change main image
    document.getElementById('main-img').src = 'images/' + name +  '.jpg';

    // - change page background color
    document.body.style.backgroundColor = color;

    // - change audio source
    document.getElementById('song').src = 'songs/vivaldi-' + name +  '.mp3';

    // - remove active class from all buttons
    document.getElementById('springBtn').classList.remove('activeBtn');
    document.getElementById('summerBtn').classList.remove('activeBtn');
    document.getElementById('autumnBtn').classList.remove('activeBtn');
    document.getElementById('winterBtn').classList.remove('activeBtn');

    // - add active class to clicked button
    document.getElementById( name + 'Btn').classList.add('activeBtn');
}

