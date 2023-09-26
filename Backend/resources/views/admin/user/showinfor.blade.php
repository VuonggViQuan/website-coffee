@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename',$viewData['tablename'])
@section('button')
    <a href="{{ route('admin.user.getall') }}" class="btn btn-warning">Go back</a>
@overwrite
@section('content')
    <table class="table table-bordered table-striped table-hover border-5">
        <thead class="table-info">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>DOB</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @if (count($viewData['userinformation']) == 0)
                <td>
                    <p class="text-secondary fw-bold">(no data)</p>
                </td>

            @else

            @endif
            @foreach ($viewData['userinformation'] as $userInfo)
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
