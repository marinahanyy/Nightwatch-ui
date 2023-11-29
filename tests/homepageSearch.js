module.exports = {
    'My search for dresses test case'(browser){
        //this to check that the url shown after pressing search
        //contains word dress and that the list of the dresses exist and shown on the page
        browser
             .url('http://automationpractice.multiformis.com/index.php')
             .waitForElementVisible('input#search_query_top')
             .setValue('input#search_query_top', "dress")
             .pause(10000)
             .click('button[name=submit_search]')
             .assert.urlContains('search_query=dress')
             .waitForElementVisible('ul#product_list')

        
    }
}
