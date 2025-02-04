<?php

namespace App\Exports;

use App\Models\Assetmanagement;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SatopicReportExport implements FromQuery, WithHeadings, WithTitle
{

    use Exportable;
    /**
     * @return \Illuminate\Support\Collection
     */
    protected $topicid;
    public function __construct($topicid)
    {
        $this->topicid =  $topicid;
    }

    public function query()
    {

        $data = DB::table('topics')
            ->leftJoin('categories', 'categories.id', '=', 'topics.category_id')
            ->leftJoin('lms_assigneds', 'lms_assigneds.id', '=', 'topics.id')
            ->leftJoin('users as assignuser', 'assignuser.id', '=', 'lms_assigneds.userid')
            ->leftJoin('results', 'results.topic_id', '=', 'topics.id')
            ->select(
                'topics.name',
                'categories.name as categoryname',
                'assignuser.name as assignuser',
                'lms_assigneds.created_at as assigndatetime',
                'results.score',
                'results.created_at as scoredatetime',

            )
            ->where('topics.id', '=', $this->topicid);

        // Apply status-based filtering

        return $data->orderBy('topics.name', 'asc');
    }

    public function headings(): array
    {
        return [
            "Topic Name",
            "Category",
            "Assigned User Name",
            "Assigned DateTime",
            "Score",
            "Score DateTime",

        ];
    }

    public function title(): string
    {
        return 'LMS';
    }
}
