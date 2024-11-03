let chart; // Global variable to hold the chart instance

// Function to draw the chart based on user input
function drawChart() {
    const chartType = document.getElementById('chartType').value;
    const labels = document.getElementById('labels').value.split(',').map(label => label.trim());
    const data = document.getElementById('data').value.split(',').map(value => parseFloat(value.trim()));

    const ctx = document.getElementById('chartCanvas').getContext('2d');

    // Destroy previous chart instance if it exists
    if (chart) {
        chart.destroy();
    }

    // Create a new chart instance
    chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Dataset 1',
                data: data,
                backgroundColor: chartType === 'pie' ? generateColors(data.length) : 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: chartType === 'pie' ? {} : {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to generate colors for pie chart segments
function generateColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push(`hsl(${(i * 360 / count)}, 70%, 50%)`);
    }
    return colors;
}
