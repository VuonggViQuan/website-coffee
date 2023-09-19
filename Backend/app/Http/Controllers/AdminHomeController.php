<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminHomeController extends Controller
{
    public function index() {
        $viewData = [];
        $viewData["title"] = "Admin Page";

        return view('admin.home.index') -> with("viewData", $viewData);
    }

    public function login() {
        $viewData = [];
        if(Auth::check()) {
            return view('admin.home.index');
        } else {
            return view('auth.login');
        }
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return view('auth.login');
    }

}
