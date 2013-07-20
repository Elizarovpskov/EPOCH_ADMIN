<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$res = mysql_query("
			SELECT object_data.* FROM `object_data` 
			WHERE object_data.Instance = '".$serverinstance."' 
			AND (Classname = 'dummy' 
			OR Classname = 'TentStorage' 
			OR Classname = 'Hedgehog_DZ' 
			OR Classname = 'Wire_cat1' 
			OR Classname = 'WoodGate_DZ' 
			OR Classname = 'Sandbag1_DZ'
			OR Classname = 'Fort_RazorWire'
			OR Classname = 'TrapBear'
			OR Classname = 'Wooden_shed_DZ'	
			OR Classname = 'StorageShed_DZ'
			OR Classname = 'TentStorageDomed2'
			OR Classname = 'WoodShack_DZ'
			OR Classname = 'Fence_corrugated_DZ'			
			OR Classname = 'VaultStorageLocked')
			") or die(mysql_error());
$markers = markers_deployable($res, $serverworld);

?>