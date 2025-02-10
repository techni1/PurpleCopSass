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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('legal_name');
            $table->string('url')->nullable();
            $table->string('overview')->nullable();
            $table->string('contact_us')->nullable();
            $table->string('founded_in')->nullable();
            $table->string('security_officer');
            $table->string('terms_condition')->nullable();
            $table->string('privacy_policy')->nullable();
            $table->longText('address')->nullable();
            $table->string('logo_path')->nullable();
            $table->tinyInteger('iscreate_partner')->default(0);
            $table->foreignId('partner_id')->nullable()->constrained('users')->nullOnDelete();
            $table->enum('status', ['pending', 'deny', 'approved'])->default('pending');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
