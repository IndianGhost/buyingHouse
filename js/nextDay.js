function nextDay(today){
    var todayDate, todayMonth, todayYear;
    var tomorrowDate, tomorrowMonth, tomorrowYear;
    var tomorrow;
    if(typeof(today)=='object'){
        if(today.constructor.name == 'Date'){
            todayDate = today.getDate();
            todayMonth = today.getMonth();
            todayYear = today.getFullYear();
            
            //General case
            tomorrowDate = todayDate + 1;
            tomorrowMonth = todayMonth;
            tomorrowYear = todayYear;
            
            //particular cases
            if(monthDays(todayMonth, todayYear) == 30){
                if(todayDate==30){
                    tomorrowMonth++;
                    tomorrowDate = 1;
                }
            }
            else if(monthDays(todayMonth, todayYear) == 31){
                if(todayDate==31){
                    //In December 31st
                    if(todayMonth==11){
                        tomorrowYear++;
                        tomorrowMonth = 0;
                        tomorrowDate = 1;
                    }
                    else{
                        tomorrowMonth++;
                        tomorrowDate = 1;
                    }
                }
            }
            else if(monthDays(todayMonth, todayYear) == 29){
                if(todayDate==29){
                    tomorrowMonth++;
                    tomorrowDate = 1;
                }
            }
            else if(monthDays(todayMonth, todayYear) == 28){
                if(todayDate==29){
                    tomorrowMonth++;
                    tomorrowDate = 1;
                }
            }
            else{
                alert('ERROR : tomorrow function');
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
    tomorrow = new Date(tomorrowYear, tomorrowMonth, tomorrowDate);
    return tomorrow;
}