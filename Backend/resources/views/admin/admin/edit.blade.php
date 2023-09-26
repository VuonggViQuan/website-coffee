@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', "Admin #". $viewData['adminfounds'] -> getId())
@section('content')
    <form class="p-5" action="{{ route('admin.admin.update', ['id' => $viewData['adminfounds'] -> getId()]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('POST')

        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="name" value="{{ $viewData['adminfounds'] -> getName() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="email" value="{{ $viewData['adminfounds'] -> getEmail() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="password" value="{{ $viewData['adminfounds'] -> getPassword() }}" type="text" class="form-control">
        </div>

        <button type="submit" class="ms-3 btn btn-info mt-3">Update</button>
    </form>
@endsection
