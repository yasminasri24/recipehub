<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class AuthService
{
    /**
     * Register a new user.
     */
    public function register(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password'],
        ]);

        Auth::login($user);

        request()->session()->regenerate();

        return $user;
    }

    /**
     * Login user.
     */
    public function login(array $credentials): User
    {
        if (! Auth::attempt($credentials)) {
            throw new AuthenticationException('Invalid email or password.');
        }

        request()->session()->regenerate();

        return Auth::user();
    }

    /**
     * Logout user.
     */
    public function logout(): void
    {
        Auth::logout();

        request()->session()->invalidate();

        request()->session()->regenerateToken();
    }

    /**
     * Get authenticated user.
     */
    public function user(): ?User
    {
        return Auth::user();
    }
}
