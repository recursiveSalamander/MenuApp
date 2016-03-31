describe('menuApp profile view Test', function() {

  it('should log in, go to profile page and check for user details', function() {

    // navigates to the sign in page
    browser.get('http://localhost:8000/#/signIn');

    // fills in the sign in form fields
    element(by.model('user.loginUsername')).sendKeys('nasir');
    element(by.model('user.loginPassword')).sendKeys('nasir');

    // clicks the sign in button
    element(by.id('signIn')).click();

    // waits for page to load and checks that the browser goes to the profile page
    browser.sleep(1000);

    // click profileview button
    element(by.id('profileView')).click();

    // checks that the url is the profile page
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/profileView');

});
  it('should have a username of Username: nasir', function() {
      element(by.binding('userInfo.username')).getText().then(function(name) {
          expect(name).toBe('Username: nasir');
      });
      expect(element(by.binding('userInfo.username')).getText()).toBe('Username: nasir');
  });

  it('should have a first name of First Name: nas', function() {
    element(by.binding('userInfo.first_name')).getText().then(function(name) {
      expect(name).toBe('First Name: nas');
  });
    expect(element(by.binding('userInfo.first_name')).getText()).toBe('First Name: nas');
});

  it('should have a last name of Last Name: nas', function() {
    element(by.binding('userInfo.last_name')).getText().then(function(name) {
      expect(name).toBe('Last Name: nas');
  });
    expect(element(by.binding('userInfo.last_name')).getText()).toBe('Last Name: nas');
});

  it('should have an email of Email: nas@test.com', function() {
    element(by.binding('userInfo.email')).getText().then(function(name) {
      expect(name).toBe('Email: nas@test.com');
  });
    expect(element(by.binding('userInfo.email')).getText()).toBe('Email: nas@test.com');
});
});

