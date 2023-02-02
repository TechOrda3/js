import {includes} from "./test";
// import 'regenerator-runtime';

import { get } from 'lodash-es';

console.log(get({a: {b: 1}}, 'a.b'));

// import 'core-js'
//
// import * as uuid from 'uuid';

// console.log(uuid.v4 + ' TEST')

const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

wait(10).then();

const obj = {
    a: '1'
}

const obj2 = {
    b: 2
}

const obj3 = {
    ...obj,
    ...obj2
}

console.log(obj3);

includes([1, 2, 3], 4);
