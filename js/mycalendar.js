/*
    We will consider that the date in the middle is the day that user visit the website
    yesterday is the previous day
    & tomorrow is the next day
*/
var today = new Date();
var yesterday = new Date();
var tomorrow = new Date();

var todayYear = today.getFullYear();

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
//The index 0 is for Sunday, that's why it must be the first item
var dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

function suffixDate(mydate) {
    var suffix;
    if(mydate==1 || mydate==21 || mydate==31)
        suffix = 'st';
    else if(mydate==2 || mydate==22)
        suffix = 'nd';
    else if(mydate==3 || mydate==23)
        suffix = 'rd';
    else
        suffix = 'th';
    return suffix;
}

function displayCalendar(today)
{
    //Initialisation
    var previous_month, next_month;

    /*
        To show the name of months & days
    */
    previous_month = today.getMonth()==0? 11: today.getMonth()-1;
    next_month = today.getMonth()==11? 0: today.getMonth()+1;

    //get the previous & the next day
    yesterday = previousDay(today);
    tomorrow = nextDay(today);

    //Write Values in the DOM
    $('#month').html( monthName[today.getMonth()] );

    $('#previous-month').html( monthName[previous_month] );

    $('#next-month').html( monthName[next_month] );

    $('#today').html(
        dayName[today.getDay()]
        +' '
        +today.getDate()
        +suffixDate( today.getDate() )
    );

    $('#previous-day').html(
        dayName[yesterday.getDay()]
        +' '
        +yesterday.getDate()
        +suffixDate( yesterday.getDate() )
    );

    $('#next-day').html(
        dayName[tomorrow.getDay()]
        +' '
        +tomorrow.getDate()
        +suffixDate( tomorrow.getDate() )
    );
}

function monthIndex(month){
    for(var i=0; i<monthName.length; i++)
    {
        if(month == monthName[i])
        {
            return i;
        }
    }
    return null;
}

/*
    When the page got loaded and any event has been declenched yet,
    the calendar should show the date of client's visit.
*/
//jQuery Syntax
$(document).ready(function(){
    //Simple treatment for extremist case
    displayCalendar(today);
});

/*
    Events treatment
*/
$('#backward-month').click(function(){
    //First we have to get the name of the actual 'month' from the DOM
    var actual_month = $('#month').html();

    //looking for the index of this month
    actual_month = monthIndex(actual_month);
    
    if(actual_month==0)
    {
        actual_month = 11;
        todayYear--;
        today = new Date(todayYear, actual_month, 1);
    }
    else if(actual_month>0 && actual_month<12)
    {
        actual_month--;
        today = new Date(todayYear, actual_month, 1);
    }
    else
    {
        //An alert will poped out in the case of error
        alert('Calendar : Date ERROR');
    }
    displayCalendar(today);
});

$('#forward-month').click(function(){
    //First we have to get the name of the actual 'month' from the DOM
    var actual_month = $('#month').html();

    //looking for the index of this month
    actual_month = monthIndex(actual_month);
    
    if(actual_month==11)
    {
        actual_month = 0;
        todayYear++;
    }
    else if(actual_month>=0 && actual_month<12)
    {
        actual_month++;
    }
    else
    {
        //An alert will poped out in the case of error
        alert('Calendar : Date ERROR');
    }
    today = new Date(todayYear, actual_month, 1);
    displayCalendar(today);
});

$('#backward-day').click(function(){
    today = previousDay(today);
    displayCalendar(today);
});

$('#forward-day').click(function(){
    today = nextDay(today);
    displayCalendar(today);
});