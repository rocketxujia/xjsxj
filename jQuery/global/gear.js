/**
 * Baseed on jQuery JavaScript Library v1.6.1
 * @Author: xujia01 2011-07-20
 */
(function($, undefined){
    var $isFunction = $.isFunction, $isArray = $.isArray, $each = $.each ;
    
    //setup global ajax configs
    $.ajaxSetup({
        scriptCharset: 'gbk',
        cache: true,
        timeout: 10000
    });
    //setup golobal ajax options
    $.ajaxPrefilter('script jsonp', function(options){
        options.crossDomain = true;
    });
    
    $.extend({
        /**
         * Returns the namespace specified and creates it if it doesn't exist
         * <pre>
         * jQuery.namespace('Platform.winport');
         * * jQuery.namespace('Platform.winport', 'Platform.winport.diy');
         * </pre>
         *
         * Be careful when naming packages. Reserved words may work in some browsers
         * and not others. For instance, the following will fail in Safari:
         * <pre>
         * jQuery.namespace('really.long.nested.namespace');
         * </pre>
         * jQuery fails because "long" is a future reserved word in ECMAScript
         *
         * @method namespace
         * @static
         * @param  {collection} arguments 1-n namespaces to create.
         * @return {object}  A reference to the last namespace object created.
         */
        namespace: function(){
            var a = arguments, o, i = 0, j, d, arg;
            for (; i < a.length; i++) {
                o = window;
                arg = a[i];
                if (arg.indexOf('.')) {
                    d = arg.split('.');
                    for (j = (d[0] == 'window') ? 1 : 0; j < d.length; j++) {
                        o[d[j]] = o[d[j]] || {};
                        o = o[d[j]];
                    }
                }
                else {
                    o[arg] = o[arg] || {};
                }
            }
        },
        /**
         * Executes the supplied function in the context of the supplied
         * object 'when' milliseconds later.  Executes the function a
         * single time unless periodic is set to true.
         * @method later
         * @for jQuery
         * @param when {int} the number of milliseconds to wait until the fn
         * is executed.
         * @param o the context object.
         * @param fn {Function|String} the function to execute or the name of
         * the method in the 'o' object to execute.
         * @param data [Array] data that is provided to the function.  This
         * accepts either a single item or an array.  If an array is provided,
         * the function is executed with one parameter for each array item.
         * If you need to pass a single array parameter, it needs to be wrapped
         * in an array [myarray].
         * @param periodic {boolean} if true, executes continuously at supplied
         * interval until canceled.
         * @return {object} a timer object. Call the cancel() method on this
         * object to stop the timer.
         */
        later: function(when, o, fn, data, periodic){
            when = when || 0;
            
            var m = fn, f, id;
            
            if (o && $.type(fn) === 'string') {
                m = o[fn];
            }
            
            f = (data === undefined) ? function(){
                m.call(o);
            }
            : function(){
                m.apply(o, $.makeArray(data));
            };
            
            id = (periodic) ? setInterval(f, when) : setTimeout(f, when);
            
            return {
                id: id,
                interval: periodic,
                cancel: function(){
                    if (this.interval) {
                        clearInterval(this.id);
                    }
                    else {
                        clearTimeout(this.id);
                    }
                }
            };
        },
        /**
         * @method extendIf
         * @param {Object} target
         * @param {Object} o
         */
        extendIf: function(target, o){
            if (o === undefined) {
                o = target;
                target = this;
            }
            for (var p in o) {
                if (typeof target[p] === 'undefined') {
                    target[p] = o[p];
                }
            }
            return target;
        },
        /**
         * Exchange string to hash
         * @param {Object} s
         * @param {Object} separator
         */
        unparam: function(s, separator){
            if (typeof s !== 'string') {
                return;
            }
            var match = s.trim().match(/([^?#]*)(#.*)?$/), hash = {};
            if (!match) {
                return {};
            }
            $.each(match[1].split(separator || '&'), function(i, pair){
                if ((pair = pair.split('='))[0]) {
                    var key = decodeURIComponent(pair.shift()), value = pair.length > 1 ? pair.join('=') : pair[0];
                    
                    if (value != undefined) {
                        value = decodeURIComponent(value);
                    }
                    
                    if (key in hash) {
                        if (!$.isArray(hash[key])) {
                            hash[key] = [hash[key]];
                        }
                        hash[key].push(value);
                    }
                    else {
                        hash[key] = value;
                    }
                }
            });
            return hash;
        },
        /**
         * jQuery.debug.js will rewrite this,
         */
        log: $.noop
    });
    
    $.namespace('jQuery.util.ua', 'jQuery.ui');
    
    $.extendIf($.util, {
        /**
         * Same as YUI's
         * @method substitute
         * @static
         * @param {string} str string template to replace.
         * @param {string} data string to deal.
         * @return {string} the substituted string.
         */
        substitute: function(str, data){
            return str.replace(/\{(\w+)\}/g, function(r, m){
                return data[m] !== undefined ? data[m] : '{' + m + '}';
            });
        },
        /**
         * escape HTML
         * @param {Object} str
         * @param {Bolean} attr	 Identify whether is the property deal with
         * @return {string}
         */
        escapeHTML: function(str, attr){
            if (attr) {
                return str.replace(/[<"']/g, function(s){
                    switch (s) {
                        case '"':
                            return '&quot;';
                        case "'":
                            return '&#39;';
                        case '<':
                            return '&lt;';
                        case '&':
                            return '&amp;';
                        default:
                            return s;
                    }
                });
            }
            else {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            }
        },
        /**
         * unescape HTML
         * @param {Object} str
         * @return
         */
        unescapeHTML: function(str){
            var div = document.createElement('div');
            div.innerHTML = str.replace(/<\/?[^>]+>/gi, '');
            return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
        },
        /**
         * go to new page . in order to resolve the problem of losing referrer when jumping to new page 
         * @param url {String} new page url
         * @param target {String} '_self'/'_blank'  
         */
        goTo : function(url, target){
            var BLANK = '_blank';
            target = target || BLANK;
            if (!$.util.ua.ie) {
                return window.open(url, target);
            }
            var link = document.createElement('a'), body = document.body;
            link.setAttribute('href', url);
            link.setAttribute('target', target);
            link.style.display = 'none';
            body.appendChild(link);
            link.click();
            if (target === BLANK) {
                setTimeout(function(){
                    try {
                        body.removeChild(link);
                    } 
                    catch (e) {
                    }
                }, 200);
            }
            return;
        }
    });
    //ua detect
    $.extendIf($.util.ua, {
        ie: !!$.browser.msie,
        ie6: !!($.browser.msie && $.browser.version == 6),
        ie67: !!($.browser.msie && $.browser.version < 8)
    });
    //feature detect
    $.extendIf($.support, {
        placeholder: !!('placeholder' in document.createElement('input')),
        JSON: window.JSON && JSON.parse && JSON.stringify,
        localStorage: window.localStorage && localStorage.setItem && localStorage.getItem
        //positionFixed: !$.util.ua.ie6
    });

    // Extend methods to Array object
    $.extendIf(Array.prototype, {
        /**
         * @method every
         * @param {Object} callback
         * @param {Object} thisObj
         */
        every: function(callback, thisObj){
            for (var i = 0, len = this.length; i < len; i++) {
                if (!callback.call(thisObj, this[i], i, this)) {
                    return false;
                }
            }
            return true;
        },
        /**
         * @method filter
         * @param {Object} callback
         * @param {Object} thisObj
         */
        filter: function(callback, thisObj){
            var res = [];
            for (var i = 0, len = this.length; i < len; i++) {
                if (callback.call(thisObj, this[i], i, this)) {
                    res[res.length] = this[i];
                }
            }
            return res;
            
        },
        /**
         * @param indexOf
         * @param {Object} elem
         * @param {Object} fromIndex
         */
        indexOf: function(elem, fromIndex){
            fromIndex = fromIndex || 0;
            for (var i = fromIndex, len = this.length; i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        },
        /**
         * @param lastIndexOf
         * @param {Object} elem
         * @param {Object} fromIndex
         */
        lastIndexOf: function(elem, fromIndex){
            fromIndex = fromIndex === undefined ? this.length : fromIndex;
            for (var i = fromIndex; -1 < i; i--) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        },
        /**
         * Remove item from array
         * @param {Object} elem
         * @return {Bolean}
         */
        remove: function(elem){
            var i = this.indexOf(elem);
            if (i !== -1) {
                this.splice(i, 1);
                return true;
            }
            else {
                return false;
            }
        },
        /**
         * @method some
         * @param {Object} callback
         * @param {Object} thisObj
         */
        some: function(callback, thisObj){
            for (var i = 0, len = this.length; i < len; i++) {
                if (callback.call(thisObj, this[i], i, this)) {
                    return true;
                }
            }
            return false;
        }
    });
    
    // Extend methods to String object
    $.extendIf(String.prototype, {
        trim: function(){
            return $.trim(this);
        },
        lenB: function(){
            return this.replace(/[^\x00-\xff]/g, '**').length;
        },
        // len ： char length
        cut: function(len, ext, extLen){
            var val = this, cl = 0, temp, delLen;
            
            extLen = extLen||0;
            ext = ext || '';
            if (val.lenB() <= len) {
                return val;
            }
            for (var i = 0, j = val.length, k = 1; i < j; i++) {
                var code = val.charCodeAt(i);
                if (code < 0 || code > 255) {
                    cl += 2;
                }
                else {
                    cl++;
                }
                if (cl > len) {
                	delLen = 0; 
                	while(extLen){
                		if( val.substring(i-k, i).lenB() < extLen ){
                			k++;
                		}else{
                			break;
                		}
                	}
                    return val.substr(0, i-k) + ext;
                }
            }
        }
    });
    
    /**
     * Fix Number.toFixed Function for MONEY calculate
     */
    if (!((0.009).toFixed(2) === '0.01' && (0.495).toFixed(2) === '0.50')) {
        var toFixed = Number.prototype.toFixed;
        Number.prototype.toFixed = function(fractionDigits){
            var tmp = this, pre = Math.pow(10, fractionDigits || 0);
            tmp *= pre;
            tmp = Math.round(tmp);
            tmp /= pre;
            return toFixed.call(tmp, fractionDigits);
        };
    }
})(jQuery);
