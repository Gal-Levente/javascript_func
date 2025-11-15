/**
 * @typedef {{nationality?:string, writer:string, title:string}} CountryWriters
 */

/**
 * @typedef {{id:string, label:string}} FormField
 */

/**
 * @param {string[]} headerList 
 * @param {string} id 
 */
function generateTable(headerList, id) {
    const table = document.createElement('table');
    document.body.appendChild(table);

    createHeader(table, headerList);

    const tbody = document.createElement('tbody');
    tbody.id = id;
    table.appendChild(tbody);
    return table;
}

/**
 * @param {HTMLTableElement} table 
 * @param {string[]} headerList 
 */
function createHeader(table, headerList) { // létrehozza a táblázat fejléceit a fejlécek listája alapján
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    for(const head of headerList) {
        createCell('th', head, tr);
    }
}

/**
 * @param {'td'|'th'} cellType 
 * @param {string} cellText
 * @param {HTMLTableRowElement} parentRow 
 */
function createCell(cellType, cellText, parentRow) { // létrehoz egy cellát a megadott szöveggel és hozzáadja a megadott sorhoz
    const cell = document.createElement(cellType)
    cell.innerText = cellText;
    parentRow.appendChild(cell);
    return cell;
}

/**
 * 
 * @param {HTMLTableSectionElement} tablebody 
 * @param {CountryWriters} countrywriters 
 * @param {CountryWriters} countrywriters2 
 */
function renderTableRow(tablebody, countrywriters, countrywriters2) { // létrehoz egy táblázatsort az arr alapján
    const a = countrywriters;
    const trBody = document.createElement("tr");
    tablebody.appendChild(trBody);

    if (a.nationality) {
           
        const td1 = createCell('td', a.nationality, trBody);
        td1.addEventListener('click', function(e) { // eseménykezelő és marked osztály hozzáadása a cellához
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
        if (countrywriters2 && !countrywriters2.nationality) {
            td1.rowSpan = 2; // beállítja a rowspan értékét 2-re ha a következő elemnek nincs nemzetisége
        }
    }
        
    createCell('td', a.writer, trBody);
    createCell('td', a.title, trBody);
}

/**
 * @param {CountryWriters[]} array 
 */
function renderTableBody(array) { // létrehoz egy táblázat testet az arr alapján
    
    const tbody = document.getElementById('tbodyID');
    tbody.innerHTML = ''; // törli a meglévő tartalmat a tbodyban

    for (let i = 0; i < array.length; i++) {
        
        renderTableRow(tbody, array[i], array[i+1]);
    }
}

/**
 * @param {HTMLFormElement} form 
 * @param {FormField[]} fields
 */
function createFormElement(form, fields) { // feltölti a formot a dataként megadott adatokkal
    for(const field of fields) {
        createFormElementInput(form, field);
    }

    const button = document.createElement('button'); // létrezozaa a hozzáadás gombot
    button.innerText = 'Hozzáadás';
    form.appendChild(button)
}

function createFormElementInput(form, field) {
    const div = document.createElement('div');
    form.appendChild(div);

    const label = document.createElement('label');
    label.htmlFor = field.id;
    label.innerText = field.label;
    div.appendChild(label);

    const br = document.createElement('br');
    div.appendChild(br);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = field.id;
    div.appendChild(input);

    const span = document.createElement('span');
    span.classList.add('error');
    div.appendChild(span);

    const br2 = document.createElement('br');
    div.appendChild(br2);

    const br3 = document.createElement('br');
    div.appendChild(br3);
}

/**
 * 
 * @param {HTMLInputElement} inputfield 
 * @param {string} message 
 */
function validateField(inputfield, message) { // ha a mező nincs kitöltve akkor false értékkel tér vissza és hozzáfűz egy hiba üzenetet
    let valid = true;
    if(inputfield == '') {
        const div = inputfield.parentElement;
        const span = div.querySelector('.error');
        span.innerText = message;
        valid = false;
    }
    return valid
}

/**
 * @param {HTMLInputElement} inputfield1 
 * @param {HTMLInputElement} inputfield2 
 * @param {HTMLInputElement} inputfield3 
 */
function validateFields(inputfield1, inputfield2, inputfield3) { // ha valamelyik mező nincs kitöltve akkor false értékkel tér vissza
    let valid = true;
    if(validateField(inputfield1, 'A mező kitültése kötelező!') == false) {
        valid = false;
    }
    if(validateField(inputfield2, 'A mező kitültése kötelező!') == false) {
        valid = false;
    }
    if(validateField(inputfield3, 'A mező kitültése kötelező!') == false) {
        valid = false;
    }
    return valid;
}



/**@param {Event} e  */
function HTMLFormEventListener(e) { // eseménykezelő a formhoz
    e.preventDefault(); // megakadályozza az alapértelmezett működést (get kérés küldése egy szervernek)
    
    for(err of form.querySelectorAll('.error')) {
        err.innerText = '';
    }

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

    if(validateFields(nemzetiseg.value, szerzo1.value, mu1.value) == false) { //ha a validálás false értékkel tért vissza akkor nem engedi tovább a függvényt
        return;
    }

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

    /**@type {CountryWriters} */
    const obj = {} // első objektum a nemzetiség és szerző és mű tárolására
    /**@type {CountryWriters} */
    const obj2 = {} // második objektum a második szerző és mű tárolására

    obj.nationality = nemzetiseg_value !== '' ? nemzetiseg_value : undefined; // ha a nemzetiségnek nincs értéke akkor undefined értéket adunk neki
    obj.writer = szerzo1_value;
    obj.title = mu1_value;
    arr.push(obj);
    if(szerzo2_value && mu2_value) {
        obj2.writer = szerzo2_value;
        obj2.title = mu2_value;
        arr.push(obj2);
    }
    renderTableBody(arr); // újrahívjuk a táblázatot a hozzáadott adatokkal
    form.reset(); // kiszedi a form mezőit 
}