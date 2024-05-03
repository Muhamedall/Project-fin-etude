<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{
    /**
     * Return a list of users.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    
    public function index(Request $request): JsonResponse
    {
        // Fetch all users
        $users = User::all();

        // Return JSON response with users data
        return response()->json($users);
    }

    /**
     * Handle user login.
     *
     * @param  Request  $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request): JsonResponse
    {
        // Validate request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to log in the user
        if (Auth::attempt($request->only('email', 'password'))) {
            // Authentication was successful
            $user = Auth::user();
            // Generate a token for the authenticated user
            $token = $user->createToken('authToken')->plainTextToken;
            // Return user data and token
            return response()->json([
                'user' => $user,
                'token' => $token,
            ]);
        }

        // Authentication failed
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
  


    
}
