/*
* If you create a derivative, please leave this text intact:
*
* FlowType.JS 1.0
* Copyright (c) 2013, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/
!function(i){i.fn.flowtype=function(n){var t=i.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35,lineRatio:1.45},n),m=function(n){var m=i(n),o=m.width(),a=o>t.maximum?t.maximum:o<t.minimum?t.minimum:o,e=a/t.fontRatio,u=e>t.maxFont?t.maxFont:e<t.minFont?t.minFont:e;m.css({"font-size":u+"px","line-height":u*t.lineRatio+"px"})};return this.each(function(){var n=this;m(this),i(window).resize(function(){m(n)})})}}(jQuery);