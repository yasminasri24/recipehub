<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends BaseController
{

    public function __construct(
        protected AuthService $authService
    ) {
    }

    /**
     * Register a new user.
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $result = $this->authService->register(
            $request->validated()
        );


        return $this->success(
            'Registration successful.',
            [
                'user' => new UserResource($result['user']),
                'token' => $result['token']
            ],
            201
        );
    }

    /**
     * Login user.
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $result = $this->authService->login(
            $request->validated()
        );


        return $this->success(
            'Login successful.',
            [
                'user' => new UserResource($result['user']),
                'token' => $result['token']
            ]
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
