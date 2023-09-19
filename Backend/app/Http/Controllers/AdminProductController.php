<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AdminProductController extends Controller
{
    public function index() {
        $viewData = [];
        $viewData['title'] = "Product Show";
        $viewData['tablename'] = "Products";
        $viewData['buttonlink'] =  "";
        $productsFound = Product::all();
        $viewData['products'] = $productsFound;
        return view('admin.products.index') -> with("viewData", $viewData);
    }
    public function createProducts() {
        $viewData = [];
        $viewData['title'] = "Create Products";
        return view("admin.products.createproduct") -> with("viewData", $viewData);
    }
    public function store(Request $request) {
        $request -> validate([
            "name" => "required|max:255",
            "description" => "required",
            "price" => "required|numeric",
            "image" => "image",
            "type" => "required",
        ]);
        $newProduct = new Product();
        $newProduct -> setName($request -> input('name'));
        $newProduct -> setDescription($request -> input('description'));
        $newProduct -> setPrice($request -> input('price'));
        $newProduct -> setType($request -> input('type'));
        $newProduct -> save();

        if($request -> hasFile('image')) {
            $imageName = $newProduct -> getId().".".$request -> file('image') -> extension();
            Storage::disk('public') -> put($imageName,
            file_get_contents($request -> file('image') ->getRealPath())
        );
        $newProduct -> setImage($imageName);
        }
        $newProduct -> save();
        return redirect() -> route('admin.product.index');
    }
    public function edit($id) {
        $viewData = [];
        $productGetId = Product::findOrfail($id);
        $viewData['title'] = "Admin Page - Edit Product has ID: ".$id;
        $viewData['productedit'] = $productGetId;

        return view("admin.products.edit") -> with("viewData", $viewData);
    }
    public function update($id, Request $request) {
        $request -> validate([
            "name" => "required|max:255",
            "description" => "required",
            "price" => "required|numeric",
            "image" => "image",
        ]);
        $editProduct = Product::findOrFail($id);
        $editProduct -> setName($request -> input('name'));
        $editProduct -> setDescription($request -> input('description'));
        $editProduct -> setPrice($request -> input('price'));
        $editProduct -> save();

        if($request -> hasFile('image')) {
            $imageName = $editProduct -> getId().".".$request -> file('image') -> extension();
            Storage::disk('public') -> put($imageName,
            file_get_contents($request -> file('image') ->getRealPath())
        );
        $editProduct -> setImage($imageName);
        }
        $editProduct -> save();
        return back();
    }
    public function delete($id) {
        Product::destroy($id);
        return back();
    }
    public function filter(Request $request) {
        $request -> validate([
            "product" => "required",
        ]);
        $viewData = [];
        $viewData['title'] = "Result Filter";
        $viewData['tablename'] = "Products Filter Result";
        $filteredResult = Product::query() -> where('type', '=', "{$request -> input('product')}") -> get();

        // echo($filteredResult);
        $viewData['foundedproducts'] = $filteredResult;
        return view("admin.products.filter") -> with("viewData", $viewData);

    }
}
