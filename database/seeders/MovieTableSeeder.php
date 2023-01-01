<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Crime',
                'rating' => 4.5,
                'video_url' => 'https://www.youtube.com/embed/qJr_1IuJUcM',
                'thumbnail' => 'https://i.ytimg.com/vi/qJr_1IuJUcM/maxresdefault.jpg',
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'rating' => 4.5,
                'video_url' => 'https://www.youtube.com/embed/sY1S34973zA',
                'thumbnail' => 'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'is_featured' => false,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'rating' => 4.5,
                'video_url' => 'https://www.youtube.com/embed/EXeTwQWrcwY',
                'thumbnail' => 'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'is_featured' => false,
            ]
        ];

        Movie::insert($movies);
    }
}
