/* CURRENTLY IN: Javascript/main.js */
(function() {
	var anchors = $('.anchor-tab');


	anchors.on('click', scrollHandler);

	function scrollHandler() {
		var me = $( this );
		var index = me.parent().index() + 1;
		var tabSelector = '#tab'+index;
		var scrollTop = $(tabSelector)[0].offsetTop - $('.top-navigation').outerHeight() - 20;

		console.log( );

		var body = $("html, body");
		
		body.animate(
			{scrollTop:scrollTop}
			, 500
			, 'swing'
			, function() { }
		);
	}
})();