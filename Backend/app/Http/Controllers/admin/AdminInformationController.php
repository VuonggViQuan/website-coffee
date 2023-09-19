<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use User as GlobalUser;

class AdminInformationController extends Controller
{
    public function index() {
        $viewData = [];
        $allAdminAccount = User::all();
        $viewData['title'] = "Admin Information";
        $viewData['tablename'] = "Admins";
        // $getEncodePassword = bcrypt($allAdminAccount -> getPassword());
        // $getEncodePassword = $allAdminAccount['password'];
        foreach($allAdminAccount as $account) {
            $viewData['getdecodepw'] = bcrypt($account -> getPassword());
        }
        $viewData['admins'] = $allAdminAccount;
        // return json_decode($allAdminAccount);
        return view('admin.admin.index') -> with('viewData', $viewData);

    }
    public function authenticateUser(Request $request) {
        $credentials = $request -> validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if(Auth::attempt($credentials)) {
            $request -> session() -> regenerate();
            return view('admin.home.index');
        }
        return back() -> withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]) -> onlyInput('email');

    }
    public function createAdmin() {
        $viewData = [];
        $viewData['title'] = "Admin Create";

        return view('admin.admin.create') -> with('viewData', $viewData);
    }
    public function store(Request $request) {
        $request -> validate([
            "name" => "required|max:50",
            "email" => "required|max:255|email",
            "password" => "required|max:8",
        ]);
        $newAdmin = new User();
        $newAdmin -> setName($request -> input('name'));
        $newAdmin -> setEmail($request -> input('email'));
        $newAdmin -> setPassword(bcrypt($request -> input('password')));

        $newAdmin -> save();


        return redirect() -> back();
    }
}
