<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title>
        <?php
    	/*
    	 * Print the <title> tag based on what is being viewed.
    	 */
    	global $page, $paged;
    
    	wp_title( '|', true, 'right' );
    
    	// Add the blog name.
    	bloginfo( 'name' );  
 	
    	?>
    </title>
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_url') ?>/style.css" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="shortcut icon" type="image/x-icon" href="<?php bloginfo('template_url') ?>/images/favicon.ico" />
    <?php
    	
    
    	/* Always have wp_head() just before the closing </head>
    	 * tag of your theme, or you will break many plugins, which
    	 * generally use this hook to add elements to <head> such
    	 * as styles, scripts, and meta tags.
    	 */
    	wp_head();
    ?>
</head>
<body>
	<div id="hd">
		<div class="masthead">	
			<h1 role="banner"><a href="<?php bloginfo('url'); ?>/" class="logo" title="欢迎来到两个xj之家"><?php bloginfo('name'); ?></a></h1>			
			<div id="nav" role="navigation">
                <ul >
				<?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu.  The menu assiged to the primary position is the one used.  If none is assigned, the menu with the lowest ID is used.  */ ?>
                <?php wp_nav_menu( array( 'container' => '', 'items_wrap' => '%3$s') ); ?>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="<?php bloginfo('url'); ?>/girl">女儿徐欣然</a></li>
                </ul>
			</div>
		</div>
	</div>


	


