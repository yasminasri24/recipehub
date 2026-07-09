<?php

namespace App\Http\Controllers\Api;

use App\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    use ApiResponse;

    public function __construct(
        protected AuthService $authService
    ) {
    }

    /**
     * Register a new user.
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = $this->authService->register(
            $request->validated()
        );

        return $this->success(
            'Registration successful.',
            new UserResource($user),
            201
        );
    }

    /**
     * Login user.
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $user = $this->authService->login(
            $request->validated()
        );

        return $this->success(
            'Login successful.',
            new UserResource($user)
        );
    }

    /**
     * Logout user.
     */
    public function logout(): JsonResponse
    {
        $this->authService->logout();

        return $this->success(
            'Logout successful.'
        );
    }

    /**
     * Get authenticated user.
     */
    public function user(): JsonResponse
    {
        return $this->success(
            'Authenticated user retrieved successfully.',
            new UserResource(
                $this->authService->user()
            )
        );
    }
}
