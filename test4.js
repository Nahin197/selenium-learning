import { Builder, Key, Browser, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function run() {
  await driver.get("https://ostad.app/");
  await driver.sleep(4000);
  //  await driver.findElement(By.css("div[title='Web & App Development']")).click();
  //xpath of the login button
  await driver.findElement(By.xpath("//button[@id='nav_btn_login']")).click();

  //login button by id
  await driver.findElement(By.id("nav_btn_login")).click();
  await driver.sleep(2000);

  //if i know only text
  await driver.findElement(By.xpath("//div[text()='Product Management & Design']")).click();

  await driver.findElement(By.xpath("//div[@title='Product Management & Design']")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//div[@title='Web & App Development']")).click();
  await driver.sleep(4000);
}

run();


