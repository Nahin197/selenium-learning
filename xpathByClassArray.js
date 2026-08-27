import { Builder, Key, Browser, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function run() {
  //for maximizing the window
  await driver.manage().window().maximize();
  await driver.get("https://ostad.app/");
  await driver.sleep(4000);

  
  //this is not a good trick but sometime if we dont have any way we can do by this way
  await driver.findElement(By.xpath("(//div[@class='flex flex-col justify-center items-start gap-0.5'])[2]")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("(//div[@class='flex flex-col justify-center items-start gap-0.5'])[3]")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("(//div[@class='flex flex-col justify-center items-start gap-0.5'])[4]")).click();
  await driver.sleep(2000);

  
}

run();


