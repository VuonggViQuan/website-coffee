@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', $viewData['tablename'])
@section('content')
    @if ($errors->any())
    <ul class="alert alert-danger list-unstyled">
    @foreach ($errors->all() as $error)
    <li>- {{ $error }}</li>
    @endforeach
    
    </ul>
    @endif
    <form class="p-5" action="{{ route('admin.user.update', ['id' => $viewData['useredit'] -> getId()]) }}" method="POST" >
        @csrf
        @method('PUT')
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="name" value="{{ $viewData['useredit'] -> getName() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="email" value="{{ $viewData['useredit'] -> getEmail() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Address:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="address" value="{{ $viewData['useredit'] -> getAddress() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">DOB:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="dob" value="{{ $viewData['useredit'] -> getDob() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Phone:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="phone" value="{{ $viewData['useredit'] -> getPhone() }}" type="text" class="form-control">
        </div>
        <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Gender:</label>
        <div class="col-lg-10 col-md-6 col-sm-12">
            <input name="gender" value="{{ $viewData['useredit'] -> getGender() }}" type="text" class="form-control">
        </div>

        <button type="submit" class="ms-3 mt-3 btn btn-info">Update</button>
    </form>
@endsection
