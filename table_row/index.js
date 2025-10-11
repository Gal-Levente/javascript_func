/**
 * @type {{nationality?:string, writer:string, title:string}[]}
 */
const arr = [
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

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const trHead = document.createElement("tr");
thead.appendChild(trHead);

const ths = ["Nemzetiség", "Szerző", "Mű"];

for (const x of ths) {
    const th = document.createElement("th");
    th.innerText = x;
    trHead.appendChild(th);
}

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);

    if (a.nationality) {
        const td1 = document.createElement("td");
        td1.innerText = a.nationality;
        if (arr[i + 1] && !arr[i + 1].nationality) {
            td1.rowSpan = 2;
        }
        trBody.appendChild(td1);
    }

    const td2 = document.createElement("td");
    td2.innerText = a.writer;
    trBody.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = a.title;
    trBody.appendChild(td3);
}