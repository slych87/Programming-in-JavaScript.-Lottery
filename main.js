const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];

const prefix = ["Wydaje mi się", "Mamy wrażenie", "Szczerze powieedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];


const nameGenerator = () => {

    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * names.length);

    div.textContent = `${prefix[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`
}

btn.addEventListener('click', nameGenerator);