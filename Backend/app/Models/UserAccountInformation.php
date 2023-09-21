<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserAccountInformation extends Model
{
    // 'getAuthIdentifierName', 'getAuthIdentifier', 'getAuthPassword', 'getRememberToken', 'setRememberToken', 'getRememberTokenName
    use HasFactory, HasApiTokens, Notifiable;
   
    protected $guard = "member";
    protected $table = "user_account_infor";


    public function getId() {
        return $this -> attributes['id'];
    }
    public function setId($id) {
        $this -> attributes['id'] = $id;
    }
    public function getName() {
        return $this -> attributes['name'];
    }
    public function setName($name) {
        $this -> attributes['name'] = $name;
    }
    public function getEmail() {
        return $this -> attributes['email'];
    }
    public function setEmail($email) {
        $this -> attributes['email'] = $email;
    }
    public function getPassword() {
        return $this -> attributes['password'];
    }
    public function setPassword($password) {
        $this -> attributes['password'] = $password;
    }
}
