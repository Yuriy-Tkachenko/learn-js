let date = new Date(2012, 0, 3); 

function getLocalDay(date) {
    let dayNumber = date.getDay();

    if(dayNumber == 0) {
        dayNumber = 7;
    }

    alert(dayNumber);
}

getLocalDay(date);