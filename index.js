/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}                 
//----------------------------------------------------------------------------------------------------
let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(element){
  return element%2 !== 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(ele){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr.sort(intCompare)
console.log(ascending);
//--------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
let person = {
  // key : value
  "name": "John",
  "age": 12
};

//we can print the values of a key in two ways
console.log(person["age"]);//Using an index
console.log(person.name);//referencing the key as a property

person["weight"] = 70;

person.marks = [67, 34, 55, 89];

let firstMark = person.marks[0];

//mixing array and objects
let people = [
  person,
  {
    name: "Jane",
    age: 23,
    marks: [51, 78, 99, 76]
  }
];

let johnClone = {};//empty object

//copying objects
Object.assign(johnClone, person);

console.log(johnClone);
console.log(person)


console.log(people[0].marks[0]);//what is printed?
console.log(person.marks[0])
//--------------------------------------------------------------------------------------

//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

console.log(avgBMI(people));
---------------------------------------------------------------------------------------------------*/


//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student,course_code){

  for (let record of student.transcript){
    if (record.course === course_code){
      let sum = 0;
      for (let grade of record.grades){
        sum += grade;
      }
      return sum / record.grades.length;
    }
  }
  return -1;
}

function getAssignmentMark(student,course_code){

  for (let record of student.transcript){
    if (record.course === course_code){
      if (num>=0 && num<record.grades,length){
        return record.grades[num];
      }
    }
  }
  return -1;
}


function averageAssessment(students, courseName, assignment) {

  for (let student of students) {
    for (let record of student.transcript) {
      if (record.course === courseName) {
        if (assignment >= 0 && assignment < record.grades.length) {
          total += record.grades[assignment];
          count++;
        }
      }
    }
  }
  return -1;
  }



console.log(getAverageGrade(bob, 'INFO 1603'));
console.log(getAssignmentMark(sally, 'INFO 1601'));
console.log(averageAssessment(students, 'INFO 1603'));