<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        // Exclude any routes that should bypass CSRF protection
        '/login', // Add the /login route here
        '/register',
       
        'api/listings',
        'api/dataListings',

    ];
}
