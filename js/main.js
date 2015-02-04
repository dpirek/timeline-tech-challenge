// App config.
requirejs.config({
  baseUrl: 'js',
  urlArgs: '_r=' + Math.random(),
  paths: {
  	'jquery': 'lib/jquery',
  	'underscore': 'lib/underscore',
	  'backbone': 'lib/backbone',
  }
});

// App init.
requirejs([
	'jquery',
	'underscore',
	'backbone',
	'app/service',
	'app/timeline'
	], function ($, _, Backbone, service, Timeline) {
		
		// Get data.
		service.get('/timeline.json', function (data) {
			
			// Render view.
			var timeline = new Timeline({model: data});
			
			// Configure interval per year.
			timeline.tick = 2000;
		});
});