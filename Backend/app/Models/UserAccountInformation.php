<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAccountInformation extends Model
{
    // use HasFactory;
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
