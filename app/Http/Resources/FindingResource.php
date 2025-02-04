<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FindingResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'audit' => $this->audit,
            'auditor_id' => $this->auditor_id,
            'auditor' => new UserResource($this->whenLoaded('auditor')),
            // 'commentable' => new CommentableResource($this->whenLoaded('commentable')),
            'comments' => $this->when(
                $this->relationLoaded('commentable'),
                function () {
                    switch ($this->commentable_type) {
                        case \App\Models\OrganizationPolicy::class:
                            return new OrganizationPolicyResource($this->commentable);
                        case \App\Models\OrganizationEvidence::class:
                            return new OrganizationEvidenceResource($this->commentable);
                        default:
                            return null;
                    }
                }
            ),
            // 'commentable' => $this->whenLoaded('commentable'),
            'comment' => $this->comment,
            'status' => $this->status,
            'nature_of_finding' => $this->nature_of_finding,
            'description' => $this->description,
            'department' => $this->department,
            'correctiveAction' => $this->whenLoaded('correctiveAction'),
            'attachment_path' => $this->attachment_path,
            'remark' => $this->remark,

        ];
    }
}
