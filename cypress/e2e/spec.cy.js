describe('Time Test', () => {

  it('Checks website time and actual time with 4 hours forward', () => {
    cy.viewport(1280, 720)
    cy.visit('https://portal.fortesdata.com/');
    cy.xpath('//*[@id="login_form"]/div[1]/div/input').click().type('y.iqbal@it22.nl')
    cy.xpath('//*[@id=\"login_form\"]/div[2]/div/input').click().type('Fortes1234%')
    cy.xpath('//*[@id="login_button"]').click()
    cy.get('.jss14 > .MuiButtonBase-root').click()
    cy.get('.jss43 > .MuiPaper-root > :nth-child(2)').click()
    cy.xpath('//*[@id="root"]/div[2]/header/div[1]/div/div/div/div[3]/ul[5]/ul/li/button').click()
    cy.xpath('//*[@id="root"]/div[2]/header/div[1]/div/div/div/div[3]/ul[5]/ul/li/div/div/div/ul/li[1]/a/span[1]/div').click()

    cy.wait(2000)
    // Get the time on the website as a string

    cy.xpath('//*[@id="root"]/div[2]/div/div/div/div/div/div[2]/div/div/div[3]/div[1]/table/tbody/tr[1]/td[1]/div/div').invoke('text').then((websiteTime) => {

      // Parse the website time string into a Date object
      const websiteDate = new Date(websiteTime);

      // Get the current actual time as a Date object
      const currentDate = new Date();

      // Calculate the time difference in minutes between the website time and actual time
      const timeDifferenceInMinutes = Math.round((currentDate.getTime() - websiteDate.getTime()) / 1000 / 60);

      // Check if the time difference is 4 hours(240 minutes)
      expect(timeDifferenceInMinutes).to.equal(240);
    });
  });
});
