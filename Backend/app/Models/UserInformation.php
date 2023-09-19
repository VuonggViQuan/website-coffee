<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
    // use HasFactory;
    protected $table = "user_information";
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
    public function getAddress() {
        return $this -> attributes['address'];
    }
    public function setAddress($address) {
        $this -> attributes['address'] = $address;
    }
    public function getDob() {
        return $this -> attributes['dob'];
    }
    public function setDob($dob) {
        $this -> attributes['dob'] = $dob;
    }
    public function getPhone() {
        return $this -> attributes['phone'];
    }
    public function setPhone($phone) {
        $this -> attributes['phone'] = $phone;
    }
    public function getGender() {
        return $this -> attributes['gender'];
    }
    public function setGender($gender) {
        $this -> attributes['gender'] = $gender;
    }
    public function orders() {
        return $this -> hasMany(Order::class);
    }
    public function getOrders() {
        return $this -> orders;
    }
    public function setOrders($orders) {
        $this -> orders = $orders;
    }

}
