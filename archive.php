<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage xjsxj
 * @since xjsxj 1.0
 */
 ?>
 
<?php get_header(); ?>

<div id="bd" class="clear">
    <div id="main" >
        <?php
				/* Run the loop to output the archives.
				 * If you want to overload this in a child theme then include a file
				 * called loop-index.php and that will be used instead.
				 */
				 get_template_part( 'loop', 'archive' );
				?>
    </div>
    <?php get_sidebar(); ?>
</div>
<div style="display:none;">archives.php</div>
<?php get_footer(); ?>

