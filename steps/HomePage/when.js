import {When} from '@cucumber/cucumber';  

When(/^the user enters "(.*)" into the search bar$/, keyword =>{
    $(".sadfsfasfs").waitForDisplayed(5000);
    $(".sadfsfasfs").click();
    $(".sadfsfasfs").setValue(keyword);
    $(".sfasfs .dskfsdf").waitForDisplayed(5000);
    $(".sfasfs .dskfsdf").click();
});