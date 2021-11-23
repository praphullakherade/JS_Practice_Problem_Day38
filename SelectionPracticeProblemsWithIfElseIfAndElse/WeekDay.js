var args=process.argv.slice(2);
console.log(parseInt(args));

if(parseInt(args)===0){
    console.log("sunday");
}else if(parseInt(args)===1){
    console.log("monday");
}else if(parseInt(args)===2){
    console.log("tuesday");
}else if(parseInt(args)===3){
    console.log("wednesday");
}else if(parseInt(args)===4){
    console.log("thursday");
}else if(parseInt(args)===5){
    console.log("friday");
}else if(parseInt(args)===6){
    console.log("saturday");
}