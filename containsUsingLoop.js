import { Builder, Key, Browser, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

const partialData=["Product Management ","Business & Marketing","Data Engineering"];

async function run() {
    await driver.get("https://ostad.app/");
    await driver.sleep(4000);

    //Dynamic Xpath
    for(let i=0;i<partialData.length;i++){

      await driver.findElement(By.xpath(`(//p[contains(text(),'${partialData[i]}') ])`)).click();  
      await driver.sleep(2000);
    }
    
    await driver.sleep(2000);



}

run();


