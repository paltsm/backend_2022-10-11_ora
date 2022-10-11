"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Books_1 = require("./Books");
let b1 = new Books_1.Book("asd", 10);
let b2 = new Books_1.Book("asd", -1);
console.log(b1.toString());
let b3 = new Books_1.Book("egy", 7);
let b4 = new Books_1.Book("ketto", 0);
let b5 = new Books_1.Book("harom", 11);
let bookList = [b3, b4, b5];
bookList.forEach(e => {
    console.log(e.toString());
});
// Hozz létre benne egy listát, amely 3 könyvet tartalmaz (teszt-adat).
// +feladat: legyen 30, és a név legyen "Book #0" - "Book #29", az értékelés pedig véletlenszerű!
// Írd ki a konzolra az összes könyv nevét.
// Írd ki a konzolra azon könyvek adatait, amelynek az értékelése > 7.
// Készíts egy "bestof" nevű függvényt, amely paraméterként átvesz egy könyvekből álló listát, és visszaadja a legjobb (legnagyobb értékelésű) könyvet.
// Emlékeztetőül:
// npm install
// telepíti a függőségeket, a typescript fordítót
// npx tsc --watch
// Typescript fordítás a hátérben
// npm run src/index.js
// npm run .\src\index.js
// a program futtatása
