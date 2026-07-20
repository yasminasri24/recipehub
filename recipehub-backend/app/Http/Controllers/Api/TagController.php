<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use App\Models\Tag;

class TagController extends BaseController
{
    public function index()
    {
        return $this->success(
            'Tags retrieved successfully.',
            Tag::orderBy('name')->get()
        );
    }
}
