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
				<h1 class="gallery-title">Photos</h1>
			</div>

			<?php
				for ($x = 0; $x < $_GET['len']; $x++) {
					echo '<div class="card text-center card-stock col-lg-3 col-md-3 col-sm-3 col-xs-3">';
						echo '<a href="#" id="imgFull' . $x . '"><img class="card-img-top" id="img' . $x . '" src="photoicon.png" alt="Card image cap"></a>';
						echo '<div class="card-body">';
							echo '<a href="#" class="card-text" id="body' . $x . '">Some quick example text to build on the card title and make up the bulk of the cards content.</a>';
						echo '</div>';
					echo '</div>';
				}
			?>
		</div>

		<script>
			$.get('futur3test.herokuapp.com/multiPhotos', function(photos) {
				photos = JSON.parse(photos);
				for(let i = 0; i < photos.length; i++) {
					$('#img' + i).attr('src', photos[i].thumbnailUrl);
					$('#imgFull' + i).attr('href', "photo.php?url=" + photos[i].url + "&title=" + photos[i].title);
					if((photos[i].title).length > 18)
						$('#body' + i).text((photos[i].title).substring(0, 17) + "...");
					else
						$('#body' + i).text(photos[i].title);
				}
			});
		</script>
	</body>
</html>
