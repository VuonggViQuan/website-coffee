@extends('layouts.admin')
@section('title', $viewData['title'])
@section('content')
    <div class="card mb-4">
        <div class="card-header fw-bold fs-5">
           Update Information
        </div>
        <div class="card-body">
            @if ($errors->any())
                <ul class="alert alert-danger list-unstyled">
                    @foreach ($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>
            @endif
            <form action="{{ route('admin.admin.storeinfo') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('POST')
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="name" value="" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Address:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="address" value="" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Phone Number:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="phone" value="" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="email" value="" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">DOB:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="dob" value="" type="text" class="form-control">
                </div>
                <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Gender:</label>
                <div class="col-lg-10 col-md-6 col-sm-12">
                    <input name="gender" value="" type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-success ms-3 mt-2">Update</button>
                <a class="btn btn-danger mt-2" href="{{ route('admin.home') }}">Go back</a>
            </form>
        </div>
    </div>
@endsection
