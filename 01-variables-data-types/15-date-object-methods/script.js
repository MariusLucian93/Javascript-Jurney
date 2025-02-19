let x;
let d = new Date();

x = d.toString();

x = d.getDate();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1; //get the current month but starts from 0
x = d.getDate(); //get current day of the month
x = d.getDay(); //will get the day of the week nr

x = d.getHours(); //will get the current hour
x = d.getMinutes(); //will get the current minutes
x = d.getSeconds(); //will get hte current seconds
x = d.getMilliseconds(); //get the current milliseconds

x = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} -- ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-UK').format();
x = Intl.DateTimeFormat('default').format();

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleDateString('default', {month: 'short'});

x = d.toLocaleDateString('default' ,{
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    seconds: 'numeric',
    timeZone: 'Europe/Bucharest'
});

console.log(x)