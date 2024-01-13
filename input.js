function submitForm() {
    const name = document.getElementById('name').value;
    const longitude = document.getElementById('longitude').value;
    const latitude = document.getElementById('latitude').value;
    const date = document.getElementById('date').value;
    const intensity = document.getElementById('intensity').value;
    const disasterType = document.getElementById('disasterType').value;

    const outputArea = document.getElementById('output');
    outputArea.innerHTML = `
        <p>Name: ${name}</p>
        <p>Longitude: ${longitude}</p>
        <p>Latitude: ${latitude}</p>
        <p>Date: ${date}</p>
        <p>Intensity: ${intensity}</p>
        <p>Disaster Type: ${disasterType}</p>
    `;

    const csvData = `${name},${longitude},${latitude},${date},${intensity},${disasterType}\n`;
    console.log(csvData);

}
