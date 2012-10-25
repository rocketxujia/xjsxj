<?php

// Do not delete these lines
	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
		die ('Please do not load this page directly. Thanks!');

	if ( post_password_required() ) { ?>
		<p class="nocomments">这篇文章受密码保护，输入密码以查看评论。</p>
	<?php
		return;
	}
?>

<!-- You can start editing here. -->

<div class="comments">
<?php if ( have_comments() ) : ?>
	<h4><?php comments_number('<strong>没有评论</strong>', ' <strong>评论</strong>(1)', '<strong>评论</strong>(%)' );?></h4>

	<ol id="commentlist" class="comments-list clear">

	<?php foreach ($comments as $comment) : ?>

		<li id="comment-<?php comment_ID() ?>">
			<?php echo get_avatar(get_comment_author_email(),'49'); ?>
			<div class="comment-content-wrapper clear">
				<div class="comment-content">
					<cite><?php comment_author_link() ?></cite>
					<span><?php comment_date('Y-m-d') ?></span>
					<?php if ($comment->comment_approved == '0') : ?>
						<em>您的评论正等待审核。</em>
					<?php endif; ?>
					<?php comment_text() ?>
				</div>
			</div>
		</li>

	<?php endforeach; /* end for each comment */ ?>

	</ol>


	
 <?php else : // this is displayed if there are no comments so far ?>

	<?php if ( comments_open() ) : ?>
		<!-- If comments are open, but there are no comments. -->
		<h4 class="no-comment"><?php comments_number('<strong>期待您的评论噢！</strong>', ' <strong>评论</strong>(1)', '<strong>评论</strong>(%)' );?></h4>
	 <?php else : // comments are closed ?>
		<!-- If comments are closed. -->
		<p class="nocomments">评论已关闭。</p>

	<?php endif; ?>
<?php endif; ?>
</div>

<?php if ( comments_open() ) : ?>

<div id="respond" class="comments">

<h4><strong>写评论</strong></h4>

<div class="cancel-comment-reply">
	<small><?php cancel_comment_reply_link(); ?></small>
</div>

<?php if ( get_option('comment_registration') && !is_user_logged_in() ) : ?>
<p>You must be <a href="<?php echo wp_login_url( get_permalink() ); ?>">logged in</a> to post a comment.</p>
<?php else : ?>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="comment-form">

<p><textarea name="comment" id="comment" cols="100%" rows="10" tabindex="4"></textarea></p>

<?php if ( is_user_logged_in() ) : ?>

 <p>您现在以 <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a> 的身份登录。<a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="注销这个账号">注销 &raquo;</a></p>


<?php else : ?>

<p><input type="text" name="author" id="author" class="input" value="<?php echo esc_attr($comment_author); ?>" size="22" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?> />
<label for="author">姓名</label></p>

<p><input type="text" name="email" id="email" class="input" value="<?php echo esc_attr($comment_author_email); ?>" size="22" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?> />
<label for="email">邮箱</label></p>

<p><input type="text" name="url" id="url" class="input" value="<?php echo esc_attr($comment_author_url); ?>" size="22" tabindex="3" />
<label for="url">网站</label></p>

<?php endif; ?>

<p><input name="submit" type="submit" id="submit" tabindex="5" value="" class="submit" /></p>
<?php comment_id_fields(); ?>

<?php do_action('comment_form', $post->ID); ?>

</form>
</div>
<?php endif; // If registration required and not logged in ?>

<?php endif; // if you delete this the sky will fall on your head ?>
