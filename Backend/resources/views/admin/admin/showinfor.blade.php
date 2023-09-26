@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename',$viewData['tablename'])
@section('button')
    <a href="{{ route('admin.admin.accountinfor') }}" class="btn btn-warning">Go back</a>
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
            @if (count($viewData['admininformation']) == 0)
                <td>
                    <p class="text-secondary fw-bold">(no data)</p>
                </td>

            @else

            @endif
            @foreach ($viewData['admininformation'] as $adminInfo)
                <tr class="fw-bold">
                    <td>{{ $adminInfo -> getId() }}</td>
                    <td>{{ $adminInfo -> getName() }}</td>
                    <td>{{ $adminInfo -> getEmail() }}</td>
                    <td>{{ $adminInfo -> getAddress() }}</td>
                    <td>{{ $adminInfo -> getDob() }}</td>
                    <td>{{ $adminInfo -> getPhone() }}</td>
                    <td>{{ $adminInfo -> getGender() }}</td>
                    <td class="d-flex">
                        {{--  <div class="col">
                            <a href="{{ route('admin.user.edit', ['id'=> $adminInfo -> getId()]) }}">
                                <i class="fa-solid fa-pen-to-square text-success fs-5"></i>
                            </a>
                        </div>  --}}
                        <div class="col">
                            <a href="{{ route('admin.admin.deleteinfo', ['id' => $adminInfo -> getId()]) }}">
                                <i class="fa-solid fa-trash text-danger fs-5"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
