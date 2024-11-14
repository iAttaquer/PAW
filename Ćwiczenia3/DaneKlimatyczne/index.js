const token = 'VyYcQZbPaSqDsctyMLSctpOrdprZsGzU';
const tableBody = document.getElementById('stationsTable').querySelector('tbody');
const searchButton = document.getElementById('searchButton');
const endpointSelect = document.getElementById('endpointSelect');
const tableHead = document.getElementById('stationsTable').querySelector('thead');
const form = document.getElementById('dataForm');

searchButton.addEventListener('click', async function() {
    const selectedEndpoint = endpointSelect.value;
    const response = await fetch(`https://www.ncei.noaa.gov/cdo-web/api/v2/${selectedEndpoint}`, {
        headers: {
            token: token
        }
    });
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';
    const headers = Object.keys(data.results[0]);
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHead.appendChild(th);
    });

    data.results.forEach(item => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = item[header];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const dataset = document.getElementById('dataset').value;
    const locationid = document.getElementById('locationid').value;
    const startdate = document.getElementById('startdate').value;
    const enddate = document.getElementById('enddate').value;
    const limit = document.getElementById('limit').value;
    const offset = document.getElementById('offset').value;

    let url = `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=${dataset}`;
    if (locationid) url += `&locationid=${locationid}`;
    if (startdate) url += `&startdate=${startdate}`;
    if (enddate) url += `&enddate=${enddate}`;
    if (limit) url += `&limit=${limit}`;
    if (offset) url += `&offset=${offset}`;

    const response = await fetch(url, {
        headers: {
            token: token
        }
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';

    if (data.results.length > 0) {
        const headers = Object.keys(data.results[0]);

        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            tableHead.appendChild(th);
        });

        data.results.forEach(item => {
            const row = document.createElement('tr');
            headers.forEach(header => {
                const cell = document.createElement('td');
                cell.textContent = item[header];
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
            });
    }
});