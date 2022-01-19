class university {
  constructor(name, major, numberOfStudents) {
    this._name = name;
    this._major = major;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get major() {
    return this._major;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  uniStats() {
    console.log(
      `${this.name} has ${this.numberOfStudents} majoring in ${this.major}`
    );
  }

  static uniProfessors() {
    const uniProfessors = [];
    const randomNumber = Math.floor(uniProfessors.length * Math.random());
    return uniProfessors[randomNumber];
  }

  set numberOfStudents(newNumberOfStudents) {
    if (newNumberOfStudents.isNaN()) {
      console.log("Invalid input: numberOfStudents must be set to a number.");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }
}

class EmoryUniversity extends university {
  constructor(name, numberOfStudents, admitRequirements) {
    super(name, "Emory", numberOfStudents);
    this._admitRequirements = admitRequirements;
  }

  get admitRequirements() {
    return this._admitRequirements;
  }
}


class UnivGeorgia extends university {
  constructor(name, numberOfStudents, goDawgs) {
    super(name, "UGA", numberOfStudents);
    this._goDawgs = goDawgs;
  }

  get goDawgs() {
    return this._goDawgs;
    console.log(goDawgs);
  }
}

const nathansimms = new EmoryUniversity(
  "Dr. Nathan Simms",
  48,
  "MCAT scores must be in the top 1%"
);


nathansimms.uniStats();

University.uniProfessors([
  "Dean Winchester",
  "Castiel Angel",
  "Jack Gordon",
  "Amanda Hansard",
  "Prehit Ng",
  "Salvador Garcia",
]);

const cTrippi = new UnivGeorgia("Charley Trippi", 415, [
  "Baseball",
  "Football",
  "Gymnastics",
  "Track and Field",
]);

console.log(cTrippi.sportsTeams);
