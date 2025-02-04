<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>{{ $title }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
        }

        .header {
            text-align: center;
            margin-bottom: 50px;
        }

        .footer {
            text-align: center;
            margin-top: 50px;
        }

        .chart {
            margin: 20px;
        }
    </style>
</head>

<body>
    <div class="header">
        <h1>{{ $title }}</h1>
        <h2>{{ $framework }}</h2>
    </div>

    <div class="chart">
        <h3>Performance Graph</h3>
        <canvas id="performanceChart" width="600" height="300"></canvas>
    </div>

    <div class="footer">
        <p>&copy; {{ date('Y') }} All Rights Reserved.</p>
    </div>

    <!-- Chart.js Script -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        var ctx = document.getElementById('performanceChart').getContext('2d');
        var performanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: @json($chart_data['labels']),
                datasets: [{
                    label: 'Performance',
                    data: @json($chart_data['values']),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
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
    </script>
</body>

</html>