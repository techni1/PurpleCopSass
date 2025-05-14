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
        Schema::create('deal_extention_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dealregister_id')->constrained('dealregisters')->onDelete('cascade');
            $table->foreignId('partner_id')->constrained('users')->onDelete('cascade');
            $table->date('extension_date');
            $table->string('extension_reason')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->date('approved_expirydate')->nullable();
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deal_extention_requests');
    }
};