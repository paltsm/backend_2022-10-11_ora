"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
    get getName() {
        return this.name;
    }
    get getRating() {
        return this.rating;
    }
    set setRating(rating) {
        console.log("okosskosfsokdos");
        if (this.rating > 0 && this.rating < 11) {
            this.rating = rating;
        }
        else {
            this.rating = 3333;
            console.log("a számnak 1 és 10 között kell lennie");
        }
    }
    toString() {
        console.log(this.name, this.rating);
        return "könyv neve: " + this.name + ", könyv értékelése: " + this.rating;
    }
}
exports.Book = Book;
