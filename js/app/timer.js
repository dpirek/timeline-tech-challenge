/**
 Timer module.

 @module timer
**/

define(['underscore'], function (_) {

	return {
		index: 0,
		tick: 50,
		start: function (change) {
			
			var self = this;
			
			this.interval = setInterval(function () {
			
				self.index++;
				
				change(self.index);
			}, this.tick);
			
			change(self.index);
		},
		stop: function () {
		
			clearInterval(this.interval);
		},
		reset: function () {
			
			// Clear interval.
			clearInterval(this.interval);
			
			// Reset counter.
			this.index = 0;
		}
	};
});