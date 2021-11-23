var args=process.argv.slice(2);
var key=parseInt(args.slice(0));

switch (key) {
    case 1:
        console.log("one");
        break;
    case 10:
        console.log("ten");
        break;
    case 100:
        console.log("hundred");
        break;
    case 1000:
        console.log("thousand");
        break;
    case 1000000:
        console.log("million");
        break;
    default:
        break;
}