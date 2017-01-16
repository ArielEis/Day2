/**
 * Created by ariel on 16/01/2017.
 */

var caseInt = Math.floor((Math.random() * 21) + 1);

switch(caseInt){
    case 7:
        console.log('Boom');
        break;
    case 14:
        console.log('BoomBoom');
        break;
    case 21:
        console.log('BoomBoomBoom');
        break;
    default:
        console.log(caseInt);
        break;

}