interface Teacher {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  contract: boolean;
}

interface Directors  extends Teacher {
  numberOfReports:number;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  contract :false
};
console.log(director1);
console.log(teacher3)

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

const printTeacher = ({firstName, lastName}: printTeacherFunction) => {
  return `${firstName} ${lastName}`; 
}

console.log(printTeacher({firstName: "trizah", lastName: "abel"}));