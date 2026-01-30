const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

const database = [
    { id: 1, name: "Ivanov", age: 30 },
    { id: 2, name: "Petrov", age: 24 },
    { id: 3, name: "Sidorov", age: 10 },
    { id: 4, name: "Pavlov", age: 45 },
    { id: 5, name: "Zhukov", age: 72 },
    { id: 6, name: "Barskov", age: 29 },
];


const keys = Object.keys(database[0]);


const trHead = document.createElement("tr");
keys.forEach(key => {
    const td = document.createElement("td");
    td.textContent = key;
    trHead.appendChild(td);
});
thead.appendChild(trHead);


database.forEach(obj => {
    const tr = document.createElement("tr");

    keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
    });

    tbody.appendChild(tr);
});
