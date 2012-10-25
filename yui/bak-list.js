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
			SyntaxHighlighter.autoloader(
				'applescript			/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushAppleScript.js',
				'actionscript3 as3		/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushAS3.js',
				'bash shell				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushBash.js',
				'coldfusion cf		/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushColdFusion.js',
				'cpp c				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushCpp.js',
				'c# c-sharp csharp	/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushCSharp.js',
				'css				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushCss.js',
				'delphi pascal pas		/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushDelphi.js',
				'diff patch			    /wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushDiff.js',
				'erl erlang				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushErlang.js',
				'groovy					/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushGroovy.js',
				'java					/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushJava.js',
				'jfx javafx				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushJavaFX.js',
				'js jscript javascript	/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushJScript.js',
				'perl pl				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushPerl.js',
				'php					/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushPhp.js',
				'text plain				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushPlain.js',
				'powershell ps          /wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushPowerShell.js',
				'py python				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushPython.js',
				'ruby rails ror rb		/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushRuby.js',
				'sass scss              /wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushSass.js',
				'scala					/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushScala.js',
				'sql					/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushSql.js',
				'vb vbnet				/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushVb.js',
				'xml xhtml xslt html	/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shBrushXml.js'
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
