const accountId=21232;
let accountName="Sheela";
var password=12345;
//const can't be reassigned
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountName="Sararara";
password=2343222;
console.table([accountId,accountName,password]);