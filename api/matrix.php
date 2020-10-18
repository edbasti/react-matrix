<?php
$host = "localhost"; 
$user = "root"; 
$password = "YOUR_PASSWORD"; 
$dbname = "matrix"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
        
switch ($method) {
    case 'GET':
      $id = $_GET['imdbID'];
      $sql = "select * from movies".($id?" where imdbID=$id":'');
      break;
    case 'POST':
      $title = $_POST["title"];
      $year = $_POST["year"];
      $imdbID = $_POST["imdbID"];
      $type = $_POST["type"];
      $poster = $_POST["poster"];

      $sql = "insert into movies (title, year, imdbID, type) values ('$title', '$year', '$imdbID', '$type')"; 

      if ($poster) {
        $sql .= "; insert into posters (imdbID, poster) values ('$imdbID', '$poster')";
      }
      break;
}

// run SQL statement
$result = mysqli_multi_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();
