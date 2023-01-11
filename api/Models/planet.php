<?php

namespace App\Models;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

use App\Models\Database;

class Planet
{
    public function getAllPlanet()
    {
        Database::prepReq('SELECT * FROM planet');
        return Database::fetchData();
    }

    public function getPlanet($id)
    {
        $params = [
            'id' => $id,
        ];
        Database::prepReq('SELECT * FROM planet WHERE id = :id', $params);
        return Database::fetchData();
    }
}
