function submitForm() {
    const name = document.getElementById('name').value;
    const longitude = document.getElementById('longitude').value;
    const latitude = document.getElementById('latitude').value;
    const date = document.getElementById('date').value;
    const intensity = document.getElementById('intensity').value;
    const disasterType = document.getElementById('disasterType').value;

    let check1;
    let check2;
    if (isNaN(longitude) || longitude < -180 || longitude > 180) {
        check1 = 'Invalid longitude value. Please enter a value between -180 and 180.';
        return;
    }
    else {
        check1 = "valid value inputted!"
    }

    if (isNaN(latitude) || latitude < -90 || latitude > 90) {
        check2= 'Invalid latitude value. Please enter a value between -90 and 90.';
        return;
    }
    else {
        check2 = "valid value inputted!"
    }

    const outputArea = document.getElementById('output');
    outputArea.innerHTML = `
        <p>Name: ${name}</p>
        <p>Longitude: ${longitude}, ${check1}</p>
        <p>Latitude: ${latitude}, ${check2}</p>
        <p>Date: ${date}</p>
        <p>Intensity: ${intensity}</p>
        <p>Disaster Type: ${disasterType}</p>
    `;

    const csvData = `${name},${longitude},${latitude},${date},${intensity},${disasterType}\n`;
    console.log(csvData);


    var location = window.location.href;
    var directoryPath = location.substring(0, location.lastIndexOf("/")+1);

    console.log(directoryPath);
    


    if (check1 === "valid value inputted!" && check2 === "valid value inputted!") {
    }
}
