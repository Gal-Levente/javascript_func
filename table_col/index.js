/**
 * @type {{name:string, time:string, love1:string, love2?:string}[]}
 */

const arr = [
    {
        name: `Balassi Bálint`,
        time: `reformáció`,
        love1: `Losonczy Anna`,
        love2: `Dobó Krisztina`
    },
    {
        name: `Csokonai Vitéz Mihály`,
        time: `felvilágosodás`,
        love1: `Vajda Juliána`
    },
    {
        name: `Petőfi Sándor`,
        time: `magyar romantika`,
        love1: `Mednyanszky Berta`,
        love2: `Szendrey Júlia`
    },
    {
        name: `Ady Endre`,
        time: `20. század`,
        love1: `Léda`,
        love2: `Csinszka`
    }
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr1 = document.createElement('tr');
thead.appendChild(tr1);

createCellElement("th", "Szerző neve", tr1);
createCellElement("th", "Korszak", tr1);
createCellElement("th", "Szerelmek", tr1).colSpan = 2;

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const ar of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    createCellElement("td", ar.name, tr2);
    createCellElement("td", ar.time, tr2);
    const td3 = createCellElement("td", ar.love1, tr2);
    if(ar.love2) {
        createCellElement("td", ar.love2, tr2);
    }
    else {
        td3.colSpan = 2;
    }
}

/**
 * létrehoz egy táblázatcella elemet és hozzáfűzi egy sorhoz
 * @param {string} cellType - cella típusa: th/td
 * @param {string} cellContent - a cella szövege
 * @param {HTMLTableRowElement} cellRow - ehhez a sorhoz fogja hozzáadni
 * @returns {HTMLTableCellElement} - a visszatérő érték egy cella lesz
 */
function createCellElement(cellType, cellContent, cellRow) {
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    cellRow.appendChild(cell);
    return cell;
}