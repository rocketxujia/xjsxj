/* �����Ӳ�Ʒ�� */
//FD.Global : ҳ��ȫ�ַ�����
FD.namespace('FD.blog.bak');

//ע���ĵ���������¼�
FYE.onDOMReady(function() {
    /*
    *   ���������ShortCut����������߼������ã����ִ��Ч��
    *   ����ҳ�湦�ܼ�˽�б����ͺ�����һ������Ҫ�ڶ��ģ������Ҫ���õı�����������������á�
    */
    //���幫��������ShortCut
    var FC = FD.common,
		FB = FD.blog,
        FBB = FB.bak,
        YL = YAHOO.lang, YL = YAHOO.lang, FDSS = FYD.setStyle, FDGS = FYD.getStyle, FDSA = FYD.setAttribute, FDGA = FYD.getAttribute, FDAC = FYD.addClass, FDMC = FYD.removeClass, FDHC = FYD.hasClass, FEU=FDEV.env.ua,// function shorten chain
        form1Validator; //�����form1������֤��������
    /*
    *   ��ʼ��ҳ�湦�ܵĺ�����
    *   ��չ��FD.platform.integrity.creditUnite�����ռ���
    */
    YL.augmentObject(FBB, {
		/*ҳ���ʼ��ʱ����ط���*/
		pageLoading : function(){
			//
				
		},
		resizeImg:function(){
			// ��ȡ�浵��¼�е�img
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
	
	/*ҳ��˽�з���*/
	var pagePrivateFunc = function() {
		
		return{
			
		}
	}();
    /*
    *   ���г�ʼ�������������໥���ܺ�����ʼ�����ܴ�����š�
    */
    for (var init in FBB) {
        try {
            FBB[init]()//��ҳ�湦�ܳ�ʼ��
        } catch (e) {
            typeof console != 'undefined' && console.info(init + '�������� �쳣'); //������firefox����
        }
    }
});
