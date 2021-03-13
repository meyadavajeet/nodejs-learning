var add = function(a,b){
    return a+b;
}
function testingCallBackFunction(add){
    console.warn(add(200,300));
}
testingCallBackFunction(add);

// second way of creating callbackFunction with anonymous function
function complexExample(sum){
    console.warn(sum(2900,300));
}
complexExample(function(a,b){
    return a+b;
});