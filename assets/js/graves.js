document.getElementById('table-view-btn').addEventListener('click', showTableView);
document.getElementById('map-view-btn').addEventListener('click', showMapView);

// const dataUrl = '/assets/data/vip_graves_list.txt';

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


// document.getElementById('search-input').addEventListener('input', function() {
//     const filter = this.value.toLowerCase();
//     const rows = document.querySelectorAll('#graves-tbody tr');
//     console.log(rows);

//     rows.forEach(row => {
//         const cells = row.querySelectorAll('td');
//         const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filter));
//         row.style.display = match ? '' : 'none';
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-input').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const rows = document.querySelectorAll('#graves-table tbody tr'); // Ensure correct selector
        console.log(rows);

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filter));
            row.style.display = match ? '' : 'none';
        });
    });
});