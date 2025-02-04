<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait HasSlug
{
  /**
   * Create a unique slug for the model.
   *
   * @param string $name
   * @param int|null $modelId
   * @return string
   */
  protected function createUniqueSlug($name, $modelId = null)
  {
    $slug = Str::slug(str_replace('.', '-', $name));
    $originalSlug = $slug;

    // Get the current model class name
    $modelClass = get_class($this);

    $count = $modelClass::where('slug', $slug)
      ->when($modelId, function ($query) use ($modelId) {
        return $query->where('id', '!=', $modelId);
      })
      ->count();

    $i = 1;
    while ($count > 0) {
      $slug = "{$originalSlug}-{$i}";
      $count = $modelClass::where('slug', $slug)
        ->when($modelId, function ($query) use ($modelId) {
          return $query->where('id', '!=', $modelId);
        })
        ->count();
      $i++;
    }

    return $slug;
  }

  /**
   * Boot the trait and attach the slug creation logic to the model events.
   */
  protected static function bootHasSlug()
  {
    static::creating(function ($model) {
      $model->slug = $model->createUniqueSlug($model->name);
    });

    static::updating(function ($model) {
      $model->slug = $model->createUniqueSlug($model->name, $model->id);
    });
  }
}
