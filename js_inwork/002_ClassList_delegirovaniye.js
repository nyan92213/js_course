const btns = document.querySelectorAll('button')
      wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length) // количество классов
// console.log(btns[0].classList.item(0)) // первый класс

// console.log(btns[1].classList.add('red', 'rdghdrogb')) // добвляем новый класс 'red' и 'rdghdrogb'

// console.log(btns[0].classList.remove('blue')) // удаляет класс

// console.log(btns[0].classList.toggle('blue')) // удаляет класс, если его нет - добавляет

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red')
    // }
    btns[1].classList.toggle('red')
})

// console.log(btns[0].className)

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") {
    if (event.target && event.target.matches("button.red")) {
        console.log('got it')
    }
})

// btns.forEach(btn=> {
//     btn.addEventListener('click', () => {
//         console.log('hello')
//     })
// });

const btn = document.createElement('button')
btn.classList.add('red')

wrapper.append(btn)