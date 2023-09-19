<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index() {
        $viewData = [];
        $viewData['title'] = "Welcome Page";
        return view("user.index") -> with("viewData", $viewData);
    }

}
