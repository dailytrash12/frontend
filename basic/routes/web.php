<?php

use App\Livewire\Main;
use Illuminate\Support\Facades\Route;

route::get('/',Main::class)->name('main');