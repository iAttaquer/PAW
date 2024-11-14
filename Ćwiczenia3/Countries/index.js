const searchButton = document.getElementById('searchButton');
const search = document.getElementById('search');
const countriesTable = document.getElementById('countriesTable');
const tableBody = countriesTable.querySelector('tbody');

searchButton.addEventListener('click', async function() {
    const searchString = search.value;
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchString}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }
        const countries = await response.json();
        tableBody.innerHTML = '';
        const country = countries[0];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${country.name.common}</td>
            <td>${country.capital}</td>
            <td>${country.population}</td>
            <td>${country.region}</td>
            <td>${country.subregion}</td>
        `;
        tableBody.appendChild(row);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
