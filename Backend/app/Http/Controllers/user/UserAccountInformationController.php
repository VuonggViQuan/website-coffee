<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\UserAccountInformation;
use GuzzleHttp\Psr7\Response as Psr7Response;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Client\Response as ClientResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Symfony\Component\HttpFoundation\Response;

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
        $userAccount->setToken(random_int(0, 1000));

        $userAccount->save();
    }
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required|max:255",
            "password" => "required|min:8",
        ]);
        $errorCode = 1;
        if (auth('member') -> attempt($credentials)) {
            $userId = auth('member') -> user() -> getAuthIdentifier();
            $userQuery = UserAccountInformation::findOrFail($userId);
            $errorCode--;
            return [
                "errorCode" => $errorCode,
                "message" => "Yes have an account in Database! Here is the information",
                "data" => $userQuery,
            ];

        } else {
            return [
                "errorCode" => $errorCode,
                "message" => "Don't have any account match with your in Database!",
                "data" => "null",
            ];
        }
    }
}
