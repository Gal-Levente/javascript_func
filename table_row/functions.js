/**
 * @typedef {{nationality?:string, writer:string, title:string}} CountryWriters
 */

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

    const br2 = document.createElement("br");
    form.appendChild(br2);

    const br3 = document.createElement("br");
    form.appendChild(br3);
}

function renderTableBody(array) {
    
    const tbody = document.getElementById('tbodyID');
    tbody.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        
        renderTableRow(tbody, array[i], array[i+1]);
    }
}

/**
 * 
 * @param {*} tablebody 
 * @param {*} countrywriters 
 * @param {*} countrywriters2 
 */
function renderTableRow(tablebody, countrywriters, countrywriters2) {
    const a = countrywriters;
        const trBody = document.createElement("tr");
        tablebody.appendChild(trBody);

        if (a.nationality) {
           
            const td1 = createCell('td', a.nationality, trBody);
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
            if (countrywriters2 && !countrywriters2.nationality) {
                td1.rowSpan = 2;
            }
        }
        
        createCell('td', a.writer, trBody);

        createCell('td', a.title, trBody);
}
/**
 * @param {'td'|'th'} cellType 
 * @param {string} cellText
 * @param {HTMLTableRowElement} parentRow 
 */
function createCell(cellType, cellText, parentRow) {
    const cell = document.createElement(cellType)
    cell.innerText = cellText;
    parentRow.appendChild(cell);
    return cell;
}

/**
 * 
 * @param {HTMLHeadElement} table 
 * @param {string[]} headerlist 
 */
function createHeader(table, headerlist) {
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const tr = document.createElement('tr');
    thead.appendChild(tr);
    for(const head of headerlist) {
        createCell('th', head, tr);
    }
}

/**@param {Event} e  */
function HTMLFormEventListener(e) {
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

    /**@type {CountryWriters} */
    const obj = {}

    /**az objektum nemzetiseg elemébe berakjuk a nemzetiseg értékét */
    obj.nemzetiseg = nemzetiseg_value;
    obj.szerzo1 = szerzo1_value;
    obj.szerzo2 = szerzo2_value;
    obj.mu1 = mu1_value;
    obj.mu2 = mu2_value;
    
    const tbody = document.getElementById('tbodID');

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
}