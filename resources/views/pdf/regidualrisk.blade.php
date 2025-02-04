<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Residual Risk Report</title>
    <style>
    body {
        font-family: 'Arial', sans-serif;
        /* Set the font family */
        font-size: 12px;
        margin: 20px;
        /* Set the default font size */
    }

    @page {
        margin: 20px;
    }

    h1 {
        font-family: 'Arial', sans-serif;
        /* Custom font family for headers */
        font-size: 30px;
        /* Larger font size for headers */
    }

    h2 {
        font-family: 'Arial', sans-serif;
        /* Custom font family for headers */
        font-size: 28px;
        /* Larger font size for headers */
    }


    h3 {
        font-family: 'Arial', sans-serif;
        /* Custom font family for headers */
        font-size: 24px;
        /* Larger font size for headers */
    }

    h4 {
        font-family: 'Arial', sans-serif;
        /* Custom font family for headers */
        font-size: 22px;
        /* Larger font size for headers */
    }

    table {
        width: 100%;
        border-collapse: collapse;

    }

    table,
    th,
    td {
        border: 1px solid black;
        font-family: 'Verdana', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #7b00ff;
        padding: 10px;
    }

    tr,
    td {
        font-family: 'Verdana', sans-serif;
        color: #333;
        text-align: left;
        font-size: 12px;
        font-weight: 400;
    }

    td img {
        display: block;
        margin-left: auto;
        margin-right: auto;

    }

    .chart-container {
        width: 100%;
        margin-top: 20px;
    }

    .page-break {
        page-break-after: always;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        /* Full viewport height */
        text-align: center;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 12px;
        color: gray;
    }
    </style>


</head>

<body>
    <div style="padding-top:50%">
        <h1 align="center">Residual Risk Report</h1>



        <table width="70%" align="center">


            <tr>
                <td width="50%">Report Name</td>
                <td width="50%">Risk Register</td>
            </tr>


            <tr>
                <td width="50%">Report Date</td>
                <td width="50%">{{ date('Y-m-d h:i:s') }}</td>
            </tr>


            <tr>
                <td width="50%">Created By</td>
                <td width="50%">{{ $data['createdby'] }}</td>
            </tr>


            <tr>
                <td width="50%">Organinzation Name</td>
                <td width="50%">{{ $data['Organinzation'] }}</td>
            </tr>
        </table>
        <div class="chart" align="center">

            <img src="{{ $data['src'] }}" alt="Generated Chart" style="width: 20%; margin: 0 auto;">
        </div>

    </div>
    {{-- Footer (this will be on the first page, repeated as necessary) --}}


    <div class="page-break"></div> <!-- Force page break -->



    <div style="padding-top:30%">

        <h1 class="centered"> Residual Risk Report</h1>

        <div class="chart" align="center">

            <img src="{{ $data['fchart'] }}" alt="Generated Chart" style="width: 80%; margin: 0 auto;">
        </div>

    </div>



    <div class="page-break"></div> <!-- Force page break -->

    <h2>Residual Risk Details </h2>





    <table>
        <thead>
            <tr>
                <td width="5%">SN.</td>
                <td width="20%">Risk Name</td>
                <td width="10%" align="center">Category</td>
                <td width="10%" align="center">CIA Value</td>
                <td width="15%" align="center">Threat</td>
                <td width="20%" align="center">Vulnerability</td>
                <td width="5%" align="center">Inherent Risk</td>
                <td width="5%" align="center">Residual Risk</td>
                <td width="10%" align="center">Status</td>
            </tr>
        </thead>

        <tbody>

            <?php $i = 1; ?>

            @foreach($result as $rdata)


            <?php
            $status = '';
            if ($rdata->risk_value <= 4) {

                $status = 'Low';
            } elseif ($rdata->risk_value >= 4 && $rdata->risk_value <= 6) {

                $status = 'Medium';
            } else {
                $status = 'High';
            }
            ?>
            <tr>
                <td width="5%">{{$i++}}</td>
                <td width="20%">{{ $rdata->riskname }}</td>
                <td width="10%" align="center">{{ $rdata->riskcategory }}</td>
                <td width="10%" align="center">{{ $rdata->assetvalue }}</td>
                <td width="15%" align="center">{{ $rdata->threatsname }}</td>
                <td width="20%" align="center">{{ $rdata->vulerability }}</td>
                <td width="5%" align="center">{{ $rdata->risk_value }}</td>
                <td width="5%" align="center">{{ $rdata->revised_risk_value }}</td>
                <td width="10%" align="center">{{ $status }}</td>


            </tr>
            @endforeach
        </tbody>
    </table>









    <div style="clear:both">&nbsp;</div>




</body>

</html>