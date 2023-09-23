<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::get("/", 'App\Http\Controllers\user\HomeController@index') -> name("user.index");


Route::get("/", 'App\Http\Controllers\AdminHomeController@login') -> name("admin.login.home");


Route::post("/admin/admins/authenticate", 'App\Http\Controllers\admin\AdminInformationController@authenticateUser') -> name("admin.admin.auth");

// Account
Route::post("/user/register", "App\Http\Controllers\user\UserAccountInformationController@register") -> name("user.create.account");
Route::post("/user/login", 'App\Http\Controllers\user\UserAccountInformationController@authenticate') -> name("user.account.auth");
Route::get("/user/login", 'App\Http\Controllers\user\UserAccountInformationController@authenticate') -> name("user.account.auth");


Route::get("/users", 'App\Http\Controllers\user\UserInformationController@getAll') -> name("admin.user.getall");
Route::post("/users/create", 'App\Http\Controllers\user\UserInformationController@createUser') -> name("admin.user.create");
Route::get("/user/cart", 'App\Http\Controllers\user\CartController@index') -> name("admin.user.cart");
Route::post("/user/cart/add/{id}", 'App\Http\Controllers\user\CartController@add') -> name("admin.user.cart.add");
Route::get("/user/products", 'App\Http\Controllers\user\UserProductController@index') -> name("user.products");
Route::get("/user/product/{id}", 'App\Http\Controllers\user\UserProductController@showProduct') -> name("user.product.show");


// Admin
Route::middleware('auth') -> group(function() {
    Route::get("/admin/home", 'App\Http\Controllers\AdminHomeController@index') -> name("admin.home");
    Route::get("/admin/admins", 'App\Http\Controllers\admin\AdminInformationController@index') -> name('admin.admin.infor');
    Route::get("/admin/admins/create", 'App\Http\Controllers\admin\AdminInformationController@createAdmin') -> name('admin.admin.create');
    Route::post("/admin/admins/store", 'App\Http\Controllers\admin\AdminInformationController@store') -> name("admin.admin.store");
    Route::get("/admin/admins/edit/{id}", 'App\Http\Controllers\admin\AdminInformationController@edit') -> name("admin.admin.edit");
    Route::post("/admin/admin/update/{id}", 'App\Http\Controllers\admin\AdminInformationController@update') -> name("admin.admin.update");
    Route::get("/admin/admin/delete/{id}", 'App\Http\Controllers\admin\AdminInformationController@delete') -> name("admin.admin.delete");

    Route::get("/admin/user/edit/{id}", 'App\Http\Controllers\user\UserInformationController@edit') -> name("admin.user.edit");
    Route::put("/admin/user/update/{id}", 'App\Http\Controllers\user\UserInformationController@updateUser') -> name("admin.user.update");
    Route::get("/admin/user/delete/{id}", 'App\Http\Controllers\user\UserInformationController@delete') -> name("admin.user.delete");


    Route::get("/admin/products", 'App\Http\Controllers\AdminProductController@index') -> name("admin.product.index");
    Route::get("/admin/products/create", 'App\Http\Controllers\AdminProductController@createProducts') -> name("admin.products.create");
    Route::post("/admin/products/store", 'App\Http\Controllers\AdminproductController@store') -> name("admin.product.store");
    Route::get("/admin/products/{id}", 'App\Http\Controllers\AdminProductController@delete') -> name("admin.product.delete");
    Route::get("/admin/products/edit/{id}", 'App\Http\Controllers\AdminProductController@edit') -> name("admin.product.edit");
    Route::post("/admin/products/update/{id}", 'App\Http\Controllers\AdminProductController@update') -> name("admin.product.update");
    Route::post("/admin/product/filter", 'App\Http\Controllers\AdminProductController@filter') -> name('admin.product.filter');
    Route::get("/admin/logout", 'App\Http\Controllers\AdminHomeController@logout') -> name("admin.login");
    Route::post("/admin/logout", 'App\Http\Controllers\AdminHomeController@logout') -> name("admin.logout");
});


// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

