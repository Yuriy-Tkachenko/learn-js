function getSecondsToTomorrow() {
    let nowDate = new Date();
    let tommorowDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()+1);

    return(Math.round((tommorowDate - nowDate) / 1000));
}

getSecondsToTomorrow();