"use strict";

// HW 1

const array = [1, -5, 7, -22, 30, 25, -4];

const positive = array.filter((numbers)=> numbers > 0);

console.log(positive);

const result = positive.reduce((acc,curr)=> acc+curr, 0);

console.log(result);


// HW 2

const names = ["a", "b", "c", "d", "b", "d"];

const duplicates = names.reduce((acc, element)=>{
    acc[element] = (acc[element] || 0) +1;
    return acc;
}, {});
console.log(duplicates);





// HW 3

class Car{
    constructor(brand, model, speed, motion){

        this.brand = brand
        this.model = model
        this.speed = 0
        this.motion = 'The car is not moving'
    }

    check_motion() {
        if (this.speed > 0) {
          this.motion = "The car is moving";
        } else {
          this.motion = "The car is not moving";
        }
     }

     accelerate(speed) {

        this.speed += speed;
        this.check_motion();
     }

   


      brake(speed) {

    this.check_motion();

     }

     emergency_brake() {
        this.speed = 0;
        this.check_motion();
      }

      status() {
        return `Vehicle ${this.brand} ${this.model} is moving at ${this.speed} km/h and status is ${this.motion}.`;
      }   

      };


const myAuto = new Car("Ford", "Mustang");

console.log(myAuto.status());

myAuto.accelerate(100);
console.log(myAuto.status());

// myAuto.brake();
// console.log(myAuto.status());

myAuto.emergency_brake();
console.log(myAuto.status());

