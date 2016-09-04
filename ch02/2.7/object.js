/**
 * Created by Gabriel on 16/9/4.
 */
// var x = new Number("5");
//
var  s = myObj.name;
myObj.name = "New Name";

// var name = myObj.getName();
// myObj.getName = function(){return this.name;};

//创建对象
// var obj = {
//     name:"My Object",
//     value:7,
//     getValue:function(){return this.name;};
// };

//使用object[propertyName](对象[属性名])访问对象的成员|使用动态属性名称并且当属性名必须包含JavaScript不支持的字符时,这非常有用
var propName = "User Name";
var va1 = myObj[propName];
var va2 = myObj["Other Nmae"];
console.log(va1,va2);