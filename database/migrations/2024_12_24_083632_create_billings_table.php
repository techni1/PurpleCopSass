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
        Schema::create('billings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->constrained('organizations', 'id');
            $table->foreignId('entity_id')->nullable()->constrained('entities', 'id')->nullOnDelete();
            $table->foreignId('package_id')->nullable()->constrained('sasspackages', 'id')->nullOnDelete();
            $table->foreignId('offer_id')->nullable()->constrained('offers', 'id')->nullOnDelete();
            $table->string('invoce_no');
            $table->date('invoice_date');
            $table->date('invoice_due_date')->nullable();
            $table->string('ponumber')->nullable();
            $table->string('payment_term')->nullable();
            $table->mediumText('item_desc')->nullable();
            $table->decimal('subtotal', 8, 2);
            $table->decimal('tax', 8, 2);
            $table->decimal('taxable_total', 8, 2)->default('0.00');
            $table->string('hsn')->nullable();
            $table->enum('billing_type', ['One Time', 'Recurring', 'Custom'])->default('One Time');
            $table->enum('billing_cycle', ['Monthly', 'Quarterly', 'Half Yearly', 'Yearly'])->default('Monthly');
            $table->enum('billing_status', ['quotation', 'billing'])->default('quotation');
            $table->enum('payment_status', ['Pending', 'Paid', 'Cancelled', 'Refunded'])->default('Pending');
            $table->decimal('discount_amt', 8, 2)->default('0.00');
            $table->decimal('final_amount', 8, 2)->default('0.00');
            $table->foreignId('bank_deatils')->nullable()->constrained('master_settings', 'id')->nullOnDelete();
            $table->foreignId('term_id')->nullable()->constrained('master_settings', 'id')->nullOnDelete();
            $table->date('next_billingdate');
            $table->mediumText('notes')->nullable();
            $table->string('reason_for_calcellation')->nullable();
            $table->mediumText('reson_notes')->nullable();
            $table->foreignId('quotation_by')->nullable()->constrained('users', 'id');
            $table->dateTime('quotation_date')->nullable();
            $table->foreignId('cancel_by')->constrained('users', 'id');
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
        Schema::dropIfExists('billings');
    }
};