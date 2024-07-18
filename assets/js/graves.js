document.getElementById('table-view-btn').addEventListener('click', showTableView);
document.getElementById('map-view-btn').addEventListener('click', showMapView);

function showTableView() {
    document.getElementById('map-view').style.display = 'none';
    document.getElementById('table-view').style.display = 'block';
    loadTableData();
}

function showMapView() {
    document.getElementById('map-view').style.display = 'block';
    document.getElementById('table-view').style.display = 'none';
}

function loadTableData() {
    fetch(dataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const tableBody = document.querySelector('#graves-table tbody');
            tableBody.innerHTML = ''; // Clear previous content
            const rows = data.split('\n');
            rows.forEach((row, index) => {
                const cols = row.split('\t');
                const tr = document.createElement('tr');
                cols.forEach(col => {
                    const cell = index === 0 ? document.createElement('th') : document.createElement('td');
                    cell.textContent = col;
                    tr.appendChild(cell);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error loading table data:', error);
            const tableBody = document.querySelector('#graves-table tbody');
            tableBody.innerHTML = '<tr><td colspan="2">Error loading data</td></tr>';
        });
}