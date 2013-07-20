<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$res = mysql_query("SELECT player_data.PlayerName, character_data.* FROM `player_data`, `character_data` WHERE player_data.PlayerUID = character_data.PlayerUID") or die(mysql_error());
$markers = markers_player($res, $serverworld);

?>