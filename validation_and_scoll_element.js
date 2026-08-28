import { Builder, Key, Browser, By } from "selenium-webdriver";
import { expect } from "chai";



const driver = new Builder().forBrowser(Browser.CHROME).build();

const partialData = ["Artificial Intelligence", "Product Management", "Data Engineering", "Business"];
const productManagementText = ["Master", "AI & ML", "Design", "Management","Forward","Become"];

async function run() {
  //for maximizing the window
  await driver.manage().window().maximize();
  await driver.get("https://ostad.app/");

  //page zoom (after the page loads)
  // await driver.executeScript("document.body.style.zoom='67%'");

  await driver.sleep(4000);

  //to scoll a little bit after the page loads

  // await driver.executeScript(`window.scrollBy({top: 300,left: 0,behavior: 'smooth'});`);

  await driver.executeScript("window.scrollBy(0, 300);");
  await driver.sleep(3000);

  const courseHeader = await driver.findElement(By.xpath(`(//p[contains(text(),'${partialData[0]}')])[1]`));
  await courseHeader.click();


  //scroll the element to a specific position
  await driver.executeScript("arguments[0].scrollIntoView({ block: 'start', behavior: 'smooth' });", courseHeader);
  await driver.sleep(3000);


  // here we use findElements ..only added the 's'
  const getCourseName = await driver.findElements(By.xpath("//a[@id='home_courses_course_card']/div/div[contains(@class,'w-full grow')]/p"));

  for (let i = 0; i < getCourseName.length; i++) {

    console.log(await getCourseName[i].getText());
    let course = await getCourseName[i].getText();
    const isContains = productManagementText.some((text) => course.includes(text));
    console.log(isContains);
    expect(isContains).to.be.true;


  }

  await driver.sleep(4000);

}

run();


