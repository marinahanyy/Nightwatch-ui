module.exports = {
    'shope store: contact us form'(browser) {
      browser
           .url('http://automationpractice.multiformis.com/index.php?controller=contact')
           //this test to check that all elements are visible in the contact us page
           .assert.visible('.bottom-indent')
           .assert.visible('body')
           .saveScreenshot('tests_output/visibilityofelements.png')

        browser
           .window.open('window')
           .url('http://automationpractice.multiformis.com/index.php?controller=contact')
           //this test to check that an error occur when you enter invalid email
           .waitForElementVisible('input#email', 2000, false)
           .click('input#email')
           .pause(500)
           .setValue('input#email', "marina.hanyl-----")
           .pause(1000)
           .click('button#submitMessage')
           .assert.visible('.alert-danger')
           .saveScreenshot('tests_output/invalidmail.png')

        browser
            .window.open('window')
            .url('http://automationpractice.multiformis.com/index.php?controller=contact')
            //this to check that file and order refrence are optional and not required when subject
            //heading is customer service
            .click('#id_contact')
            .click('select[id="id_contact"] option[value="2"]')
            .click('input#email')
            .setValue('input#email',"marinahany588@gmail.com")
            .click('#message')
            .setValue('#message','I have problem with my order')
            .click('button#submitMessage')
            .pause(1000)
            .assert.visible('.alert-success')
            .saveScreenshot('tests_output/optionalelements.png')




        browser
            .window.open('window')
            .url('http://automationpractice.multiformis.com/index.php?controller=contact')
            //this to check that file and order refrence are optional and not required when subject
            //heading is Webmaster
            .click('#id_contact')
            .click('select[id="id_contact"] option[value="1"]')
            .click('input#email')
            .setValue('input#email',"marinahany588@gmail.com")
            .click('#message')
            .setValue('#message','The website is not loading')
            .click('button#submitMessage')
            .pause(1000)
            .assert.visible('.alert-success')
            .saveScreenshot('tests_output/optionalelements#2.png')
        

        browser
           // .window.open('window')
            .url('http://automationpractice.multiformis.com/index.php?controller=contact')
            //this to check that you must select Subject heading before sending the form
            .click('input#email')
            .setValue('input#email',"marinahany588@gmail.com")
            .click('#message')
            .setValue('#message','The website is not loading')
            .click('button#submitMessage')
            .pause(1000)
            .assert.visible('.alert-danger')
            .saveScreenshot('tests_output/required_subject.png')


        
        browser
            // .window.open('window')
             .url('http://automationpractice.multiformis.com/index.php?controller=contact')
             //this to check that you must write your email before sending the form
             .click('#id_contact')
             .click('select[id="id_contact"] option[value="1"]')
             .click('#message')
             .setValue('#message','The website is not loading')
             .click('button#submitMessage')
             .pause(1000)
             .assert.visible('.alert-danger')
             .saveScreenshot('tests_output/required_email.png')
    
        browser
             // .window.open('window')
              .url('http://automationpractice.multiformis.com/index.php?controller=contact')
              //this to check that you must write a message before sending the form
              .click('#id_contact')
              .click('select[id="id_contact"] option[value="1"]')
              .click('input#email')
              .setValue('input#email',"marinahany588@gmail.com")
              .click('button#submitMessage')
              .pause(1000)
              .assert.visible('.alert-danger')
              .saveScreenshot('tests_output/required_message.png')
       }
     }
