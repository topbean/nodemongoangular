/**
 * Created by Gabriel on 16/9/4.
 */
function doCalc(num1,num2,calcFunction) {
    return calcFunction(num1,num2);

}
// function addFunc(n1,n2){
//     return n1+n2;
// }
// // console.log(addFunc(5,10));
// doCalc(5,10,addFunc);

console.log(doCalc(6,10,function (n1,n2) {return n1+n2;}));
console.log(doCalc(6,10,function (n1,n2) {return n1*n2;}));

