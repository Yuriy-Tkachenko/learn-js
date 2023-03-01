function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let differentMs = new Date() - date;
    let differentSec = Math.round(differentMs / 1000);
    let differentMin = differentSec / 60;
    let differentHour = differentMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (differentSec < 1) {
      return 'прямо сейчас';
    } else if (differentMin < 1) {
      return `${differentSec} сек. назад`
    } else if (differentHour < 1) {
      return `${differentMin} мин. назад`
    } else {
      return `${day}.${month}.${year} ${hour}:${minutes}`
    }
  }

alert( formatDate(new Date(new Date - 1)) )