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

const th1 = document.createElement('th');
th1.innerText = 'Szerző neve';
tr1.appendChild(th1);
const th2 = document.createElement('th');
th2.innerText = 'Korszak';
tr1.appendChild(th2);
const th3 = document.createElement('th');
th3.innerText = 'Szerelmek';
th3.colSpan = 2;
tr1.appendChild(th3);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const ar of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    td1.innerText = ar.name;
    tr2.appendChild(td1);
    const td2 = document.createElement('td');
    td2.innerText = ar.time;
    tr2.appendChild(td2);
    const td3 = document.createElement('td');
    td3.innerText = ar.love1;
    tr2.appendChild(td3);
    if(ar.love2) {
        const td4 = document.createElement('td');
        td4.innerText = ar.love2;
        tr2.appendChild(td4);
    } else {td3.colSpan = 2}
}