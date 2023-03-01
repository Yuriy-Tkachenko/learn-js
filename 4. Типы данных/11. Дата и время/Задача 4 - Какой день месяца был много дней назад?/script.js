let date = new Date(2023, 3, 1); 

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

getDateAgo(date, 2);