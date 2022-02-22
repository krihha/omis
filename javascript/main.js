//  komment 
/* mnogostro4nqj komment */

let x = 10;

//x = "hello"
//console.debug('hello from jsfile');

let firstname = "Kristina";


console.log(x+firstname);
console.log(x+x);

// number 
// string - text

// boolean - true 1/false 0
let isLocked = true;
console.log(x+isLocked);

// undefined 
let u 
//..
u=10


// NaN /not a number/ -> isNaN()

console.log(x/'a');

// null 
let m = null


//object  massivq
let obj = [];
let obj2 = {};

console.log('x: ', typeof x );
console.log('isLocked: ', typeof isLocked );
console.log('m: ', typeof m );
console.log('obj: ', typeof obj );
console.log('obj2: ', typeof obj2);
console.log('firstname: ', typeof firstname );



if (x>30)
{
    console.log('x is grater than 50');
} 
else if ( x == 10) {
    console.log('x is 10');
}




else {
    console.log('x isn\'t grater than 50');
}




switch (x) {
    case 10:
        console.log('x=10');
        

        case 20:
        console.log('x=20');
       



    default:
        break;
}



// функция - логический блок

function getResult(x=10, y=15){
    //to do
    console.log('result:', x+y)
}
getResult(5, 6) //run function 
getResult(7, 6) //run function 
getResult() //run function по умолчанию 

//console.log('x new value =', x);


function getResult2 (x,y) {
    let result = x+y;
    return result
}

console.log ('Result2:', getResult2(1,1))
console.log ('Result:', getResult(1,1))

let newVar = getResult2 (100,200)
console.log ('newVar:', newVar)



//MASSIVQ 

let cars = ["audi", "bmw", 735, true, undefined, 'benz']
console.log('index:', cars[1])
console.log('index:', cars[4])
cars[4] = 'VW'
console.log('index:', cars[4])

//Ассоциативный массив, ключи!!!!!

let cars2 = {
    cars1:"audi",
    cars2:"bmw",
    cars3:"e30",
}

console.log(cars2.cars3);

// Двумерный ассоциативный массив!!!!!

let cars3 = {
    cars1:"audi",
    cars2:"bmw",
    cars3:"e30",
    cars4: {
        color: "red",
        type: "newType",
        fn: function(x,y) {
            return x+y
        }
    }
}
console.log( cars3.cars4.fn(2,3));

// ЦИКЛЫ!!!
// первое - с чего начинаем, 
// второе - условие, индекс меньше чем количество массивов, иначе прекратит цикл
// третье - increment ++ / decrement--
// increment ++x, x++, разница в том, что запишется в память. Сначала данное, а потом плюс. Или то данное, которое уже с плюсом
// const element


for (let index = 1; index <= 10; index++) {
    //const element = array[index];
    console.log(index);
    
}

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
}

// Циклы ассоциативных массивов
// Object это класс для работы с массивами

console.log( Object.keys(cars3));
console.log( Object.values(cars3));
console.log( Object.entries(cars3));

// наверху вызвали первые уровни ассоциативного массива

let newCars = Object.entries(cars3)
for (let index = 0; index < newCars.length; index++) {
    const element = newCars[index][1];

    if (typeof element == 'object')
    {let secondLevel = Object.entries(element)
     for (let index = 0; index < secondLevel.length; index++) {
        const element = secondLevel[index][1];
        console.log('2 level:', element);
        
    }
    } else {
    console.log('1 level:', element);
}
}

// Схема как работать с ассоциативным массивом
// 1. Object функцией преобразуем ассоциативный массвив в простой 
// 2. Загоняем в цикл 



/* */

let count = '0'; //prompt('Введите число элементов...');
if (count != null) {
    console.log('Число элементов:', count);
    //1
    let result = document.getElementById('result')
    //result.style.backgroundColor = 'red'
    //result.innerHTML='<h1>Hello world!</h1>'
    //2
    let colors = ['green', 'red']
    let colorIndex = -1
    result.addEventListener('click', function(){
        console.log('clicked');

        if (colorIndex== -1 || colorIndex == 1) {
            colorIndex = 0
            result.style.backgroundColor = colors[0]
        } else if (colorIndex ==0) {
            colorIndex= 1
            result.style.backgroundColor = colors[1]
        }


       

    })

   for (let index = 0; index < count; index++) {
        console.log('iteration:', index);
        result.innerHTML += generateBox(index)
        
    }
}
// ``кавычки для многострочных данных
function generateBox(content){
    return `<div class="box">${ content }</div>`
}



// KNOPKa

let box = document.getElementById('box')
let btn = document.getElementById('button')
let btnDown = document.getElementById('buttonDown')

let leftWidth = 0;
let topWidth = 0;

btn.addEventListener('click', function(){
    leftWidth += 10
    box.style.left = leftWidth + 'px'
})

btnDown.addEventListener('click', function(){
    topWidth += 10
    box.style.top = topWidth + 'px'
})



/* multiply table TABLICA UMNOZENIJA*/



}