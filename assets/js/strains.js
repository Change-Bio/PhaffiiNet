// Strain database table functionality
let currentSortColumn = -1;
let sortAscending = true;

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const table = document.getElementById('strainsTable');
    const rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        let visible = false;
        const cells = rows[i].getElementsByTagName('td');
        
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
            if (cellText.includes(filter)) {
                visible = true;
                break;
            }
        }
        
        rows[i].style.display = visible ? '' : 'none';
    }
});

// Sort functionality
function sortTable(columnIndex) {
    const table = document.getElementById('strainsTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName('tr'));
    
    // Toggle sort direction if same column
    if (currentSortColumn === columnIndex) {
        sortAscending = !sortAscending;
    } else {
        sortAscending = true;
        currentSortColumn = columnIndex;
    }
    
    // Sort rows
    rows.sort((a, b) => {
        const aText = a.getElementsByTagName('td')[columnIndex].textContent.trim();
        const bText = b.getElementsByTagName('td')[columnIndex].textContent.trim();
        
        let comparison = aText.localeCompare(bText, undefined, { numeric: true });
        return sortAscending ? comparison : -comparison;
    });
    
    // Reappend sorted rows
    rows.forEach(row => tbody.appendChild(row));
    
    // Update sort arrows
    updateSortArrows(columnIndex);
}

function updateSortArrows(activeColumn) {
    const headers = document.querySelectorAll('#strainsTable th');
    headers.forEach((header, index) => {
        const arrow = header.querySelector('.sort-arrow');
        if (index === activeColumn) {
            arrow.textContent = sortAscending ? '↑' : '↓';
        } else {
            arrow.textContent = '↕';
        }
    });
}