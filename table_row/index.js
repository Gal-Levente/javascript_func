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
tbody.id = 'tbodyID';
table.appendChild(tbody);

function renderTableBody(array) {
    const tbody = document.getElementById('tbodyID');
    tbody.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const a = array[i];
        const trBody = document.createElement("tr");
        tbody.appendChild(trBody);

        if (a.nationality) {
            const td1 = document.createElement("td");
            td1.addEventListener('click', function(e) {
                    /**@type {HTMLTableCellElement} */
                    const a = e.target;
                    const p = a.parentElement;
                    const tb = p.parentElement;
                    const tbq = tb.querySelector('.marked');
                    if (tbq !== null) {
                        tbq.classList.remove('marked');
                    }
                    a.classList.add('marked');
                }
            );
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
}

renderTableBody(arr);

const form = document.getElementById('htmlform'); // elkéri a formot
form.addEventListener('submit', function(e){
    e.preventDefault(); // megakadályozza az alapértelmezett működést (get kérés küldése egy szervernek)
    /**@type {HTMLFormElement} */
    const a = e.target;
    /**@type {HTMLInputElement} elkéri a nemzetiség id-jű elemeket*/
    const nemzetiseg = a.querySelector('#nemzetiseg');
    /**@type {HTMLInputElement} elkéri a szerzo1 id-jű elemeket*/
    const szerzo1 = a.querySelector('#szerzo1');
    /**@type {HTMLInputElement} elkéri a szerzo2 id-jű elemeket*/
    const szerzo2 = a.querySelector('#szerzo2');
    /**@type {HTMLInputElement} elkéri a mu1 id-jű elemeket*/
    const mu1 = a.querySelector('#mu1');
    /**@type {HTMLInputElement} elkéri a mu2 id-jű elemeket*/
    const mu2 = a.querySelector('#mu2');

    /**@type {string} az eredeti nemzetiseg változó value tullajdonságát belerakjuk egy újabb változóba*/
    const nemzetiseg_value = nemzetiseg.value;
    /**@type {string} az eredeti szerzo1 változó value tullajdonságát belerakjuk egy újabb változóba*/
    const szerzo1_value = szerzo1.value;
    /**@type {string} az eredeti szerzo2 változó value tullajdonságát belerakjuk egy újabb változóba*/
    const szerzo2_value = szerzo2.value;
    /**@type {string} az eredeti mu1 változó value tullajdonságát belerakjuk egy újabb változóba*/
    const mu1_value = mu1.value;
    /**@type {string} az eredeti mu2 változó value tullajdonságát belerakjuk egy újabb változóba*/
    const mu2_value = mu2.value;

    /**@type {nationality?:string, writer:string, title:string} */
    const obj = {}

    /**az objektum nemzetiseg elemébe berakjuk a nemzetiseg értékét */
    obj.nemzetiseg = nemzetiseg_value;
    obj.szerzo1 = szerzo1_value;
    obj.szerzo2 = szerzo2_value;
    obj.mu1 = mu1_value;
    obj.mu2 = mu2_value;
    
    //const tbody = document.getElementById('tbodyID');

    const tr = document.createElement("tr");
    
    tbody.appendChild(tr);

    const td1 = document.createElement("td");
    td1.innerText = obj.nemzetiseg;
    if(obj.szerzo2 && obj.mu2) {
        td1.rowSpan = 2;
    }
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = obj.szerzo1;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = obj.mu1;
    tr.appendChild(td3);

    if(obj.szerzo2 && obj.mu2) {
        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2)

        const td4 = document.createElement("td");
        td4.innerText = obj.szerzo2;
        tr2.appendChild(td4);

        const td5 = document.createElement("td");
        td5.innerText = obj.mu2;
        tr2.appendChild(td5);
    }
})

/**
 * @param {string} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form, id, labelContent) {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelContent;
    form.appendChild(label);

    const br = document.createElement("br");
    form.appendChild(br);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    form.appendChild(input);
}

const formNew = document.createElement('form');
formNew.id = 'js_form'
document.body.appendChild(formNew);

createFormElement(formNew, 'nemzetiseg', 'Nemzetiség:');
createFormElement(formNew, 'szerzo1', 'Szerző neve:');
createFormElement(formNew, 'szerzo2', 'Szerző neve:');
createFormElement(formNew, 'mu1', 'Mű címe:');
createFormElement(formNew, 'mu2', 'Mű címe:');

const button = document.createElement('button')
button.innerText = 'Hozzáadás';
formNew.appendChild(button)

formNew.addEventListener('submit', function(e) {
    e.preventDefault();

    /**@type {HTMLFormElement} */
    const form = e.target;

    /**@type {HTMLFormElement} */
    const a = e.target;
    /**@type {HTMLInputElement} */
    const nemzetiseg = a.querySelector('#nemzetiseg');
    /**@type {HTMLInputElement} */
    const szerzo1 = a.querySelector('#szerzo1');
    /**@type {HTMLInputElement} */
    const szerzo2 = a.querySelector('#szerzo2');
    /**@type {HTMLInputElement} */
    const mu1 = a.querySelector('#mu1');
    /**@type {HTMLInputElement} */
    const mu2 = a.querySelector('#mu2');

    /**@type {string} */
    const nemzetiseg_value = nemzetiseg.value;
    /**@type {string} */
    const szerzo1_value = szerzo1.value;
    /**@type {string} */
    const szerzo2_value = szerzo2.value;
    /**@type {string} */
    const mu1_value = mu1.value;
    /**@type {string} */
    const mu2_value = mu2.value;

    const obj = {}

    obj.nemzetiseg = nemzetiseg_value;
    obj.szerzo1 = szerzo1_value;
    obj.szerzo2 = szerzo2_value;
    obj.mu1 = mu1_value;
    obj.mu2 = mu2_value;

    arr.push(obj);
    renderTableBody(arr);
})