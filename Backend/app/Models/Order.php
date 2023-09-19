<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // use HasFactory;
    public function getId() {
        return $this -> attributes['id'];
    }
    public function setId($id) {
        return $this -> attributes['id'] = $id;
    }
    public function getTotal() {
        return $this -> attributes['total'];
    }
    public function setTotal($total) {
        $this -> attributes['total'] = $total;
    }
    public function getPrice() {
        return $this -> attributes['price'];
    }
    public function setPrice($price) {
        $this -> attributes['price'] = $price;
    }
    public function user() {
        return $this -> belongsTo(UserInformation::class);
    }
    public function getUser() {
        return $this -> user;
    }
    public function setUser($user) {
        $this -> user = $user;
    }
    public function items() {
        return $this -> hasMany(Item::class);
    }
    public function getItems() {
        return $this -> items;
    }
    public function setItems($items) {
        $this -> items = $items;
    }
}
