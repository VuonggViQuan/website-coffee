@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename',$viewData['tablename'])
@section('content')
    <table class="table table-bordered table-striped table-hover border-5">
        <thead class="table-info">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Information ID</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($viewData['usersinfor'] as $userInfo)
                <tr class="fw-bold">
                    <td>{{ $userInfo -> getName() }}</td>
                    <td>{{ $userInfo -> getEmail() }}</td>
                    <td>
                        <a href="{{ route('admin.user.showinfo', ['id' => $userInfo -> getId()]) }}">
                            {{ $userInfo -> getId() }}
                        </a>

                    </td>

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
