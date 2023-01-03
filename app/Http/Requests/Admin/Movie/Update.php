<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'nullable|max:255|unique:movies,name,'.$this->movie->id,
            'category' => 'nullable',
            'rating' => 'nullable|numeric|min:0|max:5',
            'video_url' => 'nullable|url',
            'thumbnail' => 'nullable|image',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
