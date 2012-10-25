/**
 * 
 */
(function() {
    ImportJavscript = {
        url: function(url) {
			document.write("<script type=\"text/javascript\" src=\"" + url + "\"></scr" + "ipt>");
        }
    }
})();

//fdev
ImportJavscript.url('/wp-content/themes/xjsxj/js/fdev.js');

//highlighter
ImportJavscript.url('/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shCore.js');
ImportJavscript.url('/wp-content/plugins/syntaxhighlighter_3.0.83/scripts/shAutoloader.js');

//init
ImportJavscript.url('/wp-content/themes/xjsxj/js/bak-list.js');
