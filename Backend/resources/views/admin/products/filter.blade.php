@extends('layouts.admin')
@section('title', $viewData['title'])
@section('tablename', $viewData['tablename'])
@section('content')
    <table class="table table-bordered table-striped table-hover border-5">
        <thead class="table-active">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($viewData['foundedproducts'] as $foundedpro)
                <tr>
                    <th>{{ $foundedpro -> getName() }}</th>
                    <th>{{ $foundedpro -> getDescription() }}</th>
                    <th>{{ $foundedpro -> getPrice() }}</th>
                    <th>
                        <img class="img-fluid img-profile w-25" style="height: 50px;" src="{{ asset('/storage/'.$foundedpro -> getImage()) }}" alt="">
                    </th>
                    <th>{{ $foundedpro -> getType() }}</th>
                    <th>
                        <a href="{{ route('admin.product.edit', ['id' => $foundedpro -> getId()]) }}">
                            <i class="fa-solid fa-pen-to-square text-success fs-5"></i>
                        </a>
                        <a href="{{ route('admin.product.delete', ['id' => $foundedpro -> getId()]) }}" class="ps-2">
                            <i class="fa-solid fa-trash text-danger fs-5"></i>
                        </a>
                    </th>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
