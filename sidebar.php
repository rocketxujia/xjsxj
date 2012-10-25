<?php
/**
 * The Sidebar containing the primary and secondary widget areas.
 *
 * @package WordPress
 * @subpackage xjsxj
 * @since xjsxj 1.0
 */
?>

<div id="sidebar">
	<ul id="primary" class="widget-area" role="complementary" >
	<?php if ( !function_exists('dynamic_sidebar')
        || !dynamic_sidebar() ) : ?>
	
		<li id="search" class="widget_search">
			<?php get_search_form(); ?>
		</li>
		
        <li id="newPost" class="widget-container">
            <h3 class="widget-title">最新文章</h3>
            <ul class="box">
                <?php wp_get_archives('title_li=&type=postbypost&limit=10'); ?>
            </ul>
        </li>

		<?php wp_list_categories('show_count=1&title_li=<h3 class="widget-title">文章分类</h3>'); ?>
		
		<li id="archives" class="widget-container">
			<h3 class="widget-title"><?php _e( '归档 ', 'xjsxj' ); ?></h3>
			<ul class="box">
				<?php wp_get_archives( 'type=monthly' ); ?>
			</ul>
		</li>
		
		<?php wp_list_bookmarks('title_before=<h3 class="widget-title">&title_after=</h3>&category_before=<li class="widget-container">&category_after=</li>'); ?>			

		<li id="meta" class="widget-container">			
			<ul class="box">
				<li class="rss-li"><a href="<?php bloginfo('rss2_url'); ?>" class="rss" title="RSS订阅">RSS订阅</a></li>
				<?php wp_register(); ?>
				<li><?php wp_loginout(); ?></li>
			</ul>
		</li>

        <?php endif; // end primary widget area ?>
    </ul>	
</div>