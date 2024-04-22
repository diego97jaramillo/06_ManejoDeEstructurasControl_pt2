const teamLeader = {
    id: '12345556',
    idNumber: '1036547821',
    name: 'javier',
    lastName: 'combita',
    birthDate: new Date('1997-06-20 13:00:00'),
    phoneNumber: '(+57) 3182965402',
    email: 'javi.combi@gmail.com'
}

// teamLeader.forEach(element => {
//     console.log(element);
// });

//la diferencia entre el for in y el for of es que el primero nos muestra son los indices y por eso es que si se puede aplicar en objetos pero nos devuelve son las llaves del objeto. el for of solo se usa en arrays
for (const key in teamLeader) {
    console.log(key);
};

Object.keys(teamLeader).forEach((element) => {
    console.log(teamLeader[element]);
});

console.log(teamLeader['id']);

Object.values(teamLeader).forEach((element) => {
    console.log(element);
});

// lista del 0 al 100
const listaNum = []
for (let i = 0; i<101; i++) {
    listaNum.push(i)
}

console.log(listaNum);
// filtrar los numeros pares

const newLits = listaNum.filter((value) => value%2===0);
console.log(newLits);



function hola(nombre) {
    console.log(nombre)
};

const aHola = (nombre) => {console.log(nombre);}

hola('diego');
aHola('diego')

console.group('lista empleados')

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

listaEmpleados.forEach((obj) => {
    console.log(`${obj.nombre.toLowerCase()} tiene el puesto de: ${obj.puesto.toLowerCase()}
    y gana: ${obj.salario*2} al año
`)})
console.groupEnd()