<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Models\Tenant;

class TenantDatabaseSwitcher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            $tenant = Tenant::find(Auth::user()->tenant_id);

            if ($tenant) {
                $this->updateEnv([
                    'DB_HOST'     => $tenant->db_host,
                    'DB_PORT'     => $tenant->db_port,
                    'DB_DATABASE' => $tenant->db_database,
                    'DB_USERNAME' => $tenant->db_username,
                    'DB_PASSWORD' => $tenant->db_password,
                ]);

                // Reload config after updating .env
                config()->set('database.connections.mysql.host', $tenant->db_host);
                config()->set('database.connections.mysql.port', $tenant->db_port);
                config()->set('database.connections.mysql.database', $tenant->db_database);
                config()->set('database.connections.mysql.username', $tenant->db_username);
                config()->set('database.connections.mysql.password', $tenant->db_password);

                // Set the new database connection
                \DB::purge('mysql'); // Clear previous connection
                \DB::reconnect('mysql'); // Reconnect with new credentials
            }
        }

        return $next($request);
    }


    protected function updateEnv(array $data)
    {
        $envPath = base_path('.env');
        $env = File::get($envPath);

        foreach ($data as $key => $value) {
            $pattern = "/^$key=.*$/m";
            $replacement = "$key=$value";
            $env = preg_replace($pattern, $replacement, $env);
        }

        File::put($envPath, $env);
    }
}
