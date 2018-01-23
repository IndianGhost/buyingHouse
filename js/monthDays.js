function monthDays(month, year){
    //0, 2, 4, 6 || 7, 9, 11
    if( ((month%2==0) && month<7) || ( month%2 != 0 && month>=7) ){
        return 31;
    }
    //3, 5 || 8, 10
    else if((month%2 != 0 && month!=1 && month<7) || (month%2 == 0 && month>7)){
        return 30;
    }
    else if(month==1)
    {
        return isLeap(year)? 29 : 28;
    }
    else{
        alert('ERROR : monthDays function');
    }
}