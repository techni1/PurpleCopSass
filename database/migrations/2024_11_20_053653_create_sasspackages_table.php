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
            $table->decimal('file_storage', 8, 2)->default('0');
            $table->decimal('no_of_integration', 10, 0)->nullable();
            $table->decimal('no_of_user', 10, 0)->nullable();
            $table->string('grace_period_day');
            $table->tinyInteger('assigned_personal_manager')->default(0);
            $table->tinyInteger('db_backup')->default(0);
            $table->tinyInteger('notification_email')->default(0);
            $table->tinyInteger('notification_sms')->default(0);
            $table->tinyInteger('notification_call')->default(0);
            $table->tinyInteger('custom_featured_request')->default(0);
            $table->enum('server_type', ['Shared', 'Private']);
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