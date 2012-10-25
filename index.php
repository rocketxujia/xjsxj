<?php
/**
 * 首页的模板文件
 *
 * wordpress 主题中最基础的模板文件，也是二个必须的文件（另一个是style.css）.
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage xjsxj
 * @since xjsxj 1.0
 */?>
<?php get_header(); ?>
<div id="bd" class="clear fancyBox">
    <div id="main">
        <?php
				/* Run the loop to output the posts.
				 * If you want to overload this in a child theme then include a file
				 * called loop-index.php and that will be used instead.
				 */
				 get_template_part( 'loop', 'index' );
				?>
    </div>
    <?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>


