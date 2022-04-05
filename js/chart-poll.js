const chartPoll = document.getElementById('myChart');
Chart.defaults.font.size = 14;
const myChart = new Chart(chartPoll, {
    type: 'bar',
    data: {
        labels: 
        [[ 'ไข่ไก่','ราคาแพง' ],
         [ 'น้ำท่วมขัง'],
         [ 'ร้านค้า','ริมถนน' ],
         [ 'อัตรา','ค่าโดยสาร'],
         [ 'ด้านการศึกษา'],
         [ 'ขยะมูลฝอย'],
         [ 'กฎหมาย','การจราจร']
        ],
        datasets: [{
            data: [
                12, 
                19, 
                3, 
                5, 
                2, 
                3, 
                11
            ],
            backgroundColor: [
                'rgba(0, 105, 255, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(85, 85, 85, 0.8)',
                'rgba(223, 143, 0, 0.8)'
            ],
            borderColor: [
                'rgba(0, 105, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(85, 85, 85, 1)',
                'rgba(223, 143, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    color: '#000'
                }
            },
            y: {
                ticks: {
                    color: '#000',
                    scaleSize: 200,
                    beginAtZero: true,
                    grace: '10%'
                },
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        aspectRatio: 1.75
    }
});





