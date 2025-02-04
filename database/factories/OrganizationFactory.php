<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organization>
 */
class OrganizationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'legal_name' => fake()->company(),
            'url' => fake()->url(),
            'security_officer' => fake()->name(),
            'address' => fake()->address(),
            'logo_path' => fake()->imageUrl(),
            'created_by' => 1,
            "updated_by" => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
