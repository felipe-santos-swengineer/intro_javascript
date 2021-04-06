class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

const pug = new Animal("Pug", "Cachorro");
console.log(pug.type + "");


const arr = Array(2);
arr[0] = "pos0";
arr[1] = "pos1";
arr.forEach((value,index) =>{
    console.log(index + " " + value );
});