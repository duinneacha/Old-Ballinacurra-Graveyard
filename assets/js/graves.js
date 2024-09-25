// Ensure the table is shown when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTableData();
    setupSearch();
});

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
            const headers = rows[0].split('\t');
            
            // Define the columns we want to include
            const includedColumns = ['ID', 'Grave Code', 'Surname', 'First Name', 'Died', 'Age', 'Alias', 'Location', 'Gender'];
            const indices = includedColumns.map(col => headers.indexOf(col));
            
            rows.forEach((row, index) => {
                if (row.trim() === '') return; // Skip empty rows
                
                const cols = row.split('\t');
                const tr = document.createElement('tr');
                
                indices.forEach(i => {
                    const cell = index === 0 ? document.createElement('th') : document.createElement('td');
                    cell.textContent = cols[i] || ''; // Use empty string if data is undefined
                    tr.appendChild(cell);
                });
                
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error loading table data:', error);
            const tableBody = document.querySelector('#graves-table tbody');
            tableBody.innerHTML = '<tr><td colspan="9">Error loading data</td></tr>';
        });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            const rows = document.querySelectorAll('#graves-table tbody tr');

            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const match = Array.from(cells).some(cell => 
                    cell.textContent.toLowerCase().includes(filter)
                );
                row.style.display = match ? '' : 'none';
            });
        });
    }
}