const player ={
  name : "jihyun",
  hello : function(otherPersonsName){
    console.log("hello "+ otherPersonsName+ " nice to meet you!" )
  }
};

function plus(a,b) {
  console.log(a + b);
}

function divide(a,b){
  console.log(a/b);
}

console.log(player.name);
player.hello("jipark");
plus(5,9);
divide(98,2);