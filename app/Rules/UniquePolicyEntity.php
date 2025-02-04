<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\UserPolicy;

class UniquePolicyEntity implements ValidationRule
{
    protected $policy_id;
    protected $entity_id;

    public function __construct($policy_id, $entity_id)
    {
        $this->policy_id = $policy_id;
        $this->entity_id = $entity_id;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        $exists = UserPolicy::where('policy_id', $this->policy_id)
            ->where('entity_id', $this->entity_id)
            ->exists();
        if ($exists) {
            $fail('This policy for the Entity already Exists');
        }
    }
}
