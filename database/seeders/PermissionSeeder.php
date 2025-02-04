<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        // Permission::create(['name' => 'edit articles']);
        $listOfPermission = [


            'satopic-create',
            'satopic-read',
            'satopic-update',
            'satopic-delete',

            'saresult-create',
            'saresult-read',
            'saresult-update',
            'saresult-delete',

            'sacategory-create',
            'sacategory-read',
            'sacategory-update',
            'sacategory-delete',

            'saquestion-create',
            'saquestion-read',
            'saquestion-update',
            'saquestion-delete',

            'saoption-create',
            'saoption-read',
            'saoption-update',
            'saoption-delete',

            // 'activity-create',
            // 'activity-read',
            // 'activity-update',
            // 'activity-delete',

            // 'control-code-create',
            // 'control-code-read',
            // 'control-code-update',
            // 'control-code-delete',

            // 'control-code-evidence-create',
            // 'control-code-evidence-read',
            // 'control-code-evidence-update',
            // 'control-code-evidence-delete',

            // 'control-code-policy-create',
            // 'control-code-policy-read',
            // 'control-code-policy-update',
            // 'control-code-policy-delete',

            // 'control-domain-create',
            // 'control-domain-read',
            // 'control-domain-update',
            // 'control-domain-delete',

            // 'department-create',
            // 'department-read',
            // 'department-update',
            // 'department-delete',

            // 'designation-create',
            // 'designation-read',
            // 'designation-update',
            // 'designation-delete',

            // 'entity-create',
            // 'entity-read',
            // 'entity-update',
            // 'entity-delete',

            // 'evidence-create',
            // 'evidence-read',
            // 'evidence-update',
            // 'evidence-delete',

            // 'framework-create',
            // 'framework-read',
            // 'framework-update',
            // 'framework-delete',

            // 'framework-provision-create',
            // 'framework-provision-read',
            // 'framework-provision-update',
            // 'framework-provision-delete',

            // 'functional-group-create',
            // 'functional-group-read',
            // 'functional-group-update',
            // 'functional-group-delete',

            // 'organization-create',
            // 'organization-read',
            // 'organization-update',
            // 'organization-delete',

            // 'permissions-create',
            // 'permissions-read',
            // 'permissions-update',
            // 'permissions-delete',

            // 'policy-create',
            // 'policy-read',
            // 'policy-update',
            // 'policy-delete',

            // 'profile-create',
            // 'profile-read',
            // 'profile-update',
            // 'profile-delete',

            // 'provision-control-code-create',
            // 'provision-control-code-read',
            // 'provision-control-code-update',
            // 'provision-control-code-delete',

            // 'provision-create',
            // 'provision-read',
            // 'provision-update',
            // 'provision-delete',

            // 'role-create',
            // 'role-read',
            // 'role-update',
            // 'role-delete',

            // 'user-evidence-create',
            // 'user-evidence-read',
            // 'user-evidence-update',
            // 'user-evidence-delete',

            // 'user-policy-create',
            // 'user-policy-read',
            // 'user-policy-update',
            // 'user-policy-delete',

        ];

        $permissions = collect($listOfPermission)->map(function ($permission) {
            return ['name' => $permission, "guard_name" => "web"];
        });

        Permission::insert($permissions->toArray());
    }
}
