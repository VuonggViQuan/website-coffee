<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserInformation;
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
    public function edit($id) {
        $viewData = [];
        $adminFounds = User::findOrFail($id);
        $viewData['title'] = "Edit Information";
        $viewData['adminfounds'] = $adminFounds;
        return view("admin.admin.edit") -> with("viewData", $viewData);

    }
    public function update(Request $request, $id) {
        $request -> validate([
            "name" => "required|max:255",
            "email" => "required|email",
            "password" => "required|min:8"
        ]);

        $adminUpdate =  User::findOrFail($id);
        $adminUpdate -> setName($request -> input('name'));
        $adminUpdate -> setEmail($request -> input('email'));
        $adminUpdate -> setPassword(bcrypt($request -> input('password')));

        $adminUpdate -> save();
        return redirect() -> route("admin.admin.infor");

    }
    public function delete($id) {
        User::destroy($id);
        return redirect() -> back();
    }
    public function createForm() {
        $viewData = [];
        $viewData['title'] = "Update Information";
        return view("admin.admin.createinfor") -> with("viewData", $viewData);
    }
    public function showInfor($id) {
        $viewData = [];
        $getAdminInfor = UserInformation::all() -> where('admin_account_id', $id);
        $viewData['title'] = "Admin's Information";
        $viewData['admininformation'] = $getAdminInfor;
        $viewData['tablename'] = "Admin Information";

        return view("admin.admin.showinfor") -> with("viewData", $viewData);

    }
    public function storeInfor(Request $request) {
        $request -> validate([
            "name" => "required|max:255",
            "email" => "required|email|max:255",
            "address" => "required|max:50",
            "dob" => "required",
            "phone" => "required|min:10",
            "gender" => "required",
        ]);
        $currentUser = Auth::user() -> getAuthIdentifier();
        $userInfo = new UserInformation();
        $userInfo -> setAdminAccountId($currentUser);
        $userInfo -> setName($request -> input('name'));
        $userInfo -> setEmail($request -> input('email'));
        $userInfo -> setAddress($request -> input('address'));
        $userInfo -> setDob($request -> input('dob'));
        $userInfo -> setPhone($request -> input('phone'));
        $userInfo -> setGender($request -> input('gender'));

        $userInfo -> save();
        return redirect() -> route("admin.home");
    }
    public function deleteInfor($id) {
        UserInformation::destroy($id);
        return redirect() -> back();
    }
}
