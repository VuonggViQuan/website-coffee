<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Crypt;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    protected $table = "users";

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function getId() {
        return $this -> attributes['id'];
    }
    public function setId($id) {
        $this -> attributes['id'] = $id;
    }
    public function getName() {
        return $this -> attributes['name'];
    }
    public function setName($name) {
        $this -> attributes['name'] = $name;
    }
    public function getEmail() {
        return $this -> attributes['email'];
    }
    public function setEmail($email) {
        $this -> attributes['email'] = $email;
    }
    public function getPassword() {
        return $this -> attributes['password'];
    }
    public function setPassword($password) {
        $this -> attributes['password'] = $password;
    }
    // public function userinformation() {
    //     return $this -> belongsTo(UserInformation::class);
    // }
    // public function getUserInformation() {
    //     return $this -> userinformation;
    // }
    // public function setUserInformation($userinformation) {
    //     $this -> userinformation = $userinformation;
    // }
}
