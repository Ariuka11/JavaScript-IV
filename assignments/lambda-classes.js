// CODE here for your Lambda Classes

class Person {
    constructor(personAtt){
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
        this.gender = personAtt.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(personAtt){
        super(personAtt);
        this.previousBackground = personAtt.previousBackground;
        this.className = personAtt.className;
        this.favSubjects = personAtt.favSubjects;
    
    }
    listsSubjects (){
        for(let i=0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAtt){
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standup(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//   const anon = new Person({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     gender: 'male',
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`,
//     previousBackground: 'Pro Athlete',
//     className: 'WEBPT6',
//     favSubjects: 'Webdevelopment',
//     gradClassName: "WD1",
//     favInstructor: 'Keiran'
//   });

  const micheal = new Instructor({
    name: 'Micheal Scott',
    location: 'Scranton',
    age: 42,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
   
  });

  const jim = new Instructor({
    name: 'Jim Halpert',
    location: 'Utah',
    age: 38,
    gender: 'male',
    favLanguage: 'Phyton',
    specialty: 'Data Science',
    catchPhrase: `Bernie, the bolt!`,
    
  });

  const dwight = new Instructor({
    name: 'Dwight Schrude',
    location: 'California',
    age: 40,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Backend',
    catchPhrase: `"Don't panic!"`,
    
  });

  const pam = new Student({
    name: 'Pam Beesly',
    location: 'New York',
    age: 34,
    gender: 'female',
    previousBackground: 'Pro Athlete',
    className: 'WEBPT6',
    favSubjects: 'IOS',
    favInstructor: 'Keiran'
  });

  const angela = new Student({
    name: 'Angela Martin',
    location: 'Chicago',
    age: 48,
    gender: 'female',
    previousBackground: 'Pro Athlete',
    className: 'WEB19',
    favSubjects: 'Webdevelopment',
    favInstructor: 'Cameron'
  });

  const erin = new Student({
    name: 'Erin Hannon',
    location: 'Virginia',
    age: 23,
    gender: 'female',
    previousBackground: 'Pro Athlete',
    className: 'WEBPT4',
    favSubjects: ['Android', 'CSS', 'HTML'],
    favInstructor: 'Josh'
  });

  const andy = new ProjectManager({
    name: 'Andy Bernard',
    location: 'Miami',
    age: 37,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Backend',
    gradClassName: "WD1",
    favInstructor: 'Daniel'
  });

  const toby = new ProjectManager({
    name: 'Toby Flenderson',
    location: 'Costa Rica',
    age: 37,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Frontend',
    gradClassName: "WD1",
    favInstructor: 'Keiran'
  });
  
  const ryan = new ProjectManager({
    name: 'Ryan Howard',
    location: 'Boston',
    age: 37,
    gender: 'male',
    favLanguage: 'Angular',
    specialty: 'Frontend',
    gradClassName: "WD1",
    favInstructor: 'Ryan'
  });
  
  console.log(micheal.specialty);
  console.log(jim.catchPhrase);
  console.log(dwight.favLanguage);
  console.log(micheal.demo("javascript"));

  console.log(angela.className);
  console.log(pam.favSubjects);
  console.log(erin.previousBackground);
  console.log(pam.PRAssignment("html"));
  console.log(angela.sprintChallenge("C++"));
  console.log(erin.listsSubjects());

  console.log(andy.gradClassName);
  console.log(toby.favInstructor);
  console.log(ryan.standup("web19"));
  console.log(toby.debugsCode(erin,"React"));
  