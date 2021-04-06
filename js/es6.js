/*
var log = function(value){
    //console.log(value)
};

log("teste");

var sumOld = function sumOld(a , b){
    return a + b;
};

//arrow functions

var sum = (a,b) => a + b;

log(sum(1,2) + " " + sumOld(1,2));

var returnObject = () => ({teste: 123})

//console.log(returnObject());

//verificação de tipos

function multiply(a,b){
    // or function multiply(a = 1,b = 1)
    if(typeof a == 'undefined' && typeof b == 'undefined'){
        return 0;
    }
    
    b = typeof b === 'undefined' ? 1 : b;
    a = typeof a === 'undefined' ? 1 : a;

    return a * b
}

// teste parametros
console.log(multiply(1,2));
console.log(multiply(1,));
console.log(multiply(2));
console.log(multiply());

//enhaced obj literals
function randomNumber(){
    return Math.random() * 10;
}

var methods = {
    randomNumber
}

console.log(methods.randomNumber());

//before es6
function sum(a,b){
    var value = 0;

    for(var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }

    return value;
}

console.log(sum(1,2,3,4,5,6,7));

//rest operator  ...
function sumRO(...args){

    return args.reduce((acc,value) => acc + value, 0);

}

console.log(sumRO(1,2,3,4,5,6,7));


//destructuring assignment

var arr = ["item 1", "item 2", "item 3"];
var [item1,item2,item3] = ["item 1", "item 2", "item 3"]

//symbols 
const symbol = Symbol("Hello");
console.log(symbol);
const symbol1 = Symbol("Hello");
console.log(symbol1);

const obj = {
    uniqueId: symbol,
    uniqueId1: symbol1

};

if(obj.uniqueId == obj.uniqueId1){
    console.log("Iguais");
}
else{
    console.log("Diferentes");
}

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1,2,3,4,5];

for(let value of arr){
    console.log(value);
}


//callbacks

function doSomething(callback){
    setTimeout(function(){
        callback('first data');
    }, 1000);
}

function doOtherthing(callback){
    setTimeout(function(){
        callback('second data');
    }, 1000);
}

function doAll(){
    doSomething(function(data){
        var processedData = data.split('');
        doOtherthing(function(data2){
            var processedData2 = data.split('');

            setTimeout(function(){
                console.log(processedData, processedData2);
            },1000);
        });
    });
}

doAll();

//promises
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First data")
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("second data")
    }, 1000);
});

doSomethingPromise
.then(data => { console.log(data); return doOtherThingPromise })
.then(data2 => console.log(data2))
.catch(error => console.log("Ops",  error));

//fetch

fetch("http://localhost:8000/data.json").then(responseStream => {
    if(responseStream.status === 200){
    console.log("responseStream: " + responseStream);
    return responseStream.json();
    }
    else{
        throw new Error("Request error");
    }
})
.then(data => {
    console.log("data: " + data);
})
.catch(err => {
    console.log("Erro: " + err);
});

*/
//Async
const simpleFunc = async function(){
    return 12345;
}

simpleFunc().then(data =>{
    console.log(data);
})
.catch(err => {
    console.log(err);
});

//await
const asyncTimer = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(12345);
    },1000);
});

const simpleFuncAwait = async() =>{
    const data = await asyncTimer;
    return data;
};

simpleFuncAwait().then(data =>{
    console.log(data);
})
.catch(err => {
    console.log(err);
});