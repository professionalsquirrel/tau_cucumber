import {Then} from '@cucumber/cucumber';  

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
    const links = $$(".LDF");
    links.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if (linkText) {
            assert(
                linkText.includes(keyword),
                `Link text does not include ${keyword}`
            )
        }

    })
})