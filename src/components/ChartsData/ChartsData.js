const chartsData = {};

//chart data is stored here for more clean project

chartsData.dataDoughnut = {//Data for doughnut chart
    labels: [
        'Easy',
        'Medium',
        'Hard'
    ],
    datasets: [{
        data: [100, 200, 20],
        backgroundColor: [
            '#0D9800',
            '#E9A13B',
            '#B20000'
        ],
        hoverBackgroundColor: [
            '#10B600',
            '#FFAB34',
            '#DC0000'
        ]
    }],
    text: '23%'
}

chartsData.dataBar = {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sábados', 'Domingos'],
    datasets: [
        {
        label: 'Steven frequency coding weekly',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(162,162,162,0.5)',
            'rgba(228,0,0,0.5)',
            'rgba(0,228,152,0.5)',
            'rgba(0,108,228, 0.5)',
            'rgba(163,0,228, 0.5)',
            'rgba(67,45,57, 0.5)'
        ],
        hoverBackgroundColor: [
            'rgba(162,162,162,0.7)',
            'rgba(228,0,0,0.7)',
            'rgba(0,228,152,0.7)',
            'rgba(0,108,228, 0.7)',
            'rgba(163,0,228, 0.7)',
            'rgba(67,45,57, 0.7)'
        ],
        borderColor: [
            'rgba(162,162,162,1)',
            'rgba(228,0,0,1)',
            'rgba(0,228,152,1)',
            'rgba(0,108,228,1)',
            'rgba(163,0,228,1)',
            'rgba(67,45,57,1)'
        ]
        }
    ]
}
export default chartsData;