// Inheritance
var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black' 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;
console.log("First name:", daughter.firstName);
console.log("Last name:", daughter.lastName);
console.log("Hair color:", daughter.hairColor);
console.log("Eye color:", daughter.eyeColor);

// 1.2 
mom.showInfo = function() {
    console.log("First name:", this.firstName);
    console.log("Last name:", this.lastName);
    console.log("Hair color:", this.hairColor);
    console.log("Eye color:", this.eyeColor);
};
  
console.log("");
console.log("");
mom.showInfo();
console.log("");
console.log("");
daughter.showInfo();

// Person
class Person { 
    constructor (name, friends){
        this.name = name; 
        this.friends = [];
    } 
    addFriend (friend){
        this.friends.push(friend);
    }
    createGreeting (friend){
        console.log(`Yo ${other.name}! from ${this.name}`);
    }
    lazyGreet (other2){
        var time = setTimeout(()=>{
            console.log(`Yo ${other2.name}! from ${this.name}`);
            },200);
    }
    createGreetingsForFriends (){
        var myGreeting = `Yo ${other.name}! from ${this.name}`;
        this.friends.map(function(friendx){

            var myThis = this;
            myGreeting = myGreeting +  " " + friend.name;
            this.createGreeting(friendx); 
            return friendx;
        })
        }
    }
var alfie = new Person('Alfie'); 
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();
// console.log(alfie.name);
// alfie.lazyGreet(anushka)



