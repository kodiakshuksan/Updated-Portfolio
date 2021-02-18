//JavaScript
console.log("hello")
//Display Date
var today = luxon.DateTime.local();

//var hour = today.c.hour;
//console.log(today.c.hour)
console.log(today)
//var hour = today.c.hour;
//console.log(hour)
var date = today.toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });
console.log(date)
//var changeFormat = today.toLocaleString(DateTime.DATE_MED); //=>  '4/20/2017'
//var newFormat = date.assign(DateTime.DATE_MED, { weekday: 'long' });
//var forPage = dt.toLocaleString(newFormat);

portfolioDate.innerHTML = date;