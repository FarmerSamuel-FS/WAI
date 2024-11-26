require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");

// Test 1: Verify the Homepage Title is "Home"
(async function homepageTitleTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000"); // Update with the correct local URL if needed
    const title = await driver.getTitle();
    console.log(
      title === "Home"
        ? "Homepage title test passed."
        : "Homepage title test failed.",
    );
  } finally {
    await driver.quit();
  }
})();

// Test 2: Verify the Contact Page Title is "Contact Us"
(async function contactPageTitleTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("contactLink")).click();
    await driver.wait(until.titleIs("Contact Us"), 1000);
    const contactTitle = await driver.getTitle();
    console.log(
      contactTitle === "Contact Us"
        ? "Contact page title test passed."
        : "Contact page title test failed.",
    );
  } finally {
    await driver.quit();
  }
})();

// Test 3: Verify Email Submission on Contact Page
(async function emailSubmissionTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/contact");
    await driver.findElement(By.id("formInput")).sendKeys("test@example.com");
    await driver.findElement(By.id("formSubmit")).click();
    const message = await driver.findElement(By.id("formMessage")).getText();
    console.log(
      message.includes("test@example.com")
        ? "Email submission test passed."
        : "Email submission test failed.",
    );
  } finally {
    await driver.quit();
  }
})();

