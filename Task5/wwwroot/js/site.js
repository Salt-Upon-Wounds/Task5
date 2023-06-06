// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import { fakerDE, fakerRU, fakerPL } from '../lib/faker-js/faker/dist/esm/index.mjs';

const regionSelect = document.getElementById('select');
const errorsInput = document.getElementById('errorsAmount');
const seedInput = document.getElementById('seed');
const seedButton = document.getElementById('seedRand');
const csvButton = document.getElementById('csv');
const table = document.getElementById('table').getElementsByTagName('tbody')[0];

let faker = fakerRU;

let data = [];

const restart = () => {
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    data = [];
    getData();
}

const getData = () => {
    console.log(faker);
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow(table.rows.length - 1);
        row.insertCell().append(document.createTextNode(data.length))
        row.insertCell().appendChild(document.createTextNode(faker.string.uuid()));
        row.insertCell().appendChild(document.createTextNode(faker.person.fullName()));
        row.insertCell().appendChild(document.createTextNode(faker.location.streetAddress()));
        row.insertCell().appendChild(document.createTextNode(faker.phone.number()));
    }
}

window.addEventListener('load', () => {
    getData();
});
