describe('menuApp Logout Test', function() {

  it('should sign in and go to restaurant listing and logout', function() {

    // navigates to the sign in page
    browser.get('http://localhost:8000/#/signIn');

    // fills in the sign in form fields
    element(by.model('user.loginUsername')).sendKeys('nasir');
    element(by.model('user.loginPassword')).sendKeys('nasir');

    // clicks the sign in button
    element(by.id('signIn')).click();

    // waits for page to load and checks that the browser goes to the profile page
    browser.sleep(3000);

    // click logout button
    element(by.id('logout'))

    // checks that the url is the profile page
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signIn');
  });
});

