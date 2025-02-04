<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {
        $superAdminRole = Role::firstOrCreate(['name' => 'Super-Admin']);
        $adminUser =  User::create([
            "name" => "Admin",
            "email" => "admin@grc.com",
            "password" => Hash::make('1234@#5678'), // Ensure the password is within quotes
            "added_by" => 1, // Assuming this will be updated later to a valid user ID
            "updated_by" => 1, // Assuming this will be updated later to a valid user ID
            "email_verified_at" => now(),
        ]);
        $adminUser->assignRole($superAdminRole);
    }
}
