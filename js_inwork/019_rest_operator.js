'use strict'

const log = function(a, b, ...rest) {
    console.log(a, b, rest)
}

log('asfdas', 'safsaf', 'adssada', 'dsadsadas')

function calcOrDouble(number, basis = 2) {
    console.log(number * basis)
}

calcOrDouble(3)