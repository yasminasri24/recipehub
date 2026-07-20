<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class BaseController extends Controller
{
    /**
     * Success response.
     */
    protected function success(
        string $message,
        mixed $data = null,
        int $status = 200
    ): JsonResponse {

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $status);

    }

    /**
     * Error response.
     */
    protected function error(
        string $message,
        int $status = 400,
        mixed $errors = null
    ): JsonResponse {

        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $status);

    }

    /**
     * Collection response.
     */
    protected function collection(
        string $message,
        ResourceCollection $data
    ): JsonResponse {

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ]);

    }

    /**
     * Resource response.
     */
    protected function resource(
        string $message,
        JsonResource $data,
        int $status = 200
    ): JsonResponse {

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $status);

    }
}
