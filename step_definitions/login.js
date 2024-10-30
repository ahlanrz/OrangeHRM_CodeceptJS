const { I } = inject();
// Add in your custom step files

Given('I navigate to website orangeHRM', () => {
  I.amOnPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

When('I fill username', () => {
  I.wait(5)
  I.fillField('username', 'Admin');
});

When('I fill password', () => {
  I.fillField('password', 'admin123');
});

When('I click on the login button', () => {
  I.click("//button[@type='submit']");
});

Then('I should see the dashboard page', () => {
  I.wait(5)
  I.see('Dashboard');
});