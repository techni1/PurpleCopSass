<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::create([
            "name" => "IT DEPT",
            "description" => "it department",
            "created_by" => 1, // Assuming this will be updated later to a valid user ID
            "updated_by" => 1, // Assuming this will be updated later to a valid user ID
        ]);
    }
}
