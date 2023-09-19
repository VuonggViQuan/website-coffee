@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', $viewData['tablename'])
@section('button')
    <a href="{{ route('admin.admin.create') }}" class="btn btn-success">Create Admin</a>
@overwrite
@section('content')
    <table class="table table-bordered table-striped table-hover">
        <thead class="table-active">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                {{--  <th>Password</th>  --}}
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($viewData['admins'] as $admin)
                <tr>
                    <td>{{ $admin -> getId() }}</td>
                    <td>{{ $admin -> getName() }}</td>
                    <td>{{ $admin -> getEmail() }}</td>
                    {{--  <td>{{ $viewData['getdecodepw'] }}</td>  --}}
                    <td class="d-flex">
                        <div class="col">
                            <a href="#">
                                <i class="fa-solid fa-pen-to-square text-success fs-5"></i>
                            </a>
                            <a href="#">
                                <i class="fa-solid fa-trash text-danger fs-5"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
