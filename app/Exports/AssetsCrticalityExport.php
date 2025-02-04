<?php

namespace App\Exports;

use App\Models\Assetmanagement;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class AssetsCrticalityExport implements FromQuery, WithHeadings, WithTitle
{
    use Exportable;
    /**
     * @return \Illuminate\Support\Collection
     */
    protected $criticality;
    public function __construct($criticality)
    {
        $this->criticality =  $criticality;
    }

    public function query()
    {

        $data = DB::table('assetmanagements')
            ->leftJoin('assetcategories', 'assetcategories.id', '=', 'assetmanagements.catgory_id')
            ->leftJoin('assetsubcategories', 'assetsubcategories.id', '=', 'assetmanagements.subcategory_id')
            ->leftJoin('departments', 'departments.id', '=', 'assetmanagements.department')
            ->leftJoin('assetlocations', 'assetlocations.id', '=', 'assetmanagements.location')
            ->leftJoin('assetcriticalities', 'assetcriticalities.id', '=', 'assetmanagements.criticalilty')
            ->leftJoin('assetvendors', 'assetvendors.id', '=', 'assetmanagements.vendor_id')
            ->leftJoin('riskregisters', 'riskregisters.assets_id', '=', 'assetmanagements.id')
            ->leftJoin('risks', 'risks.id', '=', 'riskregisters.riskid')
            ->select(
                'assetmanagements.name',
                'assetcategories.name as categoryname',
                'assetsubcategories.name as subcategoryname',
                'departments.name as departmentname',
                'assetlocations.name as locationname',
                'assetcriticalities.name as criticalites',
                'assetvendors.name as vendorname',
                'assetmanagements.owner as ownername',
                'assetmanagements.value',
                'assetmanagements.currentvalue',
                'assetmanagements.purchasedate',
                'assetmanagements.boardingdate',
                'assetmanagements.retirementdate',
                'assetmanagements.serialnumber',
                'assetmanagements.warranty_information',
                'assetmanagements.isunderrisk',
                'risks.name as riskname',
                'riskregisters.assetvalue',
                'riskregisters.risk_value',
                'riskregisters.risk_owner',
                'riskregisters.risktreatment_required',
                'riskregisters.riskstrategy_option',
                'riskregisters.closed_date',
                'riskregisters.revised_risk_value',
                'riskregisters.remark',
            )
            ->where('assetmanagements.criticalilty', '=', $this->criticality);

        // Apply status-based filtering

        return $data->orderBy('assetmanagements.name', 'asc');
    }

    public function headings(): array
    {
        return [
            "Assets Name",
            "Category",
            "Type",
            "Department",
            "Location",
            "Criticality",
            "Vendor",
            "Owner",
            "Value",
            "Current Value",
            "Purchase Date",
            "Boarding Date",
            "Retirement Date",
            "Serial Number",
            "Warranty Information",
            "Is Under Risk",
            "Risk Name",
            "CIA Value",
            "Inherent Risk",
            "Risk Owner",
            "Risktreatment Required",
            "Riskstrategy Option",
            "Close Date",
            "Residual Risk",
            "Remarks",
        ];
    }

    public function title(): string
    {
        return 'Assets';
    }
}
