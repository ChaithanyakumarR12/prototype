let parent={name:"oreo",bYear:1999,lname:"shake",
    initialise:function(name,bYear){
        this.name=name;
        this.bYear=bYear;
    },
    calcAge:function(){
        console.log(`age of ${this.name} is ${2022-this.bYear}`);
    }
}

let child=Object.create(parent);
child.initialise("dark",2022);
child.calcAge();
let mother =Object.create(child);
mother.initialise("chocolate",1999);
mother.calcAge();
console.log(mother.__proto__);
console.log(mother.__proto__.__proto__);
console.log(mother.__proto__.__proto__.__proto__);
console.log(mother.__proto__.__proto__.__proto__.__proto__);
let arr={
    sum:function(array){
        return array.reduce((acc,cur)=>acc+=cur,0);
    }
}
let array1=[1,2,3,4,5];
let array2=[6,7,8,9,10];
console.log(arr.sum(array1));
console.log(arr.sum(array2));
function PropName(){
    for(let key in mother){
        console.log(key);
    }
}
PropName()
