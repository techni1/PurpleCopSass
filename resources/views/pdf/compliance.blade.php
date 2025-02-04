<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Framework Report</title>
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
        <h1 align="center">Framework Report</h1>



        <table width="70%" align="center">

            <tr>
                <td width="50%">Framework Name</td>
                <td width="50%">{{ $framwork[0]->name }}</td>
            </tr>
            <tr>
                <td width="50%">Report Name</td>
                <td width="50%">{{ $data['reportType'] }}</td>
            </tr>


            <tr>
                <td width="50%">Report Date</td>
                <td width="50%">{{ date('Y-m-d') }}</td>
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
    <div class="footer">
        {{ $data['footer'] }}
    </div>

    <div class="page-break"></div> <!-- Force page break -->



    <div style="padding-top:30%">

        <h1 class="centered"> Framework Name -{{ $framwork[0]->name }}</h1>

        <div class="chart" align="center">

            <img src="{{ $data['fchart'] }}" alt="Generated Chart" style="width: 80%; margin: 0 auto;">
        </div>

    </div>

    {{-- Footer (this will be on the first page, repeated as necessary) --}}
    <div class="footer">
        {{ $data['footer2'] }}
    </div>

    <div class="page-break"></div> <!-- Force page break -->

    <h2>Provision Details </h2>

    @php $pageno =3; @endphp
    @foreach( $framwork[0]->provisions as $pdata)


    <h3>{{ $pdata->code }} {{ $pdata->provisions }}</h3>

    @php
    $controldata = App\Models\Reports::getControlsByProvisioncode($pdata->id);

    @endphp

    @foreach($controldata as $cdata)

    <h4>{{ $cdata->code }} {{ $cdata->name }}</h4>

    <div class="col-md-12">
        <div>
            <div
                style="font-weight:bold; padding-bottom:10px;   font-family: 'Arial', sans-serif; letter-spacing: 1px;">
                Policy Details</div>

            @php

            $policydata = App\Models\Reports::getPolicyByControlid($cdata->id);
            @endphp
            @if(count($policydata)>0)

            <table>
                <thead>
                    <tr>
                        <td width="65%">Policy</td>
                        <td width="10%" align="center">Status</td>
                        <td width="10%" align="center">Compliant</td>
                        <td width="15%" align="center">Scope</td>
                    </tr>
                </thead>

                <tbody>



                    @foreach($policydata as $pydata)


                    <?php
                    if ($pydata['scope'] == 'out') {
                        $scopeshow = 'Out Of Scope';
                    } else {
                        $scopeshow = 'In Scope';
                    }
                    ?>
                    <tr>
                        <td width="65%">{{ $pydata['policyname'] }}</td>
                        <td width="10%" align="center">{{ $pydata['status'] }}</td>
                        <td width="10%" align="center"><img src="{{ $pydata['compliant'] }}" width="30px"
                                align="center" /></td>
                        <td width="15%" align="center">{{ $scopeshow }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            @else

            <div>No Data Found</div>

            @endif



        </div>
    </div>



    <div class="col-md-12" style="padding-top:10px;">
        <div>
            <div style="font-weight:bold; padding-bottom:10px; font-family:'Arial', sans-serif;letter-spacing: 1px;">
                Evidence Details
            </div>

            @php

            $evidencedata = App\Models\Reports::getEvidenceByControlid($cdata->id);
            @endphp
            @if(count($evidencedata)>0)

            <table>
                <thead>
                    <tr>
                        <td width="65%">Evidence</td>
                        <td width="10%" align="center">Status</td>
                        <td width="10%" align="center">Compliant</td>
                        <td width="15%" align="center">Scope</td>
                    </tr>
                </thead>

                <tbody>



                    @foreach($evidencedata as $evdata)

                    <?php
                    if ($evdata['scope'] == 'out') {
                        $scopeshow = 'Out Of Scope';
                    } else {
                        $scopeshow = 'In Scope';
                    }
                    ?>


                    <tr>
                        <td width="65%">{{ $evdata['evidencename'] }}</td>
                        <td width="10%" align="center">{{ $evdata['status'] }}</td>
                        <td width="10%" align="center"><img src="{{ $evdata['compliant'] }}" width="30px"
                                align="center" /></td>
                        <td width="15%" align="center">{{ $scopeshow }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>

            @else

            <div>No Data Found</div>

            @endif



        </div>
    </div>
    <div style="clear:both">&nbsp;</div>
    <hr />
    @endforeach

    @endforeach


</body>

</html>