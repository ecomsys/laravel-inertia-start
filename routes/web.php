<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Главная страница
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Страница "О нас"
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');