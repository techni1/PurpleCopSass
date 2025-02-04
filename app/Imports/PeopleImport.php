<?php

namespace App\Imports;

use App\Models\People;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;



class PeopleImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {

        return new People([
            'name' => $row['name'],
            'email' => $row['email'],
            'pepole_status' => $row['status'],
            'installed_agents' => $row['agents'],
            'installed_antivirus' => $row['antivirus'],
            'created_by' => Auth::id(),
            'updated_by' => Auth::id(),

        ]);
    }
}
