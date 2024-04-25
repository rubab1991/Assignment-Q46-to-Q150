"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create two modules; one that exports a class, and another that imports the class and creates an instance.
var Person_1 = require("./Person");
var alice = new Person_1.Person("Alice");
alice.greet();
