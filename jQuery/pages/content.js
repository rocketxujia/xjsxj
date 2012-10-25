/*
*@author JoeXu
*/
;(function(){
    var blogThemeUrl = blog.blogThemeUrl;

	// configuration highlight javascript/css code  
	In.add('css-code',{path: blogThemeUrl + '/syntaxhighlighter_3.0.83/styles/shCoreDefault.css',type:'css',charset:'utf-8'});
	In.add('js-code',{path: blogThemeUrl + '/syntaxhighlighter_3.0.83/scripts/shCore.js',type:'js',charset:'utf-8'});
	In.add('js-code-js',{path: blogThemeUrl + '/syntaxhighlighter_3.0.83/scripts/shBrushJScript.js',type:'js',charset:'utf-8',rely:['js-code']});
	In.add('js-code-css',{path: blogThemeUrl + '/syntaxhighlighter_3.0.83/scripts/shBrushCss.js',type:'js',charset:'utf-8',rely:['js-code']});
	// initialize
	var demo=In('css-code', 'js-code-js', 'js-code-css', function() {
	    //do something
		SyntaxHighlighter.all();
	});

	// configuration fancy box
	fancyBox = document.getElementById('fancyBox');
	if(fancyBox){
		In.add('css-fancybox',{path: blogThemeUrl + '/fancybox/jquery.fancybox-1.3.4.css',type:'css',charset:'utf-8'});
		In.add('js-fancybox-jQuery',{path: blogThemeUrl + '/jQuery/global/jquery-1.6.2-min.js',type:'js',charset:'utf-8'});
		In.add('js-fancybox-mousewheel',{path: blogThemeUrl + '/fancybox/jquery.mousewheel-3.0.4.pack.js',type:'js',charset:'utf-8', rely:['js-fancybox-jQuery']});
		In.add('js-fancybox-facybox',{path: blogThemeUrl + '/fancybox/jquery.fancybox-1.3.4.pack.js',type:'js',charset:'utf-8', rely:['js-fancybox-jQuery']});
		// initialize
		var demo=In('css-fancybox', 'js-fancybox-mousewheel', 'js-fancybox-facybox', function() {
		    //do something
			$("a[rel=fancy_group]").fancybox(
				{
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'titlePosition' 	: 'inside',
					'overlayOpacity'	: 0.3,
					cyclic:true
				});
		});
	}
})();