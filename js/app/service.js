/**
 Service layer.

 @module service
**/

define(['jquery'], function ($) {

	return {

		// Gets data with implemented cashe.
		get: function (url, callBack) {
			
			$.ajax({
				type: 'GET',
				url: url,
				contentType: 'application/json',
				dataType: 'json',
				success: callBack,
				error: callBack
			});
		}
	};
});