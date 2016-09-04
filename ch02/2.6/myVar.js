/**
 * Created by Gabriel on 16/9/4.
 */
var myVar=1;//全局变量
function writeIt (){
    var myVar=2;//局部变量
    console.log("Variable="+myVar);
    writeMore();
}
function writeMore(){
    console.log("Variable="+myVar);
}
writeIt();