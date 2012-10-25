<?php
/**
 * The loop that displays posts.
 *
 * The loop displays the posts and the post content.  See
 * http://codex.wordpress.org/The_Loop to understand it and
 * http://codex.wordpress.org/Template_Tags to understand
 * the tags used in it.
 *
 * This can be overridden in child themes with loop.php or
 * loop-template.php, where 'template' is the loop context
 * requested by a template. For example, loop-index.php would
 * be used if it exists and we ask for the loop with:
 * <code>get_template_part( 'loop', 'index' );</code>
 *
 * @package WordPress
 * @subpackage xjsxj
 * @since xjsxj 1.0
 */
 ?>

<div class="bak-list">
<?php /* If there are no posts to display, such as an empty archive page */ ?>
<?php if ( ! have_posts() ) : ?>
	<div id="post-0" class="post error404 not-found">
		<h1 class="post-title"><?php _e( 'Not Found', 'xjsxj' ); ?></h1>
		<div class="post-content">
			<p><?php _e( '非常抱歉，没有找到您想要内容。换一个关键词再试一试吧！', 'xjsxj' ); ?></p>
			<?php get_search_form(); ?>
		</div><!-- .entry-content -->
	</div><!-- #post-0 -->
<?php else: ?>
	<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
 	  <?php /* If this is a category archive */ if (is_category()) { ?>
		<h2 class="pagetitle">分类为 &#8216;<?php single_cat_title(); ?>&#8217; 的文章</h2>
 	  <?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
		<h2 class="pagetitle">标签为 &#8216;<?php single_tag_title(); ?>&#8217; 的文章</h2>
 	  <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
		<h2 class="pagetitle"><?php the_time('F jS, Y'); ?>的文章</h2>
 	  <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
		<h2 class="pagetitle"> <?php the_time('F, Y'); ?>的文章</h2>
 	  <?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
		<h2 class="pagetitle"> <?php the_time('Y'); ?>的文章</h2>
	  <?php /* If this is an author archive */ } elseif (is_author()) { ?>
		<h2 class="pagetitle">Author Archive</h2>
 	  <?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
		<h2 class="pagetitle">Blog Archives</h2>
 	  <?php } ?>	
<?php endif; ?>

<?php
	/* Start the Loop.
	 *
	 * In xjsxj we use the same loop in multiple contexts.
	 * It is broken into three main parts: when we're displaying
	 * posts that are in the gallery category, when we're displaying
	 * posts in the asides category, and finally all other posts.
	 *
	 * Additionally, we sometimes check for whether we are on an
	 * archive page, a search page, etc., allowing for small differences
	 * in the loop on each template without actually duplicating
	 * the rest of the loop that is shared.
	 *
	 * Without further ado, the loop:
	 */ ?>
<?php while ( have_posts() ) : the_post(); $xjsxj_post_id = get_the_ID()  ?>
	<div class="bak-post-wrapper">
	<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	    <h2 class="post-title">
	    	<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'xjsxj' ), the_title_attribute( 'echo=0' ) ); ?>" ><?php the_title() ?></a>
	    </h2><!-- .post-title -->
		<div class="post-meta">
			<?php  
				xjsxj_posted_on();
			?>
		</div><!-- .post-meta -->
		<div class="post-content ">
			<?php if ( post_password_required() ) : /*目前还未发现这个分支*/?>
				<?php the_content(); ?>
			<?php else : ?>
				<?php if (has_excerpt( $xjsxj_post_id )) : ?>
					<?php the_excerpt(  ); ?>
					<a href="<?php the_permalink() ?>">阅读全文&gt;&gt;</a>
				<?php else : ?>
					<?php the_content( __( '阅读全文>>', 'xjsxj' ) ); ?>
				<?php endif; ?>
			<?php endif; ?>
		</div><!-- .post-content -->		
	</div>
	</div>
	<!-- #post-## -->
<?php endwhile; ?>
</div>

<!--<?php /* Display navigation to next/previous pages when applicable */ ?>
<?php if (  $wp_query->max_num_pages > 1 ) : ?>
	<div id="nav-below" class="navigation">
		<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'xjsxj' ) ); ?></div>
		<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'xjsxj' ) ); ?></div>
	</div>
<?php endif; ?> -->

<?php /* using plugin 'WP-PageNavi分页导航' to display navigation when applicable */ ?>
<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>




