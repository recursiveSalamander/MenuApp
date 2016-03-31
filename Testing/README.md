# Testing Procedures

1. Type 'npm install -g protractor' in your terminal.
2. Type 'webdriver-manager update' in your terminal.
3. Type 'webdriver-manager start' in your terminal to start up the testing server.
  A. If you do not have the latest Java SE Development Kit it will redirect you or
     give you a link to update or download the kit.
4. There are four test to run. Run the commands without brackets in the main folder in terminal:
  A. protractor testing/signin_conf.js (checks the sign in functionality)
  B. protractor testing/signout_conf.js (checks the sign out functionality)
  C. protractor testing/signupError_conf.js (checks for sign up errors)
  D. protractor testing/profileView_conf.js (checks for username, first name, last name and email in profile page)