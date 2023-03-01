let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    alert(weekDays[date.getDay()]);
}

getWeekDay(date);