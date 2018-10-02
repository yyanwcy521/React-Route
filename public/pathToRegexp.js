let pathToRegExp = require('path-to-regexp');

let reg = pathToRegExp('/home',[],{end:false});

console.log(reg.test("/home1/1/2/3"));//匹配不到
console.log(reg.test("/home/1/2/3"));//能够匹配

//当end为true时，只能够匹配/home
