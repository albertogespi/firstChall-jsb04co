"use strict";

//CALCULADORA

function calculadora(n1, operacion, n2) {
  if (operacion === `suma`) {
    return n1 + n2;
  } else if (operacion === `resta`) {
    return n1 - n2;
  } else if (operacion === `multiplica`) {
    return n1 * n2;
  } else if (operacion === `divide`) {
    return n1 / n2;
  } else if (operacion === `potencia`) {
    return n1 ** n2;
  }
}

console.log(calculadora(5, `multiplica`, 3));

//DADO

let dado = Math.floor(Math.random() * 6) + 1;
let totalScore = 0;

function puntos() {
  do {
    totalScore += dado;
    console.log(dado);
    console.log(totalScore);
  } while (totalScore < 50);
  if (totalScore >= 50) {
    console.log(`GAME OVER`);
  }
}
puntos();

//REGISTRO ACADEMICO

class Person {
  name;
  age;
  gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const myPerson = new Person(`Alberto`, 26, `masc`);
console.log(myPerson);

class Student extends Person {
  subject;
  group;
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static registerStudents(names, ages, genders, subjects, groups) {
    return names.map((name, index) => {
      return new Student(
        name,
        ages[index],
        genders[index],
        subjects[index],
        groups[index]
      );
    });
  }
}

class Teacher extends Person {
  subject;
  group;
  studentsList = [];
  constructor(name, age, gender, subject, group) {
    super(name, age, gender);
    this.subject = subject;
    this.group = group;
  }
  static registerTeachers(names, ages, genders, subjects, groups) {
    return names.map((name, index) => {
      return new Teacher(
        name,
        ages[index],
        genders[index],
        subjects[index],
        groups[index]
      );
    });
  }
  assignStudents() {
    for (const student of students) {
      for (const teacher of teachers) {
        if (
          teacher.subject === student.subject &&
          teacher.group === student.group
        ) {
          this.studentsList.push(student.name);
        }
      }
    }
    console.log(this.studentsList);
  }
}

//datos estudiantes

const studentNames = [
  `Pablito`,
  `Jaimito`,
  `Juanita`,
  `Arturito`,
  `Menganito`,
  `Fulanita`
];
const studentAges = [20, 25, 30, 7, 16, 11];
const studentGenders = [`masc`, `masc`, `fem`, `masc`, `masc`, `fem`];
const studentSubjects = [
  `html`,
  `css`,
  `html`,
  `javascript`,
  `javascript`,
  `css`
];
const studentGroups = [2, 2, 1, 3, 1, 3];
const students = Student.registerStudents(
  studentNames,
  studentAges,
  studentGenders,
  studentSubjects,
  studentGroups
);
console.log(students);

//datos profesores

const teacherNames = [`Marisa`, `Gilberto`, `Rodolfa`];
const teacherAges = [38, 86, 42];
const teacherGenders = [`fem`, `masc`, `fem`];
const teacherSubjects = [`html`, `css`, `javascript`];
const teacherGroups = [1, 2, 3];
const teachers = Teacher.registerTeachers(
  teacherNames,
  teacherAges,
  teacherGenders,
  teacherSubjects,
  teacherGroups
);
console.log(teachers);

const myTeacher = new Teacher();
myTeacher.assignStudents();
