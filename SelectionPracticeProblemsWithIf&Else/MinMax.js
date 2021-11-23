var array=[];
for(var i=0;i<5;i++){
    array[i]=(Math.floor(Math.random()*900))+99;
}

console.log(array);
array.sort();
console.log("Maximum Number: "+array[array.length-1]+" & Minimum Number: "+array[0]);