document.getElementById('enterBtn').addEventListener('click', function() {
    const physicsMarks = parseFloat(document.getElementById('physics').value);
    const chemistryMarks = parseFloat(document.getElementById('chemistry').value);
    const mathsMarks = parseFloat(document.getElementById('maths').value);

    const totalMarks = physicsMarks + chemistryMarks + mathsMarks;
    const percentage = (totalMarks / 300) * 100;
    let grade;

    // Determine grade based on percentage
    if (percentage >= 75) {
        grade = 'Distinction';
    } else if (percentage >= 60) {
        grade = 'First Class';
    } else if (percentage >= 50) {
        grade = 'Second Class';
    } else if (percentage >= 35) {
        grade = 'Pass';
    } else {
        grade = 'Fail';
    }

    // Update the DOM with calculated values
    document.getElementById('total').textContent = totalMarks;
    document.getElementById('percentage').textContent = percentage.toFixed(2);
    document.getElementById('grade').textContent = grade;

    // Generate pie chart with Highcharts
    Highcharts.chart('pie-chart', {
        chart: {
            type: 'pie',
            backgroundColor: '#f9f9f9'
        },
        title: {
            text: 'PCM'
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: `Physics: ${(physicsMarks / totalMarks * 100).toFixed(1)} %`,
                    y: physicsMarks
                },
                {
                    name: `Chemistry: ${(chemistryMarks / totalMarks * 100).toFixed(1)} %`,
                    y: chemistryMarks
                },
                {
                    name: `Maths: ${(mathsMarks / totalMarks * 100).toFixed(1)} %`,
                    y: mathsMarks
                }
            ]
        }]
    });
});
