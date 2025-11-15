const data = {
    headers: ["Nemzetiség", "Szerző", "Mű"], // táblázat fejléc adatai
    formFields: [ // form mezőinek adatai
        {id: 'nemzetiseg', label: 'Nemzetiség:'},
        {id: 'szerzo1', label: 'Szerző neve:'},
        {id: 'mu1', label: 'Mű címe:'},
        {id: 'szerzo2', label: 'Másik szerző neve:'},
        {id: 'mu2', label: 'Másik mű címe:'}
    ]
}
const arr = [ // alap adatok a táblázatba
    {
        nationality: 'Orosz',
        writer: 'Gogol',
        title: 'A köpönyeg'
    },
    {
        writer: 'Csehov',
        title: 'A csinovnyik halála'
    },
    {
        nationality: 'Cseh',
        writer: 'Franz Kafka',
        title: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        writer: 'Örkény István',
        title: 'Egyperces Novellák'
    },
    {
        writer: 'József Attila',
        title: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        writer: 'Friedrich Dürrenmatt',
        title: 'A fizikusok'
    }
]

generateTable(data.headers, 'tbodyID'); // létrehozza a táblázatot a megadott fejlécekkel és hozzáad egy azonosítót

renderTableBody(arr); //kitölti a táblázatot az alap adatokkal

const form = document.createElement('form'); // létrehozza a form elemet
form.id = 'js_form'; // hozzáad egy azonosítót a form elemnek
document.body.appendChild(form); // hozzáadja a form elemet a body-hoz

createFormElement(form, data.formFields); // feltölti a formot a megadott mezőkkel

form.addEventListener('submit', HTMLFormEventListener); // eseménykezelő hozzáadása a formhoz és bekért adatok hozzáfűzése a táblázathoz