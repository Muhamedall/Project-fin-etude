<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WishlestController extends Controller
{
    public function addFavorite(Request $request)
    {
        $user = Auth::user();
        
        $favorite = Favorite::create([
            'user_id' => $user->id,
            'listing_id' => $request->listing_id,
        ]);

        return response()->json($favorite, 201);
    }

    public function removeFavorite(Request $request)
    {
        $user = Auth::user();
        
        Favorite::where('user_id', $user->id)
            ->where('listing_id', $request->listing_id)
            ->delete();

        return response()->json(['message' => 'Favorite removed'], 200);
    }

    public function getFavorites()
    {
        $user = Auth::user();
        
        $favorites = Favorite::where('user_id', $user->id)->with('listing')->get();

        return response()->json($favorites, 200);
    }
}
