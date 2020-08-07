let graphic1 = document.getElementById('traffic-chart');
let graphic2 = document.getElementById('daily-chart');
let graphic3 = document.getElementById('users-chart');

// Graphic #1
let myTrafficChart = new Chart(graphic1, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 1200, 1000, 2000, 1500, 1650, 1250, 1850, 2250, 1500, 2700],
            backgroundColor: 'rgba(226, 227, 246, 0.6)',
            borderColor: 'rgba(176, 179, 231, 1)',
            borderWidth: 1.5,
            pointRadius: 6,
            pointBackgroundColor: 'rgba(251, 251, 251, 1)',
            pointBorderWidth: '2',
            pointBorderColor: 'rgba(116,120,191,1)',
            lineTension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false,
        },
        aspectRatio: 2,
        layout: {
            padding: {
                left: 10,
                right: 40
            }
        }
    }
});


// Graphic #2
let myUsersChart = new Chart(graphic2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#7377bf',
            data: [70, 110, 160, 120, 220, 200, 100]
        }]
    },
    options: {
        layout: {
            padding: {
                left: 10,
                right: 40,
                bottom: 30
            }
        },
        legend: {
            display: false
        }
    }
});


// Graphic #3
let myDailyChart = new Chart(graphic3, {
    type: 'doughnut',
    data: {
        labels: ['Tablets', 'Phones', 'Desktop'],
        datasets: [{
            label: 'Mobile users',
            data: [15, 15, 70],
            backgroundColor: ['#81c98f', '#74b1bf', '#7377bf'],
            borderWidth: 0
        }]
    },
    options: {
        aspectRatio: 2,
        layout: {
            padding: {
                left: 10,
                right: 40,
                bottom: 30
            }
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontSize: 18,
                boxWidth: 20,
                fontFamily: 'Lato'
            }
        }
    }
});
