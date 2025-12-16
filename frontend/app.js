// Store a record
async function storeRecord() {
    const data = document.getElementById('recordData').value;
    const res = await fetch('http://localhost:3000/store', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    });
    const result = await res.json();
    console.log(result);
    alert(`Store Record: ${JSON.stringify(result)}`);
}

// Get a record by index
async function getRecord() {
    const index = document.getElementById('recordIndex').value;
    const res = await fetch(`http://localhost:3000/record/${index}`);
    const record = await res.json();
    console.log(record);
    document.getElementById('recordOutput').innerText = 
        `Data: ${record.data}\nTimestamp: ${record.timestamp}\nCreator: ${record.creator}`;
}

// Get total record count
async function getRecordCount() {
    const res = await fetch('http://localhost:3000/count');
    const count = await res.json();
    console.log(count);
    document.getElementById('countOutput').innerText = `Total Records: ${count.count}`;
}

// Transfer ETH
async function transferETH() {
    const to = document.getElementById('toAddress').value;
    const amount = document.getElementById('amount').value;
    const res = await fetch('http://localhost:3000/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, amount })
    });
    const result = await res.json();
    console.log(result);
    document.getElementById('transferOutput').innerText = `Transfer Result: ${JSON.stringify(result)}`;
}
