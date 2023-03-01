// 1
let styles = ['Джаз', 'Блюз'];
// 2
styles.push('Рок-н-ролл');
// 3
styles[Math.floor(styles.length - 1) / 2] = 'Классика'
// 4
alert(styles.shift());
// 5
styles.unshift('Рэп', 'Регги');