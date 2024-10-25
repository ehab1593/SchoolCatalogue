//Creating the parent class that will hold common properties for subclasses to inherit
class School {
  constructor(name, level, numberOfStudents, testScores) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._testScores = testScores || [];
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get testScores() {
    this._testScores = testScores;
  }

//setter to check if the input is a number or else throwing an error message
  set numberOfStudents(numberStudents) {
    if (typeof numberStudents === "number") {
      this._numberOfStudents = numberStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

//Method to give brief info of the school instance
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

//Calculating average test scores for school
  avgTestScores() {
    let sum = 0;
    for (let i = 0; i < this._testScores.length; i++) {
      sum += this._testScores[i];
    }
    let avg = sum / this._testScores.length;
    return avg;
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const random = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[random];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents, testScores) {
    super(name, "middle", numberOfStudents, testScores);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams || [];
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

//This class will hold all the school instances
class SchoolCatalog {
  constructor(school) {
    this._school = [];
  }

  get school() {
    return this._school;
  }

  addSchool(school) {
    this._school.push(school);
  }
}

//Initialising instance for the primary school subclass
const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorraineHansbury);
lorraineHansbury.quickFacts();

//Array for substitute teachers to be picked at random
const sub = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
console.log(sub);

//Initialising instance for the high school subclass
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeams);

//Initialising instance for the middle school subclass
const treeHillMiddle = new Middle(
  "Tree Hill Middle School",
  205,
  [89, 98, 87, 82, 56, 79, 89, 93, 44, 99, 100, 77, 100]
);

treeHillMiddle.quickFacts();
console.log(treeHillMiddle.avgTestScores());

//Initialising instance for the catalog to store all the shool instances
const allSchoolCatalog = new SchoolCatalog();
allSchoolCatalog.addSchool(lorraineHansbury);
allSchoolCatalog.addSchool(treeHillMiddle);
allSchoolCatalog.addSchool(alSmith);

//Logging the school catalog
console.log(allSchoolCatalog);
