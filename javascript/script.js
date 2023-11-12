// let a = 'Hello World!'

// var b = 'Hellow world 2'

// const c = 'Constant variable'

// console.log(a)



// if(1 < 2) {
//     let a = '1 is less than 2'

//     console.log(a)
// }

// console.log(a)



// const a = [1, 'a', null, [2,3]]

// a=[] - error 

// a.push(5);

// console.log(a); 



// const a = [1,2,3,4,5,6,7]

// a.forEach(function(value, index){
//     console.log('value', value, 'index', index)
// })



// let b = {
//     name: 'Faiz',
//     college: 'MJCET',
//     year: 2023
// }

// b.name='Faiz Ahmed'
// b.school='igs'

// delete b.college

// b.college = 'MJCET'

// console.log(b)



// var c

// sum(1, 2)

// function sum(a, b) {
//     c = a+b;

//     console.log(c)
// }



function addElement(){
    var parentDiv = document.getElementById('parent')
    var div = document.createElement('div')

    div.classList.add('row')

    var img = document.createElement('img')

    var button = document.createElement('button')
    button.innerText = 'My button'

    img.src = 'imgsource'

    div.appendChild(img)
    div.appendChild(button)

    parentDiv.appendChild(div)

}

addElement()
