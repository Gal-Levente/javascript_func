/**
 * @type {{theme:string, time:string, scientist1:string, scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table'); // Létrehozza a Html elemet a memóriában
document.body.appendChild(table); // Hozzáfűz egy Html elemet valamihez

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th = document.createElement('th');
th.innerText = 'Fizika területe';
tr.appendChild(th);
const th2 = document.createElement('th');
th2.innerText = 'Időszak';
tr.appendChild(th2);
const th3 = document.createElement('th');
th3.innerText = 'Képviselők';
th3.colSpan = 2;
tr.appendChild(th3);


const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const a of arr) {
    const tr2 = document.createElement('tr');
    tbody.appendChild(tr2);

    const td1 = document.createElement('td');
    td1.innerText = a.theme;
    tr2.appendChild(td1);
    const td2 = document.createElement('td');
    td2.innerText = a.time;
    tr2.appendChild(td2);
    const td3 = document.createElement('td');
    td3.innerText = a.scientist1;
    tr2.appendChild(td3);
    if(a.scientist2) {
        const td4 = document.createElement('td');
        td4.innerText = a.scientist2;
        tr2.appendChild(td4)
    } else {td3.colSpan = 2}
}