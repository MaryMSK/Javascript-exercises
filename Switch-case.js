/* The num variable can take 4 values: 1, 2, 3, 4. 
If it has a value of 1, then we write 'winter' into the result variable,
if it has a value of 2 - 'spring' etc. */


let num = 3;
let result;

switch(num){
    case 1 :
        result = 'Зима';
        alert(result);
        break;
    case 2 :
        result = 'Весна';
        alert(result);
        break;
    case 3 :
        result = 'Лето';
        alert(result);
        break;
    case 4 :
        result = 'Осень';
        alert(result);
        break;
    default :
        alert('Нет ни одного похожего значения');
        break;

}