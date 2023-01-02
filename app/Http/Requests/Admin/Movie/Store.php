<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
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
            'name' => 'required|unique:movies,name|max:255',
            'category' => 'required',
            'rating' => 'required|numeric|min:0|max:5',
            'video_url' => 'required|url',
            'thumbnail' => 'required|image',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
