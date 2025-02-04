<?php

namespace Database\Seeders;

use App\Models\Designation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DesignationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Designation::create([
            "name" => "Web Developer",
            "description" => "fullstack developer",
            "created_by" => 1, // Assuming this will be updated later to a valid user ID
            "updated_by" => 1, // Assuming this will be updated later to a valid user ID
        ]);
    }
}
