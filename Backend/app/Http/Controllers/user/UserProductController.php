<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class UserProductController extends Controller
{
    public function index() {
        return Product::all();

    }
    public function showProduct($id) {
        return Product::findOrFail($id);
    }
}
