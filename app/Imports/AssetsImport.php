<?php

namespace App\Imports;

use App\Models\Assetmanagement;

use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AssetsImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {


        return new Assetmanagement([

            'name' => $row['name'],
            'catgory_id' => 9,
            'subcategory_id' => 11,
            'description' => $row['description'],
            'department' => 4,
            'owner' => $row['owner'],
            'value' => $row['value'],
            'currentvalue' => $row['currentvalue'],
            'purchasedate' => date('Y-m-d', strtotime($row['purchasedate'])),
            'boardingdate' => date('Y-m-d', strtotime($row['boardingdate'])),
            'retirementdate' => date('Y-m-d', strtotime($row['retirementdate'])),
            'criticalilty' => 4,
            'vendor_id' => 5,
            'serialnumber' => $row['serialnumber'],
            'isunderrisk' => $row['isunderrisk'],
            'warranty_information' => $row['warranty_information'],
            'warranty_history' => $row['warranty_history'],
            'notes' => $row['notes'],
            'created_by' => Auth::id(),
            'updated_by' => Auth::id()
        ]);
    }
}
