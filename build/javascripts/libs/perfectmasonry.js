/*!
 * PerfectMasonry extension for Isotope
 *
 * Does similar things as the Isotopes "masonry" layoutmode, except that this one will actually go back and plug the holes
 * left by bigger elements, thus making a perfect brick wall. Profit!
 * 
 * Usage:
 * 	$('#grid').isotope({
 * 		layoutMode: 'perfectMasonry',
 *		perfectMasonry: {
 *			layout: 'horizontal',		// Set layout as vertical/horizontal (default: vertical)
 *			columnWidth: 200,			// Set/Prefer columns to x wide (default: width of first tile)
 *			rowHeight: 200,				// Set/Prefer rows to y high (default: height of first tile)
 * 
 *			liquid: true,				// Set layout as liquid (default: false)
 *			cols: 3,					// Force to have x columns (default: null)
 *			rows: 3,					// Force to have y rows (default: null)
 *			minCols: 3,					// Set min col count (default: 1)
 *			minRows: 3,					// Set min row count (default: 1)
 *			maxCols: 5,					// Set max col count (default: 9999)
 *			maxRows: 4					// Set max row count (default: 9999)
 * 		}
 * 	});
 *
 * 
 * @author Mikko Tikkanen, Zonear Ltd. <contact@zonear.com>
 */
(function(e,t){var n="1.2.1",r=null,i=null,s=null,o=!0;e.extend(e.Isotope.prototype,{_perfectMasonryReset:function(){var t=this.options.perfectMasonry.layout!="horizontal",n=this.options.perfectMasonry.liquid==1;o&&(o=!1,r=this,i=e(this.element.context),s=i.parent(),this.options.perfectMasonry.minCols=this.options.perfectMasonry.minCols||1,this.options.perfectMasonry.minRows=this.options.perfectMasonry.minRows||1,this.options.perfectMasonry.maxCols=this.options.perfectMasonry.maxCols||9999,this.options.perfectMasonry.maxRows=this.options.perfectMasonry.maxRows||9999),n&&e._data(window,"events").smartresize&&(e(window).off("smartresize.isotope"),e(window).on("resize.isotope.perfectmasonry",function(){if(!i.hasClass("isotope"))return;i.isotope("reLayout")}));var u=this.perfectMasonry={};this._getSegments(),this._getSegments(!0),this._perfectMasonryGetSegments();if(n){var a=s.width(),f=s.height();this.options.perfectMasonry.columnWidth=this.options.perfectMasonry.columnWidth||u.columnWidth,this.options.perfectMasonry.rowHeight=this.options.perfectMasonry.rowHeight||u.rowHeight,u.cols=this.options.perfectMasonry.cols||Math.floor(a/this.options.perfectMasonry.columnWidth),u.rows=this.options.perfectMasonry.rows||Math.floor(f/this.options.perfectMasonry.rowHeight),u.cols=Math.min(Math.max(u.cols,this.options.perfectMasonry.minCols),this.options.perfectMasonry.maxCols),u.rows=Math.min(Math.max(u.rows,this.options.perfectMasonry.minRows),this.options.perfectMasonry.maxRows);var l=t?u.columnWidth/(a/u.cols):u.rowHeight/(f/u.rows);u.columnWidth=Math.floor(u.columnWidth/l),u.rowHeight=Math.floor(u.rowHeight/l)}u.grid=new Array(this.perfectMasonry.cols),u.containerHeight=0,u.containerWidth=0},_perfectMasonryLayout:function(t){var n=this,r=this.perfectMasonry,i=n.options.perfectMasonry.layout!="horizontal",s=n.options.perfectMasonry.liquid==1;r.grid=new Array(r[i?"cols":"rows"]),t.each(function(){var t=e(this),o=s?t.data("colSpan"):Math.ceil(t.outerWidth()/(r.columnWidth+1)),u=s?t.data("rowSpan"):Math.ceil(t.outerHeight()/(r.rowHeight+1));o||(o=Math.ceil(t.outerWidth(!0)/(r.columnWidth+1)),u=Math.ceil(t.outerHeight(!0)/(r.rowHeight+1)),t.data("colSpan",o),t.data("rowSpan",u));var a=i?o:u,f=i?u:o,l=Math.max((i?r.cols-o:r.rows-u)+1,1),c=-1,h=0,p=0;while(++c<1e4){r.grid[c]=r.grid[c]||[];for(var d=0;d<l;d++){var v=r.grid[c][d];if(v)continue;var m=!0;if(o>1||u>1)for(var g=0;g<a;g++){for(var y=0;y<f;y++){r.grid[c+y]=r.grid[c+y]||[];if(r.grid[c+y][d+g]){m=!1;break}}if(!m)break}if(!m)continue;for(var g=0;g<a;g++)for(var y=0;y<f;y++)r.grid[c+y][d+g]=!0;var h=c,p=d;if(i)var h=d,p=c;r.containerWidth=Math.max(r.containerWidth,(h+a)*r.columnWidth),r.containerHeight=Math.max(r.containerHeight,(p+f)*r.rowHeight),n.options.perfectMasonry.liquid==1&&t.css({width:r.columnWidth*o,height:r.rowHeight*u}),n._pushPosition(t,h*r.columnWidth,p*r.rowHeight);return}}n._pushPosition(t,-9999,-9999)});var o=i?r.grid.length:r.grid[0].length,u=i?r.grid[0].length:r.grid.length;e(this.element.context).attr("data-isotope-rows",o).attr("data-isotope-cols",u)},_perfectMasonryGetContainerSize:function(){return{width:this.perfectMasonry.containerWidth,height:this.perfectMasonry.containerHeight}},_perfectMasonryResizeChanged:function(){var e=this.perfectMasonry,t=e.cols,n=e.rows;return this._perfectMasonryGetSegments(),this.options.perfectMasonry.layout=="horizontal"&&n!==e.rows?!0:t!==e.cols?!0:!1},_perfectMasonryGetSegments:function(){var e=this.perfectMasonry,t=this.options.perfectMasonry.parent||this.element.parent(),n=t.width();e.cols=Math.floor(n/e.columnWidth)||1;var r=t.height();e.rows=Math.floor(r/e.rowHeight)||1}})})(jQuery);