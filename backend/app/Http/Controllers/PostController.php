<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function check(Request $request)
    {
        $flightNumber = $request->input('flightNumber'); 
        $date = $request->input('date'); 

        //$allData = $request->all();

        return response()->json([
            'exists' => true
        ]);
    }

    public function generate(Request $request)
    {
        $flightNumber = $request->input('flightNumber'); 
        $date = $request->input('date'); 

        //$allData = $request->all();

        return response()->json([
            'success' => true,
            'seats' => ["3B", "7C", "14D"]
        ]);
    }
}