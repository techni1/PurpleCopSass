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
        Schema::create('commissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('oraganization_id')->constrained('organizations', 'id');
            $table->foreignId('entity_id')->nullable()->constrained('entities', 'id')->nullOnDelete();
            $table->enum('source_type', ['partner', 'sales_team']);
            $table->integer('source_id');
            $table->decimal('amount', 8, 2)->default('0.00');
            $table->enum('commission_status', ['pending', 'paid']);
            $table->string('account_no')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commissions');
    }
};
