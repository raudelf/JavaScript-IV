// CODE here for your Lambda Classes

class Person{
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// let raudel = new Person({name: 'raudel', age: 22, location: 'Chicago'})

class Instructor extends Person {
    constructor(iAttrs) {
        super(iAttrs);
        this.specialty = iAttrs.specialty;
        this.favLanguage = iAttrs.favLanguage;
        this.catchPhrase = iAttrs.catchPhrase;
    }

    demo(subString) {
        return `Today we are learning about ${subString}`;
    }

    grade(obj, subj) {
        return `${obj.name} receives a perfect score on ${subj}`
    }
}
// let pace = new Instructor({
//     name: 'Pace',
//     age: 28,
//     location: 'California',
//     specialty: 'Front-End Dev',
//     favLanguage: 'Spanish',
//     catchPhrase: 'Don\'t forget the homies'
// })

class Student extends Person{
    constructor(sAttrs) {
        super(sAttrs);
        this.previousBackground = sAttrs.previousBackground;
        this.className = sAttrs.className;
        this.favSubjects = sAttrs.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subj) {
        return `${this.name} has submitted a PR for ${subj}`;
    }

    sprintChallenge(subj) {
        return `${this.name} has begun sprint challenge on ${subj}`
    }
}

// let raudel = new Student({
//     name: 'Raudel',
//     age: 22,
//     location: 'Chicago',
//     previousBackground: 'Graphic Designer',
//     className: 'WBPT11',
//     favSubjects: ['HTML', 'CSS', 'Javascript'],})