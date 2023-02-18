const arr = [1, 2, 3];

arr[10] = '2345';

console.log(arr);

const arrObj = {
    1: 1,
    1: 2,
    2: 3,
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};

const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

const obj = {
    "Anna": 1,
    "Alice": 2
};

