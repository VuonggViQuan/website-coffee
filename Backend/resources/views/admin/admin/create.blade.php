@extends('layouts.admin')
@section('title', $viewData['title'])
@section('content')
        <form class="p-5" action="{{ route('admin.admin.store') }}" method="POST" >
            @csrf
            @method('POST')
            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Name:</label>
            <div class="col-lg-10 col-md-6 col-sm-12">
                <input name="name" type="text" class="form-control">
            </div>
            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Email:</label>
            <div class="col-lg-10 col-md-6 col-sm-12">
                <input name="email" type="text" class="form-control">
            </div>
            <label class="col-lg-2 col-md-6 col-sm-12 col-form-label">Password:</label>
            <div class="col-lg-10 col-md-6 col-sm-12">
                <input name="password" type="text" class="form-control">
            </div>

            <button type="submit" class="ms-3 mt-3 btn btn-info">Create</button>
        </form>
@endsection
