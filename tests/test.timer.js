describe('test timer', function() {

	describe('test default', function() {
	
		var timer;
	
		beforeEach(function(done) {
			
			requirejs([
				'app/timer'
				], function (tm) {
					
					timer = tm;
					
					done();
			});
	  });
	  
	  it('should have default index', function() {
	  	
	  	expect(timer.index).toBe(0);
	  });
  });
  
  describe('test counting', function() {
  
		var timer;
		var numberOfCounts = 10;
	
		beforeEach(function(done) {
			
			requirejs([
				'app/timer'
				], function (tm) {
					
					timer = tm;
					
					timer.tick = 40;
					
					timer.start(function () {});
					
					setTimeout(function () {
						done();
					}, (numberOfCounts * timer.tick) + 20);
			});
	  });
	  
	  it('setting tick and correct count', function() {
	  	
	  	expect(timer.index).toBe(numberOfCounts);
	  });
	  
	  it('reset counting', function() {
	  	
	  	timer.reset();
	  	
	  	expect(timer.index).toBe(0);
	  });
  });
});