<?php
//echo '{"p1": {"nombre" : "marc", "edad": "23"}, "p2": {"nombre" : "marc2", "edad": "232"}}';
$players = array("players"=>[array("texto"=>"Saludo", "edad"=>"33"), array("texto"=>"Saludo2", "edad"=>"22")]);
echo json_encode($players);

//echo '{"players":[{"texto":"Saludo1", "edad":"33"}, {"texto":"Saludo2", "edad":"323"}]}';
