<?php

/**
 * Tugas 5 - API Sederhana dengan Lumen
 * REST API routes dengan controller pattern
 * Author: Wildan Miladji
 */

/** @var \Laravel\Lumen\Routing\Router $router */

// Root endpoint
$router->get('/', 'ApiController@index');

// API endpoints
$router->get('/hello', 'ApiController@hello');
$router->post('/data', 'ApiController@createData');
$router->delete('/data', 'ApiController@deleteData');
$router->get('/setoran', 'ApiController@getSetoran');
