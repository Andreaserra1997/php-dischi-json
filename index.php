<?php
$albums = file_get_contents('albums.json');
header('content-type: application/json');
echo $albums;