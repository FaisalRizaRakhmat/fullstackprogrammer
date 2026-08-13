<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return redirect()->away('https://google.com');
});
Route::post('/api/check', [PostController::class, 'check']);
Route::post('/api/generate', [PostController::class, 'generate']);
