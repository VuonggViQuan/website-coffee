@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', "Product #". $viewData['productedit'] -> getId())
@section('content')
<form class="p-5" action="{{ route('admin.product.update', ['id' => $viewData['productedit'] -> getId()]) }}" method="POST" enctype="multipart/form-data">
    @csrf
    @method('POST')

    <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
    <div class="col-lg-10 col-md-6 col-sm-12">
        <input name="name" value="{{ $viewData['productedit'] -> getName() }}" type="text" class="form-control">
    </div>
    <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Price:</label>
    <div class="col-lg-10 col-md-6 col-sm-12">
        <input name="price" value="{{ $viewData['productedit'] -> getPrice() }}" type="number" class="form-control">
    </div>
    <div class="row ps-2">
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
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" name="description" rows="3">{{ $viewData['productedit'] -> getDescription() }}
            </textarea>
        </div>
    </div>
    <button type="submit" class="ms-2 btn btn-info">Update</button>
</form>
@endsection
