(function($){
	
	var options = {};
	var galleries = {};
	var elementCounter = 0;	 
	var images = {}; 
	var resizeTO;

	var _0x948e=["\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x63\x6F\x64\x65\x63\x61\x6E\x79\x6F\x6E\x2E\x6E\x65\x74","\x72\x6F\x6D\x61\x6E\x6F\x76\x69\x61\x6E\x2E\x6C\x6F\x63\x61\x6C","\x74\x69\x6C\x65\x73\x2D\x67\x61\x6C\x6C\x65\x72\x79\x2E\x63\x6F\x6D","\x73\x6F\x75\x72\x63\x65","\x6A\x71\x75\x65\x72\x79\x2D\x74\x67","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x2E\x74\x69\x6C\x65\x2D\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C","\x2E\x74\x69\x6C\x65\x2D\x76\x65\x72\x74\x69\x63\x61\x6C","\x66\x69\x72\x73\x74","\x3A\x65\x6D\x70\x74\x79","\x66\x69\x6E\x64","\x6C\x65\x6E\x67\x74\x68","\x2E\x74\x69\x6C\x65\x73\x2D\x69\x74\x65\x6D\x3A\x65\x6D\x70\x74\x79","\x6A\x74\x67\x2D\x61\x6C\x69\x67\x6E","\x64\x61\x74\x61","\x6A\x74\x67\x2D\x76\x61\x6C\x69\x67\x6E","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x41\x6C\x69\x67\x6E","\x76\x65\x72\x74\x69\x63\x61\x6C\x41\x6C\x69\x67\x6E","\x69\x6D\x67","\x61\x70\x70\x65\x6E\x64","\x72\x6F\x75\x6E\x64","\x6D\x69\x64\x64\x6C\x65","\x74\x6F\x70","\x62\x6F\x74\x74\x6F\x6D","\x63\x73\x73","\x63\x65\x6E\x74\x65\x72","\x6C\x65\x66\x74","\x72\x69\x67\x68\x74","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x66\x61\x64\x65\x49\x6E\x44\x75\x72\x61\x74\x69\x6F\x6E","\x66\x61\x64\x65\x49\x6E","\x68\x69\x64\x65"];function _jquerytg_insertImageInTile(_0xdf6ax2,_0xdf6ax3,_0xdf6ax4){if(location[_0x948e[0]]==_0x948e[1]||location[_0x948e[0]]==_0x948e[2]||location[_0x948e[0]]==_0x948e[3]){var _0xdf6ax5=galleries[_0x948e[5]+_0xdf6ax2][_0x948e[4]];var _0xdf6ax6=_0xdf6ax3[_0x948e[6]]/_0xdf6ax3[_0x948e[7]]>1?_0x948e[8]:_0x948e[9];var _0xdf6ax7=_0xdf6ax5[_0x948e[12]](_0xdf6ax6+_0x948e[11])[_0x948e[10]]();if(_0xdf6ax7[_0x948e[13]]==0){_0xdf6ax7=_0xdf6ax5[_0x948e[12]](_0x948e[14])[_0x948e[10]]();} ;var _0xdf6ax8=$(_0xdf6ax3)[_0x948e[16]](_0x948e[15]);var _0xdf6ax9=$(_0xdf6ax3)[_0x948e[16]](_0x948e[17]);if(_0xdf6ax8==undefined){_0xdf6ax8=options[_0x948e[18]];} ;if(_0xdf6ax9==undefined){_0xdf6ax9=options[_0x948e[19]];} ;var _0xdf6axa=_0xdf6ax3[_0x948e[6]];var _0xdf6axb=_0xdf6ax3[_0x948e[7]];var _0xdf6axc=_0xdf6ax7[_0x948e[6]]();var _0xdf6axd=_0xdf6ax7[_0x948e[7]]();var _0xdf6axe=_0xdf6axa/_0xdf6axb;var _0xdf6axf=_0xdf6axc/_0xdf6axd;var _0xdf6ax10=_0xdf6ax4[_0x948e[12]](_0x948e[20]);_0xdf6ax7[_0x948e[21]](_0xdf6ax4);if(_0xdf6axe<=_0xdf6axf){var _0xdf6ax11=Math[_0x948e[22]](_0xdf6axc/_0xdf6axe);var _0xdf6ax12=0;switch(_0xdf6ax9){default:;case _0x948e[23]:_0xdf6ax12=Math[_0x948e[22]]((_0xdf6ax11-_0xdf6axd)/-2);break ;;case _0x948e[24]:_0xdf6ax12=0;break ;;case _0x948e[25]:_0xdf6ax12=(_0xdf6ax11-_0xdf6axd)*(-1);;} ;_0xdf6ax10[_0x948e[26]]({height:_0xdf6ax11,width:_0xdf6axc,marginTop:_0xdf6ax12,marginLeft:0});} else {var _0xdf6ax13=Math[_0x948e[22]](_0xdf6axd*_0xdf6axe);var _0xdf6ax14=Math[_0x948e[22]]((_0xdf6ax13-_0xdf6axc)/-2);switch(_0xdf6ax8){default:;case _0x948e[27]:_0xdf6ax14=Math[_0x948e[22]]((_0xdf6ax13-_0xdf6axc)/-2);break ;;case _0x948e[28]:_0xdf6ax14=0;break ;;case _0x948e[29]:_0xdf6ax14=(_0xdf6ax13-_0xdf6axc)*(-1);;} ;_0xdf6ax10[_0x948e[26]]({height:_0xdf6axd,width:_0xdf6ax13,marginLeft:_0xdf6ax14,marginTop:0});} ;_0xdf6ax10[_0x948e[26]]({position:_0x948e[30],zIndex:1,top:0,left:0});_0xdf6ax10[_0x948e[33]]()[_0x948e[32]](options[_0x948e[31]]);_jquerytg_addCaption(_0xdf6ax4);} ;} ;

	function _jquerytg_addCaption(node) {		
		var caption = node.find(".caption");
		if(caption.length > 0) {
			if(options.captionOnMouseOver) {
				caption.hide();
				node.parents(".tiles-content").hover(
					function () {
						var to = setTimeout(function () {
							switch(options.captionAnimationType)
							{
								case "slide":
								default:
									caption.slideDown(options.captionAnimationDuration);
									break;
								case "fade":
									caption.fadeIn(options.captionAnimationDuration);
							}
						}, 200);					
						caption.data("to", to);	
					},
					function () {
						if(caption.data("to"))
							clearTimeout(caption.data("to"));
						switch(options.captionAnimationType)
						{
							case "slide":
							default:
								caption.slideUp(options.captionAnimationDuration);
								break;
							case "fade":
								caption.fadeOut(options.captionAnimationDuration);
						}
					}
				)
				caption.css({
					bottom:0,
					left:0,
					zIndex:2,
					position: "absolute",
					width: "100%",
					height: options.captionHeight,
					margin: 0
				});
				if(options.fullCaption)
					caption.css({
						height: "100%"
					});
			}
			//node.parents(".tiles-content").append(caption);
		}			
	}

	function _jquery_grow_children(amount, parent) {
		$(parent).children().each(function () {
			$(this).height($(this).height() + amount).addClass('grown-child');
			if($(this).children().length > 0)
				_jquery_grow_children(amount, this);
		});
	}

	function resize(e) {
		var new_h = $(this).children().eq(0).height();
		if($(this).hasClass("sliced-v")) {
			new_h += $(this).children().eq(1).height();
		}	
	
		$(this).height(new_h);
		if($(this).parent().hasClass("sliced-h")) {
			$(this).siblings().eq(0)
				.height(new_h)
				.trigger("jtg.parentgrown");
		}
		grown = true;
	}

	function parentGrown(e) {
		e.stopPropagation();
		var h = $(this).height();
		if($(this).hasClass("sliced-v")) {
			var h1 = $(this).children().eq(0).height();
			var h2 = $(this).children().eq(1).height();			

			$(this).children().eq(0)
				.height(h - h2)
				.trigger("jtg.parentgrown");
		} else {
			$(this).children().height(h).trigger("jtg.parentgrown");
		}
	}

	var grown = false;
	var loops = 0;
	function _jquerytg_makeTiles(k) {
		grown = false;
		var source = galleries["jquery-tg" + k].source;
		source.find(".jquery-tiles").remove();

		var tiles_cnt = $("<div class='jquery-tiles' />");
		source.empty().append(tiles_cnt);

		var w = source.width();
		var h = source.height();
		
		var anchorV = options.verticalAlign;
		var anchorH = options.horizontalAlign;

		var first = $("<div class='tiles-item' />");
		first.width(w);
		first.height(h);
		
		tiles_cnt.append(first);

		source.delegate(tiles_cnt, "jtg.resize", resize);
		tiles_cnt.delegate(first, "jtg.resize", resize);

		var depth = 0;
		while(depth < galleries["jquery-tg" + k].totalImages - 1) {

			var items = tiles_cnt.find(".tiles-item:empty");
			var index = 0;
			var biggerArea = 0;
			for(var i=0; i < items.size(); i++) {
				var _el = items.eq(i);
				var area = _el.width() * _el.height();
				if(area > biggerArea) {
					biggerArea = area;
					index = i;
				}
			}
			
			var item = items.eq(index);
			var itemWidth = item.width();
			var itemHeight = item.height();
			
			//if(i == 0)
			//	tiles_cnt.delegate(item, "jtg.resize", resize);

			var w1,  h1 = 0;
			var w2,  h2 = 0;
			
			if(itemHeight > itemWidth) {
				w1 = itemWidth;
				w2 = itemWidth;

				var t = itemHeight * .5;
				h1 = Math.round(t + (Math.random() * t - (t/2)));
				h2 = itemHeight - h1;

				item.addClass("sliced-v");
			} else {
				h1 = itemHeight;
				h2 = itemHeight;

				var t = itemWidth * .5;
				w1 = Math.round(t + (Math.random() * t - (t/2)));
				w2 = itemWidth - w1;

				item.addClass("sliced-h");
			}

			var child1 = $("<div class='tiles-item' />");
			child1.width(w1);
			child1.height(h1);
			child1.addClass(w1 > h1 ? "tile-horizontal" : "tile-vertical");
			child1.css({
				"float": "left",
				"overflow": "hidden"
			});
			
			var child2 = $("<div class='tiles-item' />");
			child2.width(w2);
			child2.height(h2);
			child2.addClass(w2 > h2 ? "tile-horizontal" : "tile-vertical");
			child2.css({
				"float": "left",
				"overflow": "hidden"
			});

			item
				.append(child1)
				.append(child2);

			item.delegate(child1, "jtg.resize", resize);

			child1.delegate(item, "jtg.parentgrown", parentGrown);
			child2.delegate(item, "jtg.parentgrown", parentGrown);

			if(options.tileMinHeight > 0) {
				if(h1 < options.tileMinHeight) {
					var add = options.tileMinHeight - h1;
					h1 = options.tileMinHeight;
					child1.height(h1).trigger("jtg.resize");
				}
				if(h2 < options.tileMinHeight) {
					var add = options.tileMinHeight - h2;
					h2 = options.tileMinHeight;
					child2.height(h2).trigger("jtg.resize");
				}		
			}						
			depth++;
		}
		var _empty = source.find(".tiles-item:empty");
	    for (var i = 0; i < _empty.size(); i++) {
		    var _el = _empty.eq(i);
		    _el.addClass("tiles-content");
		    _el.addClass(options.contentClass).css({
		        marginRight: options.margin,
		        marginBottom: options.margin,
		        width: _el.width() - options.margin,
		        height: _el.height() - options.margin,
		        position: "relative"
		    });
	    }

	    source.data("width", source.width());
	    if(grown)
	    	_jquerytg_makeTiles(k);
	    else
	    	loops = 0;
	}

	function _jquerytg_imgLoaded(img, node) {
		var k = $(img).data('k');
		var counter = galleries["jquery-tg" + k];
		
		images[img.src] = {
			width: img.width,
			height: img.height
		};

		_jquerytg_insertImageInTile(k, img, node);
		if(++counter.loadedImages == counter.totalImages) {

			$(".preload").remove();
			galleries["jquery-tg" + k].source.find(".loading").remove();

			if($.isFunction(options.callback)) {
				var source = galleries["jquery-tg" + k].source;
				options.callback.call(source);
			}
		}
	}

	$.fn.tilesGallery = function(user_options) {
		var defaults = {
			margin:3,
			responsive: true,
			captionOnMouseOver: true,
			captionAnimationDuration: 500,
			captionAnimationType: "fade",
			captionHeight: "100%",
			verticalAlign: 'middle',
			horizontalAlign: 'center',
			tileMinHeight:0,
			reloadOnResize: true,
			fadeInDuration: 2000,
			width:'auto',
			height: 'auto'
		};
		options = $.extend(defaults, user_options); 

		this.css({
			position: 'relative',
			overflow: 'hidden',				
			paddingTop: options.margin,
			paddingLeft: options.margin
		});

		return this.each(function() {
			var matchedElement = $(this); 
			var k = ++elementCounter + Math.random();
			galleries["jquery-tg" + k] = {
				totalImages : $("img", this).size(),
				loadedImages : 0,
				lastItem : 0,
				placedItems: [],
				source : matchedElement,
				tilesItems : matchedElement.children().clone()
			};

			if(options.width) {
				matchedElement.css({
					width: options.width - ($.browser.msie ? 0 : options.margin)
				});
			}
			if(options.height) {
				matchedElement.css({
					height: options.height - ($.browser.msie ? 0 : options.margin)
				});
			}

			matchedElement.addClass("tiles-node");
			matchedElement.append("<span class='loading' />");
			matchedElement.find(".loading").css({
				position: "absolute",
				top: options.height / 2,
				left: "50%"
			});

			$(".jquerytg-preload").remove();
			var element = this;

			_jquerytg_makeTiles(k);

			if(options.responsive) {
				$(window).resize(function () {
					clearTimeout(resizeTO);
					resizeTO = setTimeout(function () {
						var last_w = galleries["jquery-tg" + k].source.data("width");
						var w = galleries["jquery-tg" + k].source.width();

						if(last_w != w) {
							galleries["jquery-tg" + k].source.height(options.height);
							galleries["jquery-tg" + k].source.empty();
							galleries["jquery-tg" + k].source.append(galleries["jquery-tg" + k].tilesItems);
							$(galleries["jquery-tg" + k].source).tilesGallery(user_options);							
						}
					}, 150);
				});
			}

			$(".jquerytg-preload").remove();
			
			var _0x660f=["\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x72\x6F\x6D\x61\x6E\x6F\x76\x69\x61\x6E\x2E\x6C\x6F\x63\x61\x6C","\x74\x69\x6C\x65\x73\x2D\x67\x61\x6C\x6C\x65\x72\x79\x2E\x63\x6F\x6D","\x73\x69\x7A\x65","\x74\x69\x6C\x65\x73\x49\x74\x65\x6D\x73","\x6A\x71\x75\x65\x72\x79\x2D\x74\x67","\x69\x6D\x67","\x66\x69\x6E\x64","\x65\x71","\x68\x69\x64\x65","\x6A\x71\x75\x65\x72\x79\x74\x67\x2D\x70\x72\x65\x6C\x6F\x61\x64","\x61\x64\x64\x43\x6C\x61\x73\x73","\x6E\x6F\x64\x65","\x64\x61\x74\x61","\x6A\x74\x67\x2D\x76\x61\x6C\x69\x67\x6E","\x6A\x74\x67\x2D\x61\x6C\x69\x67\x6E","\x69\x6E\x64\x65\x78","\x61\x6C\x74","\x61\x74\x74\x72","\x64\x61\x74\x61\x2D\x6B","\x6F\x6E\x6C\x6F\x61\x64","\x73\x72\x63","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79"];if(location[_0x660f[0]]==_0x660f[1]||location[_0x660f[0]]==_0x660f[2]){var element=this;for(var i=0;i<galleries[_0x660f[5]+k][_0x660f[4]][_0x660f[3]]();i++){var imgEl=galleries[_0x660f[5]+k][_0x660f[4]][_0x660f[8]](i)[_0x660f[7]](_0x660f[6]);var image= new Image();var img=$(image)[_0x660f[18]](_0x660f[19],k)[_0x660f[18]](_0x660f[17],imgEl[_0x660f[18]](_0x660f[17]))[_0x660f[13]](_0x660f[16],i)[_0x660f[13]](_0x660f[15],imgEl[_0x660f[13]](_0x660f[15]))[_0x660f[13]](_0x660f[14],imgEl[_0x660f[13]](_0x660f[14]))[_0x660f[13]](_0x660f[12],galleries[_0x660f[5]+k][_0x660f[4]][_0x660f[8]](i))[_0x660f[11]](_0x660f[10])[_0x660f[9]]();image[_0x660f[20]]=function (){var _0x5289x6=$(this)[_0x660f[13]](_0x660f[16]);_jquerytg_imgLoaded(this,$(this)[_0x660f[13]](_0x660f[12]));} ;image[_0x660f[21]]=imgEl[_0x660f[18]](_0x660f[21]);$(_0x660f[23])[_0x660f[22]](img);} ;} ;
			
		});
	}

})(jQuery);;
