'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button')

// const width = box.clientWidth, // размер окна с текстом без полос прокруток и прочего
//       height = box.clientHeight

// const width = box.offsetWidth, // размер окна текстовой части
//       height = box.offsetHeight

const width = box.scrollWidth, // полностью проскроленую часть, но без полос прокрутки
      height = box.scrollHeight 

console.log(width, height)

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'
    // box.scrollTop = 0
    console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect().top)

const style = window.getComputedStyle(box) // не инлайновые стили, идут из css, а инлайн - прописываются непосредственно в код. также изменить их нельзя

console.log(style.display)

console.log(document.documentElement.scrollTop)

window.scrollBy(0, 400) // от текущей позиции

window.scrollTo(0, 400) // от общей высоты страницы