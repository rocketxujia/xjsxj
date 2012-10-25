//
// global javascript  merge page
// @author xujia01
// @create 2011-07-20
//
(function() {
	var ImportJavscript = function(url) {
          document.write("<script type=\"text/javascript\" src=\"" + url + "\"></scr" + "ipt>");
      }, hostName = document.getElementById('hostName').value;
  
	//
	//import javascript pages
	//
	ImportJavscript(hostName +"/static/js/global/jquery-1.6.2.js");
	ImportJavscript(hostName +"/static/js/global/jquery.ui.core.js");
	ImportJavscript(hostName +"/static/js/global/jquery.ui.widget.js");
	ImportJavscript(hostName +"/static/js/global/gear.js");

})();