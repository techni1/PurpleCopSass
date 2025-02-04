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
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('percentage', 2, 2);
            $table->date('offer_startdate')->nullable();
            $table->date('offer_enddate')->nullable();
            $table->enum('offer_status', ['1', '0'])->default('0');
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
        Schema::dropIfExists('offers');
    }
};
