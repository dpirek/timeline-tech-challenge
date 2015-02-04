describe('test service', function() {

	var responseData = null;

	beforeEach(function(done) {
		
		requirejs([
			'app/service'
			], function (service) {
				
				// Get data.
				service.get('/timeline.json', function (data) {
					
					responseData = data;
					done();
				});
		});
		
  });
  
  it('should have some data', function() {
  		
  	expect(responseData).toBeDefined();
  });
  
  it('should have the right object', function() {
  		
  	expect(responseData.firstName).toBeDefined();
  	expect(responseData.lastName).toBeDefined();
  	expect(responseData.age).toBeDefined();
  	expect(responseData.events).toBeDefined();
  });
});