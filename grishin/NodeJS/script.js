const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");
const filterInput = document.getElementById("filterInput");
const filterButton = document.getElementById("filterButton");
const clearButton = document.getElementById("clearButton");

const database = [
    { id: 1, name: "Ivanov", age: 30 },
    { id: 2, name: "Petrov", age: 24 },
    { id: 3, name: "Sidorov", age: 10 },
    { id: 4, name: "Pavlov", age: 45 },
    { id: 5, name: "Zhukov", age: 72 },
    { id: 6, name: "Barskov", age: 29 },
    { id: 7, name: "Abarbanel'", age: 2 },
];

let currentData = [...database];
let currentSort = { column: null, direction: 'A-Z' };


function createHeaders() {
    const headerRow = document.createElement("tr");
    const headers = Object.keys(database[0]);
    
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.addEventListener('click', () => sortData(header));
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
}

// изменение таблицы в реальном
function renderTable(data) {
    tbody.innerHTML = '';
    
    data.forEach(row => {
        const tr = document.createElement("tr");
        Object.values(row).forEach(value => {           
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}


function sortData(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'A-Z' ? 'Z-A' : 'A-Z';            // сортировка (абарбанелю понравилась)
    } else {
        currentSort.column = column;
        currentSort.direction = 'A-Z';
    }

    currentData.sort((a, b) => {
        let valA = a[column];
        let valB = b[column];

        if (typeof valA === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }

        if (currentSort.direction === 'A-Z') {
            if (valA < valB) return -1;
            if (valA > valB) return 1;
            return 0;
        } else {
            if (valA > valB) return -1;
            if (valA < valB) return 1;
            return 0;
        }
    });

    renderTable(currentData);
}


function applyFilter() {
    const searchTerm = filterInput.value.toLowerCase().trim();              // крч это фильтер 
    
    if (searchTerm === '') {
        currentData = [...database];
    } else {
        currentData = database.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTable(currentData);
}


function clearFilter() {
    filterInput.value = '';
    currentData = [...database];
    renderTable(currentData);
}


createHeaders();
renderTable(database);


filterButton.addEventListener('click', applyFilter);
clearButton.addEventListener('click', clearFilter);





const n = +prompt("введите число n: ")

if (n % 2 === 0){
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
        console.log(`Сумма от 1 до ${i} = ${sum}`);
    }
} else {
    let = multy = 1;
    for (let i = 1; i <= n; i++)
        multy *= i;
        console.log(`Произведение от 1 до ${i} = ${multy}`);
    }


            
        