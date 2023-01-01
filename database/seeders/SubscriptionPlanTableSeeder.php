<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode([
                    'HD Available',
                    'Ultra HD Available',
                    'Watch on your laptop, TV, phone and tablet',
                    'Unlimited movies and TV shows',
                    'Cancel anytime',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 800000,
                'active_period_in_months' => 6,
                'features' => json_encode([
                    'HD Available',
                    'Ultra HD Available',
                    'Watch on your laptop, TV, phone and tablet',
                    'Unlimited movies and TV shows',
                    'Cancel anytime',
                    'Watch on 4 screens at the same time',
                    'Download for offline viewing',
                ])
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
