<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    // use HasFactory;
    public function getId() {
        return $this -> attributes['id'];

    }
    public function setId($id) {
        $this -> attributes['id'] = $id;
    }
    public function getQuantity() {
        return $this -> attributes['quantity'];
    }
    public function setQuantity($quantity) {
        $this -> attributes['quantity'] = $quantity;
    }
    public function getPrice() {
        return $this -> attributes['price'];
    }
    public function setPrice($price) {
        $this -> attributes['price'] = $price;
    }
    public function order() {
        return $this -> belongsTo(Order::class);
    }
    public function getOrder() {
        return $this -> order;
    }
    public function setOrder($order) {
        $this -> order = $order;
    }
    public function product() {
        return $this -> belongsTo(Product::class);
    }
    public function getProduct() {
        return $this -> product;
    }
    public function setProduct($product) {
        $this -> product = $product;
    }
}
