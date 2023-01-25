import greeting from "./greeting";
import { User } from "./user";
import { test } from "./test";

import './styles/style.css'

const user = new User('Techorda', 18);
console.log(user);
console.log(greeting(user.name));
test()

const obj = {
    ...user,
    surname: 'TechOrda Surname'
}

console.log(obj);
