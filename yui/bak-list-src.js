/* 联保子产品线 */
//FD.Global : 页面全局方法集
FD.namespace('FD.blog.bak');

//注册文档加载完毕事件
FYE.onDOMReady(function() {
    /*
    *   定义变量的ShortCut，方便后续逻辑中引用，提高执行效率
    *   定义页面功能级私有变量和函数，一般是需要在多个模块中需要调用的变量、方法、类的引用。
    */
    //定义公共变量和ShortCut
    var FC = FD.common,
		FB = FD.blog,
        FBB = FB.bak,
        YL = YAHOO.lang, YL = YAHOO.lang, FDSS = FYD.setStyle, FDGS = FYD.getStyle, FDSA = FYD.setAttribute, FDGA = FYD.getAttribute, FDAC = FYD.addClass, FDMC = FYD.removeClass, FDHC = FYD.hasClass, FEU=FDEV.env.ua,// function shorten chain
        form1Validator; //定义对form1进行验证的类引用
    /*
    *   初始化页面功能的函数集
    *   扩展到FD.platform.integrity.creditUnite命名空间下
    */
    YL.augmentObject(FBB, {
		/*页面初始化时需加载方法*/
		pageLoading : function(){
			//
				
		},
		resizeImg:function(){
			// 获取存档记录中的img
			var imgs = FYS('div.post-content img', 'main'),
				_resize = FC.resizeImg;
			imgs.forEach(function(e, index, arr){
				_resize(e, 648, 240);
			});
		},

		//
		//
		//
		highlighterInit: function(){
			var domain = (document.location.href.indexOf('blog.xjsxj.com') >=0) ? "http://blog.xjsxj.com/" : "http://myself.alibaba.com/wordpress/";

			SyntaxHighlighter.autoloader(
				'applescript			'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushAppleScript.js',
				'actionscript3 as3		'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushAS3.js',
				'bash shell				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushBash.js',
				'coldfusion cf		'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushColdFusion.js',
				'cpp c				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushCpp.js',
				'c# c-sharp csharp	'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushCSharp.js',
				'css				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushCss.js',
				'delphi pascal pas		'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushDelphi.js',
				'diff patch			    '+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushDiff.js',
				'erl erlang				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushErlang.js',
				'groovy					'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushGroovy.js',
				'java					'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushJava.js',
				'jfx javafx				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushJavaFX.js',
				'js jscript javascript	'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushJScript.js',
				'perl pl				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushPerl.js',
				'php					'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushPhp.js',
				'text plain				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushPlain.js',
				'powershell ps          '+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushPowerShell.js',
				'py python				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushPython.js',
				'ruby rails ror rb		'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushRuby.js',
				'sass scss              '+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushSass.js',
				'scala					'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushScala.js',
				'sql					'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushSql.js',
				'vb vbnet				'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushVb.js',
				'xml xhtml xslt html	'+domain+'wp-content/plugins/syntax-highlighter-compress/scripts/shBrushXml.js'
			);
			SyntaxHighlighter.all();

		}
		
    });
	
	/*页面私有方法*/
	var pagePrivateFunc = function() {
		
		return{
			
		}
	}();
    /*
    *   运行初始化函数，做到相互功能函数初始化不受错误干扰。
    */
    for (var init in FBB) {
        try {
            FBB[init]()//各页面功能初始化
        } catch (e) {
            typeof console != 'undefined' && console.info(init + '函数运行 异常'); //用于在firefox调试
        }
    }
});
