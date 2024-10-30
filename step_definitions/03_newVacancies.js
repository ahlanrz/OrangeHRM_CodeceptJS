const { I } = inject();

Given('I click menu button Recruitment', () => {
    I.waitForElement('//span[text()="Recruitment"]', 5);
    I.click("//span[normalize-space()='Recruitment']");
});

When('I click button Vancancies', () => {
    I.wait(2);
    I.click("//a[normalize-space()='Vacancies']");
});

When('I click button add', () => {
    I.wait(2);
    I.click("//button[normalize-space()='Add']");
});

When('I fill vacancy name', () => {
    I.wait(1);
    I.fillField({xpath: "//input[@class='oxd-input oxd-input--active'])[2]"}, 'QA Engineer');
});

When('I select job title', () => {
    I.wait(1);
    I.selectOption('//label[text()="Job Title"]/following-sibling::div//select', jobTitle);
});

When('I fill description', () => {
    I.wait(1);
    I.fillField('textarea', 'Laki-laki');
});

When('I fill Hiring Manager', () => {
    I.wait(1);
    I.fillField({xpath: "//input[@placeholder='Type for hints...']"}, 'Ahlan');
});

When('I fill number of positions', () => {
    I.wait(1);
    I.fillField({xpath: "(//input[@class='oxd-input oxd-input--active'])[3]"}, '3');
});