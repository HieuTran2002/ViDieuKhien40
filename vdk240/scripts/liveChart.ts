import Chart, { Chart as ChartJS, LinearScale } from 'chart.js/auto';
//import { Chart } from 'chart.js/dist';
ChartJS.register(LinearScale);


// Define the Steam data
const canvas = document.getElementById('myChart') as HTMLCanvasElement;
const slider = document.getElementById('range-slider') as HTMLInputElement;

if (canvas) {

const ctx = canvas.getContext('2d');

// Set up initial data
let dataPoints: number[] = [];

// Create the chart
const chart = new Chart(ctx, {
    type: 'line', // Change the type of chart here (e.g., bar, pie, etc.)
    data: {
        labels: [],
        datasets: [
            {
                label: 'Live Data',
                cubicInterpolationMode: 'monotone',
                data: dataPoints,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the color as desired
                borderColor: 'rgba(75, 192, 192, 1)', // Adjust the color as desired
                borderWidth: 1,
            },
        ],
    },
    options: {
        animation: {
            duration: 0, // Disable animation to improve performance
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Function to generate random data
function generateRandomData() {
    //const newData = Math.floor(Math.random() * 100; // Generate random data (replace this with your own data source)
    const newData = Number(slider.value);
    dataPoints.push(newData);

    // Limit the data array to a specific number of points (e.g., 10)
    if (dataPoints.length > 10) {
        dataPoints.shift();
    }

    // Generate labels based on the current timestamp
    const timestamp = new Date().toLocaleTimeString('en-US');
    chart.data.labels.push(timestamp);

    // Limit the labels array to a specific number of points (e.g., 10)
    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
    }

    // Update the chart
    chart.update();
}

    setInterval(generateRandomData, 1000);
// Call the function to generate data every second

}
