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
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('faqcategory_id')->constrained('faqcategories')->cascadeOnDelete();
            $table->foreignId('faqtype_id')->constrained('faqtypes')->cascadeOnDelete();
            $table->foreignId('faqsubcategory_id')->constrained('faqsubcategories')->cascadeOnDelete();
            $table->string('question');
            $table->text('answer');
            $table->enum('faqstatus', ['active', 'inactive'])->default('active');
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
