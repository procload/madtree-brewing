!function(){$(function(){var e,t;return $.getJSON("/data/events.json",function(e){var t,n;return $("body.home").length>0?(t=$("#events_template").html(),n=Handlebars.compile(t),$("#event-list").html(n(e))):void 0}),e=[],t=function(t){var n,r,l;return console.log(t.title),l=moment(),n=moment().year(),r=moment(t.date).year(n),r>l&&""!==t.title?e.push(t):void 0},Handlebars.registerHelper("listFirstThree",function(n,r){var l,o,i,a,s,f;for(e=[],s=0,f=n.length;f>s;s++)l=n[s],t(l);if(a="",o=0,i=3,console.log(e.length),e.length>2)for(;i>o;)a+=r.fn(e[o]),o++;else for(;o<e.length;)a+=r.fn(e[o]),o++;return a})})}.call(this);