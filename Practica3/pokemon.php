<?php
//echo '{"p1": {"nombre" : "marc", "edad": "23"}, "p2": {"nombre" : "marc2", "edad": "232"}}';
session_start();

if(isset($_SESSION["players"])){
    $players = $_SESSION["players"];
}else{
    $players = array("players"=>[array("texto"=>"Saludo", "edad"=>"33"), array("texto"=>"Saludo2", "edad"=>"22")]);
    $_SESSION["players"] = $players;
}


switch($_SERVER['REQUEST_METHOD']){
    CASE "GET":
        echo json_encode($players);
        break;
    CASE "POST":
        $jsonPlayer = json_encode(file_get_contents("php://input"), false);
        array_push($players["players"], $jsonPlayer);
        echo json_encode($players);
        break;
}

$_SESSION["players"] = $players;

//echo '{"players":[{"texto":"Saludo1", "edad":"33"}, {"texto":"Saludo2", "edad":"323"}]}';
