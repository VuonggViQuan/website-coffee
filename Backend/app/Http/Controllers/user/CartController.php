<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request) {
        $total = 0;
        $productInCart = [];
        $productInSession = $request -> session() -> get("products");
        if($productInSession) {
            $productInCart = Product::findMany(array_keys($productInSession));
            $total = Product::sumPricesByQuantity($productInCart, $productInSession);
        }
        $viewData = [];
        $viewData['session'] = $productInSession;
        $viewData['title'] = "Cart User";
        $viewData['total'] = $total;
        $viewData['products'] = $productInCart;

        return view("admin.user.cart.index") -> with("viewData", $viewData);
    }
    public function add(Request $request, $id) {
        $products = $request -> session() -> get("products");
        $products[$id] = $request -> input("quantity");
        $request -> session() -> put("products", $products);

        return redirect() -> route("admin.user.cart");
    }
}
