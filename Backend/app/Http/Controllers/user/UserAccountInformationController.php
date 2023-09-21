<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\UserAccountInformation;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserAccountInformationController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            "name" => "required|max:255",
            "email" => "required|email",
            "password" => "required|min:8",
        ]);
        $userAccount = new UserAccountInformation();

        $userAccount->setName($request->input('name'));
        $userAccount->setEmail($request->input('email'));
        $userAccount->setPassword(bcrypt($request->input('password')));

        $userAccount->save();
    }
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required|max:255",
            "password" => "required|min:8",
        ]);

        if (auth('member') -> attempt($credentials)) {
            $user = auth('member') -> user() -> getAuthIdentifier();
            // $user -> tokens() -> delete();

            return "Yes have an account match with your in DB!";
        } else {
            return "Don't have any";
        }
    }
}
