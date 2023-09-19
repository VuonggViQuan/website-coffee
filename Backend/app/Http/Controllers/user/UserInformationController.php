<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserInformation;
use Illuminate\Http\Request;

class UserInformationController extends Controller
{
    public function getAll() {
        $viewData = [];
        $getAllUser = UserInformation::all();
        $viewData['title'] = "Users Information";
        $viewData['tablename'] = "Users Table";
        $viewData['usersinfor'] = $getAllUser;
        // return json_decode($getAllUser);
        return view("admin.user.index") -> with('viewData', $viewData);
    }
    public function createUser(Request $request) {
        $request -> validate([
            "id" => "required",
            "name" => "required|max:255",
            "email" => "required|max:255|email",
            "address" => "required|max:255",
            "dob" => "required|date",
            "phone" => "required",
            "gender" => "required",
        ]);
        $newUser = new UserInformation();
        $newUser -> setId($request -> input('id'));
        $newUser -> setName($request -> input('name'));
        $newUser -> setEmail($request -> input('email'));
        $newUser -> setAddress($request -> input('address'));
        $newUser -> setDob($request -> input('dob'));
        $newUser -> setPhone($request -> input('phone'));
        $newUser -> setGender($request -> input('gender'));

        $newUser -> save();

        // return json_decode($newUser);
        return redirect() -> back();
    }
    public function edit($id) {
        $viewData = [];
        $userFoundedById = UserInformation::findOrFail($id);
        $viewData['title'] = "Edit User";
        $viewData['tablename'] = "User #".$userFoundedById -> getId();
        $viewData['useredit'] = $userFoundedById;
        return view("admin.user.edit") -> with("viewData", $viewData);

    }

    public function updateUser(Request $request, $id) {
        $request -> validate([
            "name" => "required|max:255",
            "email" => "required|max:255|email",
            "address" => "required|max:255",
            "dob" => "required|date",
            "phone" => "required",
            "gender" => "required",
        ]);

        $userFoundedForUpdate = UserInformation::findOrFail($id);
        $userFoundedForUpdate -> setName($request -> input('name'));
        $userFoundedForUpdate -> setEmail($request -> input('email'));
        $userFoundedForUpdate -> setAddress($request -> input('address'));
        $userFoundedForUpdate -> setDob($request -> input('dob'));
        $userFoundedForUpdate -> setPhone($request -> input('phone'));
        $userFoundedForUpdate -> setGender($request -> input('gender'));

        $userFoundedForUpdate -> save();
        // return json_decode($userFoundedForUpdate);
        return redirect() -> back();

    }
    public function delete($id) {
        UserInformation::destroy($id);
        return redirect() -> back();
    }
}
