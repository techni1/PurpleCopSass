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
        Schema::create('supportteam_manages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('support_user')->constrained('users', 'id');
            $table->enum('support_title', ['head', 'support assistant', 'team lead']);
            $table->enum('attendance', ['1', '0'])->default('1')->comment('1=present,0=absent');
            $table->enum('support_status', ['0', '1', '2'])->default('1')->comment('0=deactive, 1=active, 2=hold');
            $table->foreignId('created_by')->constrained('users', 'id');
            $table->foreignId('updated_by')->nullable()->constrained('users', 'id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supportteam_manages');
    }
};
