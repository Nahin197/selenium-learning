import { Builder, Key, Browser, By } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

const partialData = ["Artificial Intelligence", "Product Management", "Data Engineering", "Business"];
const productManagementText = ["UI", "UX", "Design"];

async function run() {
  //for maximizing the window
  await driver.manage().window().maximize();
  await driver.get("https://ostad.app/");
  await driver.sleep(4000);




  //  await driver.findElement(By.xpath(`(//p[contains(text(),'${partialData[0]}')])[1]`)).click();

  // here we use findElements ..only added the 's'
  //  const getCourseName= await driver.findElements(By.xpath("//a[@id='home_courses_course_card']/div/div[contains(@class,'w-full grow')]/p"));

  //  for (let i=0;i<getCourseName.length;i++){

  //   console.log(await getCourseName[i].getText());


  //  }


  //   await driver.sleep(4000);



  //doing some mojjjjaaaaaaaaaaaaaaa



  for (let i = 0; i < partialData.length; i++) {
    await driver.findElement(By.xpath(`(//p[contains(text(),'${partialData[i]}')])[1]`)).click();
    await driver.sleep(2000);
    const getCourseName = await driver.findElements(By.xpath("//a[@id='home_courses_course_card']/div/div[contains(@class,'w-full grow')]/p"));

    for (let j = 0; j < getCourseName.length; j++) {

      console.log(await getCourseName[j].getText());

      


    }
    console.log("------------------------------next course---------------------------------");

  }




}

run();


//This means: "Wait until the course elements actually appear, up to 10 seconds." If they appear in 500 ms, Selenium continues immediately instead of always waiting 2 seconds.

//this is a good practise

// import { until } from "selenium-webdriver";

// await driver.wait(
//   until.elementsLocated(
//     By.xpath("//a[@id='home_courses_course_card']/div/div[contains(@class,'w-full grow')]/p")
//   ),
//   10000
// );