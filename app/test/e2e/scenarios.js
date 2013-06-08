describe('App', function() {
  describe('Home view', function() {
    beforeEach(function() {
      browser().navigateTo('../../../');
    });

    it('should list NPM packages', function() {
      expect(repeater('.npm.packages tr', 'package row').count()).toEqual(17);
      expect(repeater('.npm.packages tr a', 'package link').count()).toEqual(17);
    });

    it('should list Bower packages', function() {
      expect(repeater('.bower.packages tr', 'package row').count()).toEqual(7);
      expect(repeater('.bower.packages tr a', 'package link').count()).toEqual(0);
    });
  });
});
