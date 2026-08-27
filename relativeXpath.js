//parant ,child ,and sibling relation

import { LocalValue } from "selenium-webdriver/bidi/protocolValue"
import { urlContains } from "selenium-webdriver/lib/until"

//example
//p[contains(text(),'Product Management & Design') ]/ancestor::div/ancestor::div[contains(@titel,'Product Management & Design')]

//example2 sibling relation

//div[contains(@titel,'Product Management & Design') ]/ancestor::div/following-sibling::div/div[contains(@titel,'Data Engineer')]]

going from parent to child we use backslash "/"



<--------------------demo evershop------------------->


//h3[contains(text(),'white')]/following-sibling::div/span[@class='regular-price']








