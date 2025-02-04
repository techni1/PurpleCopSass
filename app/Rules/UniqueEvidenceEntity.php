<?php

namespace App\Rules;

use App\Models\UserEvidence;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UniqueEvidenceEntity implements ValidationRule
{
    protected $evidence_id;
    protected $entity_id;

    public function __construct($evidence_id, $entity_id)
    {
        $this->evidence_id = $evidence_id;
        $this->entity_id = $entity_id;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        $exists = UserEvidence::where('evidence_id', $this->evidence_id)
            ->where('entity_id', $this->entity_id)
            ->exists();
        if ($exists) {
            $fail('This evidence for the Entity already Exists');
        }
    }
}
