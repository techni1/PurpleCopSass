<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Organization;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminSeeder::class,
            PermissionSeeder::class,
            DesignationSeeder::class,
            DepartmentSeeder::class,
            // GDPRProvisionSeeder::class,
            // ISO2022ProvisionSeeder::class,
        ]);

        Organization::factory()
            ->count(5)
            ->hasEntities(2)
            ->create();
    }
}
