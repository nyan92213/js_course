"use strict";

const p = document.querySelectorAll('p');
console.log(p);

// defer в скрипте позволяет в фоновом режиме загружать скрипт, пока грузится DOM дерево. Запуск будет осуществляться после полной загрузки верстки

// async страница не ждет асинхронных скриптов и не ждут загрузки друг друга.

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js_intro/044_defer_async_dynamic/test.js");
loadScript("js_intro/044_defer_async_dynamic/some.js");