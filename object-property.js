const students = [
    { id: 21 , name : 'Salman'},
    {id: 32, name : 'A Rohim'},
    {id: 43, name: ' Akash'},
    {id : 71 ,name:'Sajol' }
];
const names = students.map( s =>s.name);
const bigger= students.filter(s => s.id>40);
const bigger1 = students.find( s => s.id>60);
console.log(bigger1);