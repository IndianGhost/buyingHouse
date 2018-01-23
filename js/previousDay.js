function previousDay(today){
    var todayDate, todayMonth, todayYear;
    var yesterdayDate, yesterdayMonth, yesterdayYear;
    var yesterday;
    //the number of day for each month
    var dayNumber = [
        31, //index 0 : January
        28, //index 1 : February (28 is just the default value, in case of leap year it will be 29)
        31, //index 2 : March
        30, //index 3 : April
        31, //index 4 : May
        30, //index 5 : June
        31, //index 6 : July
        31, //index 7 : August
        30, //index 8 : September
        31, //index 9 : October
        30, //index 10 : November
        31, //index 11 : December
    ];
    if(typeof(today)=='object'){
        if(today.constructor.name == 'Date'){
            todayDate = today.getDate();
            todayMonth = today.getMonth();
            todayYear = today.getFullYear();
            
            //General case
            yesterdayDate = todayDate - 1;
            yesterdayMonth = todayMonth;
            yesterdayYear = todayYear;

            //particular cases
            if(todayDate==1)
            {
                //January 1st
                if(todayMonth==0)
                {
                    yesterdayYear--;
                    yesterdayMonth = 11;
                    yesterdayDate = dayNumber[yesterdayMonth];
                }
                //March 1st
                else if(todayMonth==2)
                {
                    yesterdayMonth--;
                    yesterdayDate = isLeap(todayYear)? 29 : dayNumber[yesterdayMonth];
                }
                else
                {
                    yesterdayMonth--;
                    yesterdayDate = dayNumber[yesterdayMonth];
                }
            }
        }
        else{
            alert('Object class is not Date');
        }
    }
    else if(typeof(today)=='undefined'){
        alert('undefined variable in tomorrow function');
    }
    else{
        alert('ERROR (tomorrow function)');
    }
    yesterday = new Date(yesterdayYear, yesterdayMonth, yesterdayDate);
    return yesterday;
}