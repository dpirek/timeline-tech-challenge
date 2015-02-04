/**
 Timeline widget.

 @module timeline
**/

define([
	'jquery',
  'backbone',
  'app/timer'
], function ($, Backbone, timer) {

	return Backbone.View.extend({

		el: "#timeline",

		events: {
			'click button': 'togglePause'
		},
		
		isPlaying: false,
				
		togglePause: function (e) {
		
			var self = this;
			
			if (this.isPlaying) {
				
				this.$button.text('start');
				
				timer.stop();
				this.isPlaying = false;
			} else {
				
				self.$button.text('pause');
				
				// Pass tick to timer.
				if(self.tick) {
					timer.tick = self.tick;
				}
				
				// Start timer.
				timer.start(function (index) {

					if(index === self.model.age) {
						
						timer.reset();
						self.$button.text('play');
						self.isPlaying = false;
					}
					
					self.render(index);
				});
				
				this.isPlaying = true;
			}
		},
		
		getEvent: function (age) {
			
			var content = false;
			var found = false;
			
			_.forEach(this.model.events, function (item) {
				if (item.age === age && !found) {
					event = item;
					found = true;
				}				
			});
			
			return event;
		},
		
		initialize: function () {

			// Asign properties.
			this.age = this.model.age;
			this.firstName = this.model.firstName;
			this.lastName = this.model.lastName;
			
			// Cashe elements.
			this.$content = $('.box', this.el);
			this.$button = $('button', this.el);
		},
		
		render: function (age) {
						
			var event = this.getEvent(age);
			
			// Check for match.
			if (event) {
				this.$content.html('At the age of ' + event.age + ' ' + this.firstName + ' ' + event.content);
			}
		}
	});
});