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
        Schema::table('partners', function (Blueprint $table) {

            $table->foreignId('categoryid')->nullable()->constrained('partner_categories', 'id')->nullOnDelete();
            $table->mediumText('partner_address');
            $table->string('logo')->nullable();
            $table->string('bank_accountnumber')->nullable();
            $table->String('bank_name')->nullable();
            $table->string('bank_branch')->nullable();
            $table->string('bank_ibn')->nullable();
            $table->string('bank_ifsce')->nullable();
            $table->string('bank_swiftcode')->nullable();
            $table->mediumText('bank_address')->nullable();
            $table->enum('tprm', ['yes', 'no'])->default('no');
            $table->enum('msme', ['yes', 'no'])->default('no');
            $table->enum('payment_realsed', ['30', '45', '60', '90'])->nullable();
            $table->enum('partner_status', ['active', 'deactivate', 'block'])->default('active');
            $table->decimal('commission_rate', 2, 2)->default('0.00');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('partners', function (Blueprint $table) {
            //
        });
    }
};