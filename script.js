function calculateSGPA() {
    // Get the input values
    const firstYearSGPA = parseFloat(document.getElementById('firstYear').value);
    const secondYearSGPA = parseFloat(document.getElementById('secondYear').value);
    const thirdYearSGPA = parseFloat(document.getElementById('thirdYear').value);
    const fourthYearSGPA = parseFloat(document.getElementById('fourthYear').value);

    // Filter valid SGPA values
    const validSGPAs = [firstYearSGPA, secondYearSGPA, thirdYearSGPA, fourthYearSGPA].filter(isValidSGPA);

    // Check if there is at least one valid SGPA
    if (validSGPAs.length === 0) {
        alert("Enter at least one valid SGPA between 0 and 10");
        return;
    }

    // Calculate aggregate SGPA
    const aggregateSGPA = validSGPAs.reduce((sum, sgpa) => sum + sgpa, 0) / validSGPAs.length;

    // Calculate percentage for each valid year
    const validYearPercentages = validSGPAs.map(sgpa => (sgpa * 10) - 7.5);

    // Calculate aggregate percentage
    const aggregatePercentage = aggregateSGPA * 10 - 7.5;

    // Create the results string
    const resultsString = `
        ${validYearPercentages.map((percentage, index) => `<p>Year ${index + 1} Percentage: ${percentage.toFixed(2)}%</p>`).join('')}
        <p>Aggregate SGPA: ${aggregateSGPA.toFixed(2)}</p>
        <p>Aggregate Percentage: ${aggregatePercentage.toFixed(2)}%</p>
    `;

    // Display results in the popup
    const resultsPopup = document.getElementById('resultsPopup');
    resultsPopup.style.display = 'block';

    // Display results content
    document.getElementById('resultsContent').innerHTML = resultsString;
}

function closePopup() {
    // Close the popup
    document.getElementById('resultsPopup').style.display = 'none';
}

function isValidSGPA(sgpa) {
    return !isNaN(sgpa) && sgpa >= 0 && sgpa <= 10;
}

function validateSGPA(input) {
    const maxSGPA = 10;
    if (input.value > maxSGPA) {
        alert("Enter valid SGPA between 0 and 10");
        input.value = maxSGPA;
    }
}

// Add this function to open the guide popup when the website is opened
function openGuidePopup() {
    const guidePopup = document.getElementById('guidePopup');
    guidePopup.style.display = 'block';
}

// Add this function to close the guide popup
function closeGuidePopup() {
    const guidePopup = document.getElementById('guidePopup');
    guidePopup.style.display = 'none';
}

// Call the openGuidePopup function when the window is loaded
window.onload = openGuidePopup;
