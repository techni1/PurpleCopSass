<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sasspackages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->mediumText('short_desc');
            $table->enum('payment_type', ['monthly', 'quarterly', 'yearly', 'custom']);
            $table->string('custom_day')->nullable();
            $table->mediumText('instance_config_details')->nullable();
            $table->decimal('file_storage', 4, 2)->default('0');
            $table->float('no_of_integration', 3)->nullable();
            $table->float('no_of_user', 4)->nullable();
            $table->string('grace_period_day');
            $table->enum('assigned_personal_manager', ['1', '0'])->default('0');
            $table->enum('db_backup', ['1', '0'])->default('0');
            $table->enum('notification_email', ['1', '0'])->default('0');
            $table->enum('notification_sms', ['1', '0'])->default('0');
            $table->enum('notification_call', ['1', '0'])->default('1');
            $table->enum('server_type', ['Shared', 'Private']);
            $table->enum('custom_featured_request', ['1', '0'])->default('0');
            $table->decimal('package_amount', 8, 2)->default('0.00');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sasspackages');
    }
};
