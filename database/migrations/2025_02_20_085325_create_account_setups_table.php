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
        Schema::create('account_setups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('folder_name')->unique();
            $table->string('description')->nullable();
            $table->string('db_name')->unique();
            $table->string('db_host');
            $table->string('db_port');
            $table->string('db_username');
            $table->string('db_password');
            $table->string('db_driver');
            $table->tinyInteger('status')->default(1);
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->foreignId('deleted_by')->nullable()->constrained('users');
            $table->foreignId('packasge_id')->constrained('sasspackages');
            $table->foreignId('organization_id')->constrained('organizations')->cascadeOnDelete();
            $table->foreignId('entity_id')->nullable()->constrained('entities')->nullOnDelete();
            $table->softDeletes();
            $table->timestamp('deletedate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('account_setups');
    }
};
