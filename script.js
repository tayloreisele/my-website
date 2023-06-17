// Typed
var typed = new Typed(".auto-type", {
    strings: ["Front end developer.", "Business leader.", "Student."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    });

// Clock
function currentTime() {
    
    let date = new Date();

    
    let options = { 
        timeZone: 'America/Chicago',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit' 
    };

    
    let centralTime = new Intl.DateTimeFormat('en-US', options).format(date);

    
    let [hh, mm, ss] = centralTime.split(":");

    hh = parseInt(hh, 10);
    let session = hh >= 12 ? "PM" : "AM";

    
    hh = hh % 12;
    hh = hh ? hh : 12;

    
    let time = `${hh}:${mm}:${ss} ${session}`;
    document.getElementById("clock").innerText = time; 
}

setInterval(currentTime, 1000);
