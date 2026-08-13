<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body' => 'required',
        ]);

        // 2. Access variables individually if needed
        $title = $request->input('title'); 

        // 3. Process the data (e.g., save to a database or call a model)
        // Post::create($validated);

        // 4. Return a response or redirect
        return redirect('/posts')->with('success', 'Post created successfully!');
    }
}