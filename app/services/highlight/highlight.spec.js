describe('highlights Factory', function(){

  var Hightlights;

	beforeEach(angular.mock.module('api.highlights'));

  beforeEach(inject(function(_Highlights_) {
    Highlights = _Highlights_;
  }));


	it('should exist', function() {
		expect(Highlights).toBeDefined();
	});


  describe('.all()', function() {
    
    it('should exist', function() {
      expect(Highlights.all).toBeDefined();
    });
  });

});