const students = [
    {name: 'Joseph', age: 19, grade: 'A'},
    {name: 'Onome', age: 20, grade: 'C'},
    {name: 'Joe', age: 16, grade: 'B'},
    {name: 'Annabel', age: 18, grade: 'A'},
    {name: 'Johnson', age: 17, grade: 'B'}
];

function filterByGrade(studentsArr, grade){
    return studentsArr.filter(student => student.grade === grade);
}

function averageAge(studentsArr){
    const ageSum =studentsArr.reduce((sum, student) => sum + student.age, 0);

    return ageSum / studentsArr.length;
};



console.log(filterByGrade(students, 'C'));
console.log(averageAge(students));