'use strict';

describe('contactList App E2E Testing', function() {
  it('should automatically redirect to / when location hash/fragment is empty', function() {

    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");

  });

  describe('index', function() {
    beforeEach(function() {
      browser.get('index.html#/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).
        toEqual('contactList');
    });
  });

  describe('contact 0 item', function() {
    beforeEach(function() {
      browser.get('index.html#/contact/0');
    });

    it('should have a name', function() {
          var name = element(by.binding('contact.firstName'));
          expect(name.getText()).
             toEqual('Mikias');
    });

 });

});
