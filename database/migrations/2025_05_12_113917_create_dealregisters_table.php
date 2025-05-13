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
        Schema::create('dealregisters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partner_id')->constrained('partners')->onDelete('cascade');
            $table->string('deal_name');
            $table->string('contact_person');
            $table->string('contact_number');
            $table->string('contact_email');
            $table->date('expiry_date');
            $table->date('extension_date')->nullable();
            $table->string('deal_value');
            $table->enum('deal_status', ['open', 'won', 'lost']);
            $table->text('deal_description')->nullable();
            $table->string('deal_source')->nullable();
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
        Schema::dropIfExists('dealregisters');
    }
};