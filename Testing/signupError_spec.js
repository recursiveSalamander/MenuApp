describe('menuApp signup Test', function() {

  it('should sign up with a user that exists and return an error', function() {

    // navigates to the sign in page
    browser.get('http://localhost:8000/#/signUp');

    // fills in the sign in form fields
    element(by.model('user.first_name')).sendKeys('nasir');
    element(by.model('user.last_name')).sendKeys('wahab');
    element(by.model('user.email')).sendKeys('nasir@test.com');
    element(by.model('user.username')).sendKeys('nasir');
    element(by.model('user.password')).sendKeys('nasir');
    element(by.model('user.confirmpassword')).sendKeys('nasir');

    // clicks the sign in button
    element(by.id('signout_button')).click();

    // checks that the url is the profile page
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signUp');
  });
});

