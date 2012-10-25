<?php if (!is_search()) {
		$search_text = "站内搜索";
	} else {
		$search_text = "$s";
	}
?>
		

<form method="get" id="searchform" action="<?php bloginfo('home'); ?>/">
    <input type="text" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="s" class="searchStr" size="15" />
	<a class="searchsubmit" href="#" onclick="javascript:document.getElementById('searchform').submit();">表单提交</a>
</form>