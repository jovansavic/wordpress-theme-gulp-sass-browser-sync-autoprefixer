<?php

	function add_assets_files() {
		//adding css file
		wp_enqueue_style( 'customstyle', get_template_directory_uri().'/assets/css/main.css', array(), '1.0.0', 'all' );
		//adding main javascript file
		wp_enqueue_script('jquerycdn', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', array(), false, true );
		//adding main javascript file
		wp_enqueue_script('customjavascript', get_template_directory_uri().'/assets/js/main.js', array(), false, true );
		//adding google roboto fonts
		wp_enqueue_style( 'roboto-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', false );
		//adding google poiret fonts
		wp_enqueue_style( 'poiret-google-fonts', 'https://fonts.googleapis.com/css?family=Poiret+One&amp;subset=latin-ext', false );
		//adding google icon fonts
		wp_enqueue_style( 'icons-google-fonts', 'https://fonts.googleapis.com/icon?family=Material+Icons', false );
	}

	add_action('wp_enqueue_scripts', 'add_assets_files');
 ?>
