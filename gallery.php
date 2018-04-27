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
				<h1 class="gallery-title">Albums</h1>
			</div>

			<?php
				if($_GET['len'] == 0)
					echo '<h1>Nessun Elemento</h1>';
				else {
					for ($x = 0; $x < $_GET['len']; $x++) {
						echo '<div class="card card-list col-lg-6 col-md-6 col-sm-6 col-xs-6">';
							echo '<div class="card-body">';
								echo '<a href="#" class="card-text" id="body' . $x . '">Some quick example text to build on the card title and make up the bulk of the cards content.</a>';
							echo '</div>';
						echo '</div>';
					}
				}
			?>
		</div>

		<script>
			$( document ).ready(function() {
				$.getJSON('http://futur3test.herokuapp.com/multiGallery', function(albums) {
					for(let i = 0; i < albums.length; i++) {
						$.getJSON('http://futur3test.herokuapp.com/photo?albumId=' + i, function(photos) {
							$('#body' + i).text(albums[i].title);
							$('#body' + i).attr('href', "photoGallery.php?id=" + albums[i].id + "&userid=" + albums[i].userId);
							$('#body' + i).attr('href', $('#body' + i).attr('href') + "&len=" + photos.length);
						});
					}
				});
			});
		</script>
	</body>
</html>
