const form = document.getElementById('form');
const tableBody = document.getElementById('tableBody');

document.addEventListener('DOMContentLoaded', loadEntries);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    addEntryToTable(name, email, password, dob, terms);
    saveEntryToLocalStorage(name, email, password, dob, terms);
    form.reset();
});

function addEntryToTable(name, email, password, dob, terms) {
    tableBody.innerHTML+= `
        <td class="border px-4 py-2">${name}</td>
        <td class="border px-4 py-2">${email}</td>
        <td class="border px-4 py-2">${password}</td>
        <td class="border px-4 py-2">${dob}</td>
        <td class="border px-4 py-2">${terms}</td>
    `;
}

function saveEntryToLocalStorage(name, email, password, dob, terms) {
    let entries = JSON.parse(localStorage.getItem('formEntries')) || [];
    entries.push({name, email, password, dob, terms});
    localStorage.setItem('formEntries', JSON.stringify(entries));
}

function loadEntries() {
    let entries = JSON.parse(localStorage.getItem('formEntries')) || [];
    entries.forEach(entry => {
        addEntryToTable(entry.name, entry.email, entry.password, entry.dob, entry.terms);
    });
}