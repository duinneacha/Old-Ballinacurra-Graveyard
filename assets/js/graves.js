document.addEventListener('DOMContentLoaded', function() {
    loadTableData();
    setupSearch();
    setupModal();
});

function loadTableData() {
    fetch(dataUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#graves-table tbody');
            tableBody.innerHTML = '';
            
            // Define the columns we want to show in the table
            const includedColumns = ['Surname', 'FirstName', 'Died', 'Details'];
            
            // Insert headers
            const headers = includedColumns.map(col => col.replace(/([A-Z])/g, ' $1').trim());
            const headerRow = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header === 'Details' ? '' : header;
                th.style.textAlign = header === 'Details' ? 'center' : 'left';
                headerRow.appendChild(th);
            });
            document.querySelector('#graves-table thead').innerHTML = '';
            document.querySelector('#graves-table thead').appendChild(headerRow);

            // Loop through JSON data and create rows
            data.forEach((entry) => {
                const tr = document.createElement('tr');
                tr.style.cursor = 'pointer';
                
                // Store the full entry data as a data attribute
                tr.dataset.entry = JSON.stringify(entry);

                // Add the standard columns
                includedColumns.forEach(col => {
                    const td = document.createElement('td');
                    if (col === 'Details') {
                        // Check if entry has additional details
                        const hasDetails = checkForDetails(entry);
                        if (hasDetails) {
                            td.innerHTML = '<i class="fas fa-info-circle" style="color: #4a4a4a;"></i>';
                            td.title = 'Click for more details';
                        }
                        td.style.textAlign = 'center';
                    } else {
                        td.textContent = entry[col] || '';
                    }
                    tr.appendChild(td);
                });

                // Add click handler for the row
                tr.addEventListener('click', function() {
                    showEntryDetails(entry);
                });

                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error loading table data:', error);
            const tableBody = document.querySelector('#graves-table tbody');
            tableBody.innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
        });
}

function checkForDetails(entry) {
    // Define which fields constitute "additional details"
    const detailFields = ['Code', 'Origin', 'Grid Reference N', 'Grid Reference E', 
                         'Inscription', 'Other Information', 'piclist'];
    
    return detailFields.some(field => entry[field] && entry[field] !== 'null' && entry[field] !== '');
}

function createImageGallery(piclist) {
    if (!piclist) return '';
    
    const imageBasePath = '/assets/imgs/grave-pics/';
    const imageNames = piclist.split(',').map(pic => pic.trim());
    
    return `
        <div class="image-gallery">
            ${imageNames.map(imageName => `
                <div class="gallery-item">
                    <img src="${imageBasePath}${imageName}" 
                         alt="Grave photograph - ${imageName}" 
                         onerror="this.style.display='none'">
                </div>
            `).join('')}
        </div>
    `;
}

function showEntryDetails(entry) {
    const modal = document.getElementById('details-modal');
    const modalDetails = document.getElementById('modal-details');
    
    // Create the content for the modal
    let content = `
        <table class="details-table">
            <tr><th>Name:</th><td>${entry.FirstName || ''} ${entry.Surname || ''}</td></tr>
            ${entry.Died ? `<tr><th>Died:</th><td>${entry.Died}</td></tr>` : ''}
            ${entry.Code ? `<tr><th>Code:</th><td>${entry.Code}</td></tr>` : ''}
            ${entry.Origin ? `<tr><th>Origin:</th><td>${entry.Origin}</td></tr>` : ''}
            ${entry['Grid Reference N'] ? `<tr><th>Grid Reference N:</th><td>${entry['Grid Reference N']}</td></tr>` : ''}
            ${entry['Grid Reference E'] ? `<tr><th>Grid Reference E:</th><td>${entry['Grid Reference E']}</td></tr>` : ''}
            ${entry.Inscription ? `<tr><th>Inscription:</th><td>${entry.Inscription}</td></tr>` : ''}
            ${entry['Other Information'] ? `<tr><th>Other Information:</th><td>${entry['Other Information']}</td></tr>` : ''}
        </table>
        ${entry.piclist ? createImageGallery(entry.piclist) : ''}
    `;
    
    modalDetails.innerHTML = content;
    modal.style.display = 'block';
}

function setupModal() {
    const modal = document.getElementById('details-modal');
    const span = document.getElementsByClassName('close')[0];
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
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