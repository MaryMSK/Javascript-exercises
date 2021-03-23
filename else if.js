/* The variable month contains some number from the interval from 1 to 12. 
Determine at what time of the year this month falls (winter, summer, spring, autumn). */


let month = 6;

if(month >= 12 && month <=2){
    console.log('Winter');
}else if(month >= 3 && month <= 5){
    console.log('Spring');
}else if(month >= 6 && month <= 8){
    console.log('Summer');
}else if(month >= 9 && month <= 11){
    console.log('Autumn');
}

