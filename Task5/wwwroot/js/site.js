// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import { fakerDE, fakerPL, fakerEN_GB } from '../lib/faker-js/faker/dist/esm/index.mjs';
//import '../lib/PapaParse/papaparse.js'

const regionSelect = document.getElementById('select');
const errorsInput = document.getElementById('errorsAmount');
const errorsSlider = document.getElementById('errorsSlider');
const seedInput = document.getElementById('seed');
const seedButton = document.getElementById('seedRand');
const csvButton = document.getElementById('csv');
const table = document.getElementById('table').getElementsByTagName('tbody')[0];

let mistakes = 0;
let faker = fakerEN_GB;

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
        let uuid = faker.string.uuid();
        let fullname = faker.person.fullName();
        let streetAddress = faker.location.streetAddress();
        let number = faker.phone.number();

        [fullname, streetAddress] = addTypos([fullname, streetAddress], mistakes);

        data.push([uuid, fullname, streetAddress, number]);

        let row = table.insertRow(table.rows.length - 1);
        row.insertCell().append(document.createTextNode(data.length))
        row.insertCell().appendChild(document.createTextNode(uuid));
        row.insertCell().appendChild(document.createTextNode(fullname));
        row.insertCell().appendChild(document.createTextNode(streetAddress));
        row.insertCell().appendChild(document.createTextNode(number));
    }
    page++;
}

const addTypos = (fields, amount) => {
    let typo = 0;
    let field = 0;
    for (; amount >= 1; amount--) {
        typo = faker.number.int({ min: 0, max: 2 });
        field = faker.number.int({ min: 0, max: fields.length - 1 });
        //console.log("IN " + fields[field] + " | " + typo);
        switch (typo) {
            case 0: fields[field] = addChar(fields[field]); break;
            case 1: fields[field] = removeChar(fields[field]); break;
            case 2: fields[field] = shuffleChars(fields[field]); break;
        }
        //console.log("OUT" + fields[field]);
    }
    if (amount > 0 && faker.number.float({ min: 0, max: 1 }) > amount) {
        typo = faker.number.int({ min: 0, max: 2 });
        field = faker.number.int({ min: 0, max: fields.length - 1 });
        switch (typo) {
            case 0: fields[field] = addChar(fields[field]); break;
            case 1: fields[field] = removeChar(fields[field]); break;
            case 2: fields[field] = shuffleChars(fields[field]); break;
        }
    }
    return fields;
} 

const addChar = (field) => {
    if (field.length > 30) return field;
    let index = faker.number.int({ min: 0, max: field.length - 1 });
    let ch = faker.string.alpha();
    //console.log(ch + " ADDED TO " + field + " ON " + index);
    let res = field.split('');
    res.splice(index, 0, ch);
    return res.join('');
} 

const removeChar = (field) => {
    if (field.length < 5) return field;
    let index = faker.number.int({ min: 0, max: field.length - 2 });
    //console.log(" REMOVED AT " + index + " IN " + field);
    let res = field.split('');
    res.splice(index, 1);
    return res.join('');
} 

const shuffleChars = (field) => {
    let index = faker.number.int({ min: 0, max: field.length - 1 });
    let index2 = faker.number.int({ min: 0, max: field.length - 1 });
    while (index2 == index) index2 = faker.number.int({ min: 0, max: field.length - 1 });
    //console.log(index + " AND " + index2 + " SHUFFLED IN " + field);
    field = field.split('');
    let tmp = field[index];
    field[index] = field[index2];
    field[index2] = tmp;
    return field.join('');
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
    if (event.target.value === '') {
        mistakes = 0;
        errorsSlider.value = 0;
    } else if (event.target.value >= 0) {
        mistakes = event.target.value;
        if (event.target.value > 10) {
            errorsSlider.value = 10;
        } else {
            errorsSlider.value = event.target.value;
        }
    }
}

errorsSlider.onchange = (event) => {
    errorsInput.value = event.target.value;
    mistakes = event.target.value;
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
    let csv = Papa.unparse(data);
    
    let csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    let csvURL = window.URL.createObjectURL(csvData);

    let testLink = document.createElement('a');
    testLink.href = csvURL;
    testLink.setAttribute('test', 'test.csv');
    testLink.click();
}

regionSelect.onchange = (event) => {
    switch (event.target.value) {
        case '0': faker = fakerEN_GB; break;
        case '1': faker = fakerDE; break;
        case '2': faker = fakerPL; break;
        default: faker = fakerEN_GB; break;
    }
    restart();
}