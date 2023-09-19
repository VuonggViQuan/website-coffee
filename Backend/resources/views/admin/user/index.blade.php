@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename',$viewData['tablename'])
@section('button')
    <a href="" class="btn btn-warning">Button</a>
@overwrite
@section('content')
    <table class="table table-bordered table-striped table-hover border-5">
        <thead class="table-info">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($viewData['usersinfor'] as $userInfo)
                <tr class="fw-bold">
                    <td>{{ $userInfo -> getId() }}</td>
                    <td>{{ $userInfo -> getName() }}</td>
                    <td>{{ $userInfo -> getEmail() }}</td>
                    <td>{{ $userInfo -> getAddress() }}</td>
                    <td>{{ $userInfo -> getDob() }}</td>
                    <td>{{ $userInfo -> getPhone() }}</td>
                    <td>{{ $userInfo -> getGender() }}</td>
                    <td class="d-flex">
                        <div class="col">
                            <a href="{{ route('admin.user.edit', ['id'=> $userInfo -> getId()]) }}">
                                <i class="fa-solid fa-pen-to-square text-success fs-5"></i>
                            </a>
                        </div>
                        <div class="col">
                            <a href="{{ route('admin.user.delete', ['id' => $userInfo -> getId()]) }}">
                                <i class="fa-solid fa-trash text-danger fs-5"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
