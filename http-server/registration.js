let useForm = document.getElementById('user-form');

const retrieveData = () => {
    let entries = localStorage.getItem("user-entries");
    if(entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }

    return entries;
}

let useEntries = retrieveData();

const displayEntries = () => {
    const entries = retrieveData();
    const tableEntries = entries.map((entry) => {
        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const termsConditions = `<td class='border px-4 py-2'>${entry.termsConditions}</td>`;
        return `<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${termsConditions}</tr>`;
    }).join("\n");

    const table = `<table class='table-auto w-full'>
        <tr>
            <th class='px-4 py-2'>Name</th>
            <th class='px-4 py-2'>Email</th>
            <th class='px-4 py-2'>Password</th>
            <th class='px-4 py-2'>Dob</th>
            <th class='px-4 py-2'>Accepted terms?</th>
        </tr>
        ${tableEntries}
    </table>`;

    let details = document.getElementById('user-entries');
    details.innerHTML = table;
}

const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsConditions = document.getElementById('termsConditions').checked;

    const entry = {
        name,
        email,
        password,
        dob,
        termsConditions
    };

    useEntries.push(entry);

    localStorage.setItem("user-entries", JSON.stringify(useEntries));
    displayEntries();
}

useForm.addEventListener('submit', saveUserForm);
displayEntries();


const today = new Date();
const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate()).toISOString().split('T')[0];
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()).toISOString().split('T')[0];

document.getElementById('dob').setAttribute('min', minDate);
document.getElementById('dob').setAttribute('max', maxDate);