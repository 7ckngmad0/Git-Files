const ctx = document.getElementById('barchart');

const barchart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['PYTHON', 'HTML', 'CSS', 'JAVASCRIPT', 'FLUTTER', 'DART', 'C', 'C++'],
    datasets: [{
      label: 'Proficiency',
      data: [4, 8, 10, 3, 1, 2, 8, 6],
      backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(67, 216, 211, 0.2)',
            'rgba(67, 216, 45, 0.2)'
        
    ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(67, 216, 211, 1)',
        'rgba(67, 216, 45, 1)'

      ],
      borderWidth: 0.5
    }]
  },
  
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});