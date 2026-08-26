import { Builder, Key, Browser ,By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

 async function run (){
     await driver.get("https://opensource-demo.orangehrmlive.com/");
     await driver.sleep(2000);
     await driver.findElement(By.xpath("//input[@name='username']")).sendKeys("admin");
     await driver.findElement(By.xpath("//input[@name='password']")).sendKeys("admin123");
     await driver.findElement(By.xpath("//button[@type='submit']")).click();
     await driver.sleep(2000);
     await driver.quit();




}

run();


