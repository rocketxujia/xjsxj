<?php
/** 单一日志文件，用于显示单一日志
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header();
?>

<div id="bd" class="clear fancyBox">
    <div id="main" class="single">
        <?php /* If there are no posts to display, such as an empty archive page */ ?>
		<?php if ( ! have_posts() ) : ?>
			<div id="post-0" class="post error404 not-found">
				<h1 class="entry-title"><?php _e( 'Not Found', 'xjsxj' ); ?></h1>
				<div class="entry-content">
					<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'xjsxj' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .entry-content -->
			</div><!-- #post-0 -->
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
						<?php the_content( __( '阅读全文<span class="meta-nav">&rarr;</span>', 'xjsxj' ) ); ?>
						<?php edit_post_link('编辑文章>>','',''); ?>
                        <div class="post-tags">
                            标签：
                            <?php the_tags('','，',''); ?>
                        </div>
					<?php endif; ?>
				</div><!-- .post-content -->
				
			</div>
			<!-- #post-## -->
		<?php endwhile; ?>
		
		<?php comments_template(); ?>
        <script type="text/javascript">
            var blog = {
                blogRootUrl: '<?php  bloginfo('url'); ?>',
                blogThemeUrl: '<?php bloginfo('template_url') ?>'
            };
        </script>
        <script type="application/javascript" src="<?php bloginfo('template_url') ?>/jQuery/global/in-min.js"></script>
        <script type="application/javascript" src="<?php bloginfo('template_url') ?>/jQuery/pages/content.js"></script>
    </div>
    <?php get_sidebar(); ?>
</div>
<div style="display:none">single.php</div>
<?php get_footer(); ?>


