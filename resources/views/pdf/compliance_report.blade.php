<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Hi I am here</title>
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
        <h1>Hi I am here </h1>
        <h2>fbjbfdjbfj</h2>
    </div>

    <div class="chart">
        <h3>Performance Graph</h3>
		
		<img src="{{ $data['src'] }}" alt="Generated Chart" style="width: 20%; margin: 0 auto;">
		<img src="{{ $data['fchart'] }}" alt="Generated Chart" style="width: 80%; margin: 0 auto;">
      
    </div>

    <div class="footer">
        <p>&copy; {{ date('Y') }} All Rights Reserved.</p>
    </div>

   
</body>

</html>