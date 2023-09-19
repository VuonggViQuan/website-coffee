@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', $viewData['tablename'])
@section('button')
    <form method="POST" action="{{ route('admin.product.filter') }}"
    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    @csrf
    @method('POST')
    <div class="input-group">
        <input type="text" name="product" class="form-control bg-light border-5 small" placeholder="Filter type..."
            aria-label="Search" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-primary" type="submit">
                <i class="fas fa-search fa-sm"></i>
            </button>
        </div>
    </div>
    </form>
    <a href="{{ route('admin.products.create') }}" class="btn btn-info">Create Products</a>
@overwrite
@section('content')
    {{--  <div class="card mb-4">
        <div class="card-header">
            Create Products
        </div>
        <div class="card-body">
            @if ($errors -> any())
                <ul class="alert alert-danger list-unstyled">
                    @foreach ($errors -> all() as $err)
                        <li>{{ $err  }}</li>
                    @endforeach
                </ul>
            @endif
            <form action="{{ route('admin.product.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('POST')
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="name" value="{{ old('name') }}" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Price:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="price" value="{{ old('price') }}" type="number" class="form-control">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3 mt-3 row">
                            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Image:</label>
                            <div class="col-lg-10 col-md-6 col-sm-12">
                                <input class="form-control" type="file" name="image">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        &nbsp;
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" name="description" rows="3">{{ old('description') }}
                    </textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>  --}}
    <table class="table table-bordered table-striped table-hover border-5">
        <thead class="table-active">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($viewData['products'] as $product)
                <tr>
                    <th>{{ $product -> getName() }}</th>
                    <th>{{ $product -> getDescription() }}</th>
                    <th>{{ $product -> getPrice() }}</th>
                    <th>
                        <img class="img-fluid img-profile w-25" style="height: 50px;" src="{{ asset('/storage/'.$product -> getImage()) }}" alt="">
                    </th>
                    <th>{{ $product -> getType() }}</th>
                    <th>
                        <a href="{{ route('admin.product.edit', ['id' => $product -> getId()]) }}">
                            <i class="fa-solid fa-pen-to-square text-success fs-5"></i>
                        </a>
                        <a href="{{ route('admin.product.delete', ['id' => $product -> getId()]) }}" class="ps-2">
                            <i class="fa-solid fa-trash text-danger fs-5"></i>
                        </a>
                    </th>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
