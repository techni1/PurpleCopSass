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
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('host')->default('127,0,0,1');
            $table->string('driver')->default('mysql');
            $table->string('port')->default('3306');
            $table->string('charset')->default('utf8mb4');
            $table->string('collation')->default('utf8mb4_unicode_ci');
            $table->string('prefix')->nullable();
            $table->string('name');
            $table->string('database');
            $table->string('username');
            $table->string('password');
            $table->boolean('strict')->default(true);
            $table->boolean('engine')->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
