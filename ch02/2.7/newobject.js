/**
 * Created by Gabriel on 16/9/4.
 */
// var user = new Object();
//     user.first = "Brad";
//     user.last = "Dayley";
//     user.getName = function(){return this.first + " " + this.last; };


// var user = {
//     first:"Brad",
//     last:"Dayley",
//     getName:function(){return this.first + " " + this.last;}
// }
//
//
function  User(first,last) {
    this.first = first;
    this.last =last;
    this.getName = function(){ return this.first + " " + this.last;};
}
var user = new User("Brad","Dayley");

console.log(user.getName());