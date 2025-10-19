// Search functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    let searchValue = this.value.toLowerCase();
    let table = document.getElementById('propertyTable');
    let rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let property = row.getElementsByTagName('td')[1].textContent.toLowerCase();
        let area = row.getElementsByTagName('td')[2].textContent.toLowerCase();
        
        if (property.includes(searchValue) || area.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
});

// Filter functionality
document.getElementById('areaFilter').addEventListener('change', filterTable);
document.getElementById('budgetFilter').addEventListener('change', filterTable);
document.getElementById('distanceFilter').addEventListener('change', filterTable);

function filterTable() {
    let areaFilter = document.getElementById('areaFilter').value.toLowerCase();
    let budgetFilter = document.getElementById('budgetFilter').value.toLowerCase();
    let distanceFilter = document.getElementById('distanceFilter').value;
    
    let table = document.getElementById('propertyTable');
    let rows = table.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let area = row.getElementsByTagName('td')[2].textContent.toLowerCase();
        let budget = row.getElementsByTagName('td')[8].textContent.toLowerCase();
        let distance = parseFloat(row.getElementsByTagName('td')[4].textContent);
        
        let areaMatch = areaFilter === '' || area.includes(areaFilter);
        let budgetMatch = budgetFilter === '' || budget.includes(budgetFilter);
        let distanceMatch = distanceFilter === '' || distance <= parseFloat(distanceFilter);
        
        if (areaMatch && budgetMatch && distanceMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}