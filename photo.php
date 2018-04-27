<!doctype html>
<html>
	<head>
		<title>Futur3</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="mystyle.css">

		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
		<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	</head>

	<body>
		<div class="container">
			<nav class="navbar navbar-inverse">
				<div class="container">
					<div class="navbar-header">
						<a class="navbar-brand" href="index.html">Futur3</a>
					</div>
				</div>
			</nav>

			<div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<h1 class="gallery-title">Photo</h1>
			</div>

			<?php
				echo '<div class="card text-center card-stock col-lg-12 col-md-12 col-sm-12 col-xs-12">';
					echo '<img class="card-img-top" id="img" src="' . $_GET['url'] . '" alt="Card image cap"></a>';
					echo '<div class="card-body">';
						echo '<p class="card-text" id="body">' . $_GET['title'] . '</p>';
					echo '</div>';
				echo '</div>';
			?>
		</div>
	</body>
</html>
