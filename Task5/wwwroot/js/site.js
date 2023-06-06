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

let mistakes = 0;
let faker = fakerRU;

let data = [];
let page = 0;
let seed = 0;

const restart = () => {
    document.getElementsByTagName("tbody")[0].innerHTML = "";
    data = [];
    page = 0;
    getData();
}

const getData = () => {
    //добавить ошибки и сохранение данных в массив для формирования csv
    faker.seed(seed + page);
    for (let i = 0; i < 20; i++) {
        let row = table.insertRow(table.rows.length - 1);
        row.insertCell().append(document.createTextNode(data.length))
        row.insertCell().appendChild(document.createTextNode(faker.string.uuid()));
        row.insertCell().appendChild(document.createTextNode(faker.person.fullName()));
        row.insertCell().appendChild(document.createTextNode(faker.location.streetAddress()));
        row.insertCell().appendChild(document.createTextNode(faker.phone.number()));
    }
    page++;
}

window.addEventListener('load', () => {
    getData();
});

window.addEventListener('scroll', () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
        return;
    } else {
        getData();
    }
});

errorsInput.oninput = (event) => {
    if (Number.isInteger(Number(event.target.value))) {
        if (event.target.value === '') {
            mistakes = 0;
            restart();
        } else if (event.target.value >= 0) {
            mistakes = Number(event.target.value);
            restart();
        }
    } 
}

seedInput.oninput = (event) => {
    if (Number.isInteger(Number(event.target.value))) {
        if (event.target.value === '') {
            seed = 0;
            restart();
        } else if (event.target.value >= 0) {
            seed = Number(event.target.value);
            restart();
        }
    }
}

seedButton.onclick = () => {
    let r = Math.floor(Math.random() * 999999);
    seedInput.value = r;
    seed = r;
    restart();
}

csvButton.onclick = () => {
    //допиши
}

regionSelect.onchange = (event) => {
    switch (event.target.value) {
        case '0': faker = fakerRU; break;
        case '1': faker = fakerDE; break;
        case '2': faker = fakerPL; break;
        default: faker = fakerRU; break;
    }
    restart();
}