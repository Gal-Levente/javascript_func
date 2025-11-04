const form = document.createElement("form");
form.id = "form_js";
document.body.appendChild(form);

const h2 = document.createElement("h2");
h2.innerText = "Javascript form";
form.appendChild(h2);

createFormLabelAndElement("Költő neve:", "kolto_nev");
createFormLabelAndElement("Korszak:", "korszak");
createFormLabelAndElement("Szerelme:", "szerelem1");
createFormLabelAndElement("Szerelme:", "szerelem2");

const button = document.createElement("button");
button.innerText = "Hozzáadás";
form.appendChild(button);
/**
 * Létrehozza a formhoz a labelt és az inputot
 * @param {string} labelText a label szövege, típusa "text" alapból
 * @param {string} id összeköti a labelt és az inputot, az input id-je
 */
function createFormLabelAndElement(labelText, id) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;
    form.appendChild(label);

    const br = document.createElement("br");
    form.appendChild(br);

    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    form.appendChild(input);

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    form.appendChild(br1);
    form.appendChild(br2);
}