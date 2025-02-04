<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class DeployProject extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:deploy-project';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deploy the project by running migrations and seeders in a specific order';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting deployment...');

        $this->runMigrationsFresh([
            '/database/migrations/users',
            '/database/migrations/password_reset_tokens',
            '/database/migrations/failed_jobs',
            '/database/migrations/personal_access_tokens',
            '/database/migrations/orders',
            '/database/migrations/permission',
            '/database/migrations/organizations',
            '/database/migrations/entities',
        ], 'Initial migrations');

        $this->info('Running admin and others seeders...');
        Artisan::call('db:seed');
        $this->info('admin and others seeders completed.');

        $this->runMigrations([
            '/database/migrations/designations',
            '/database/migrations/departments',
        ], 'Designation and department migrations');

        // $this->runSeeders([], 'Remaining seeders');

        // $this->runMigrations([
        //     '/database/migrations/designation_id_and_department_id_to_users',
        // ], 'Remaining migrations');

        $this->info('Deployment finished successfully.');
    }

    /**
     * Run migrations for specified paths.
     *
     * @param array $paths
     * @param string $message
     */
    protected function runMigrationsFresh(array $paths, string $message)
    {
        $this->info("Running $message...");
        foreach ($paths as $path) {
            Artisan::call('migrate:fresh', ['--path' => $path]);
            $this->info("Migrated: $path");
        }
    }
    protected function runMigrations(array $paths, string $message)
    {
        $this->info("Running $message...");
        foreach ($paths as $path) {
            Artisan::call('migrate', ['--path' => $path]);
            $this->info("Migrated: $path");
        }
    }

    /**
     * Run seeders for specified classes.
     *
     * @param array $seeders
     * @param string $message
     */
    protected function runSeeders(array $seeders, string $message)
    {
        $this->info("Running $message...");
        if (empty($seeders)) {
            Artisan::call('db:seed');
            $this->info("All seeders run.");
        } else {
            foreach ($seeders as $seeder) {
                Artisan::call('db:seed', ['--class' => $seeder]);
                $this->info("Seeded: $seeder");
            }
        }
    }
}
