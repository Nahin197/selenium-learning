import { Builder, Key, Browser, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function run() {
  await driver.get("https://ostad.app/");
  await driver.sleep(4000);

  
  //if know partially something of a class we can use contains to detect that element
  await driver.findElement(By.xpath("(//p[contains(@class,'text-body-b2 whitespace-nowrap line-clamp-1') ])[2]")).click();
  await driver.sleep(2000);
 

  
}

run();


