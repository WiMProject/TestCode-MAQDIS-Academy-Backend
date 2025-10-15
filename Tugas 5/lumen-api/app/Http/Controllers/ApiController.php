<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

/**
 * Tugas 5 - API Controller untuk Lumen
 * Simple REST API dengan best practices
 * Author: Wildan Miladji
 */
class ApiController extends BaseController
{
    /**
     * GET /hello - Welcome message
     */
    public function hello()
    {
        return response()->json([
            'status' => 'success',
            'message' => 'welcome to Maqdis Academy'
        ]);
    }

    /**
     * POST /data - Create data
     */
    public function createData()
    {
        return response()->json([
            'data' => 100,
            'status' => 'berhasil'
        ], 201);
    }

    /**
     * DELETE /data - Delete data
     */
    public function deleteData()
    {
        return response()->json([
            'data' => 0,
            'status' => 'berhasil hapus'
        ]);
    }

    /**
     * GET /setoran - Get setoran data
     */
    public function getSetoran()
    {
        return response()->json([
            'message' => 'berhasil',
            'id_setoran' => 58,
            'id_user' => 3441,
            'id_juz' => 30
        ]);
    }

    /**
     * Root endpoint - API info
     */
    public function index()
    {
        return response()->json([
            'message' => 'MAQDIS Academy API (Lumen)',
            'version' => '1.0.0',
            'author' => 'Wildan Miladji',
            'endpoints' => [
                'hello' => 'GET /hello',
                'data_create' => 'POST /data',
                'data_delete' => 'DELETE /data',
                'setoran' => 'GET /setoran'
            ]
        ]);
    }
}