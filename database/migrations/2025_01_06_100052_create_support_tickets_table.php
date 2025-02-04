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
        Schema::create('support_tickets', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('issue_image')->nullable();
            $table->enum('status', ['open', 'in_progress', 'closed'])->default('open');
            $table->mediumText('ticket_issueby')->nullable();
            $table->foreignId('organization_id')->nullable()->constrained('organizations', 'id')->nullOnDelete();
            $table->foreignId('entity_id')->nullable()->constrained('entities')->nullOnDelete();
            $table->enum('priorty', ['low', 'medium', 'high'])->default('low');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_tickets');
    }
};
