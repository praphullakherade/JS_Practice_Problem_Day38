var args=process.argv.slice(2);
console.log(parseInt(args));

if(parseInt(args)===1){
    console.log("one");
}else if(parseInt(args)===10){
    console.log("ten");
}else if(parseInt(args)===100){
    console.log("hundred");
}else if(parseInt(args)===1000){
    console.log("thousand");
}else if(parseInt(args)===1000000){
    console.log("million");
}