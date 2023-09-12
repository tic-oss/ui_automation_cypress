# ui_automation_cypress 

Cypress is a modern and open-source end-to-end testing framework that is primarily used for testing web applications. It has gained popularity in the software development and testing communities due to its user-friendly and developer-centric approach to testing. Here's an overview of Cypress:

1. **End-to-End Testing**: Cypress is designed for end-to-end testing, which means it allows you to simulate user interactions with a web application, just like a real user would. You can perform actions such as clicking buttons, filling out forms, and navigating between pages.

2. **JavaScript-based**: Cypress is built entirely using JavaScript, and it's primarily used with JavaScript-based applications. You write your tests using JavaScript or TypeScript, which makes it accessible to web developers familiar with these languages.

3. **Real-time Reload**: One of the standout features of Cypress is its ability to provide real-time feedback during test execution. As you write and run your tests, Cypress automatically reloads and updates the test runner in real-time. This helps in quickly identifying and debugging issues.

4. **Debugging**: Cypress provides a built-in interactive debugging tool. You can set breakpoints in your test code and use the Cypress Test Runner to step through test execution, inspect variables, and interact with the application under test.

5. **Time Travel**: Cypress allows you to "time travel" through the application's state at any point during a test. This feature helps you understand how the application behaves at different stages of your test, making it easier to diagnose problems.

6. **Automatic Waiting**: Cypress automatically waits for elements to become available or for specific conditions to be met before interacting with them. This eliminates the need for explicit waits and timeouts in your test code.

7. **Cross-Browser Testing**: While initially focused on Chrome, Cypress has expanded its support to include other browsers, such as Firefox and Microsoft Edge. However, it's important to note that Cypress operates differently from traditional cross-browser testing tools, as it runs directly in the browser rather than using WebDriver.

8. **Mocking and Stubbing**: Cypress makes it easy to mock and stub network requests and responses. This allows you to control the behavior of APIs and external services during testing.

9. **Headless Mode**: Cypress can be run in headless mode for automated testing on servers or in continuous integration (CI) pipelines.

10. **Plugins and Extensibility**: Cypress is highly extensible, and you can enhance its functionality with various plugins and custom commands.

11. **Community and Active Development**: Cypress has an active and growing community of users and contributors. The framework is actively maintained and receives frequent updates and enhancements.

12. **Challenges**: While Cypress offers many advantages, it may not be suitable for all testing scenarios. It may not work well with certain types of applications, such as those using iframes from different domains.

Cypress is a developer-friendly testing framework that emphasizes simplicity and fast feedback, making it a popular choice for modern web application testing. Its interactive and real-time testing capabilities make it particularly attractive for agile development teams.

**Architecture diagram**
![image](https://github.com/tic-oss/ui_automation_cypress/assets/141485124/a6158f64-4047-4061-8ae6-5a52241827dd)

**Setup and execution**
Setting up Cypress for automated testing involves several steps. Here's a step-by-step guide to getting started with Cypress:

1. Prerequisites:
    -> Make sure you have Node.js installed on your system. You can download it from the official Node.js website (https://nodejs.org/).
    -> A text editor or integrated development environment (IDE) for writing test scripts. Visual Studio Code is a popular choice.
   
2. Create a New Project:
   -> Create 22a new directory for your Cypress project or navigate to an existing project's root directory.
   -> Clone project (https://github.com/tic-oss/ui_automation_cypress.git)
  
3. Initialize a Node.js Project:
   -> Open your terminal or command prompt and navigate to your project directory.
   -> Run the following command to initialize a new Node.js project (if you haven't already done so):
      **npm init -y**
   
4. Install Cypress:
   -> Install Cypress as a development dependency in your project by running the following command:
    **npm install cypress --save-dev**
   
5. Open Cypress:
   -> After installation, you can open Cypress by running:
    **npx cypress open**
   -> This command will open the Cypress Test Runner.

6. Project Structure:
  -> Cypress expects your test files to be located in the cypress/integration directory by default. Create this directory if it doesn't exist.
   
7. Write Your First Test:
  -> Inside the cypress/integration directory, create a new JavaScript (or TypeScript) file for your test, e.g., sample.spec.js.
**// cypress/integration/sample.spec.js
describe('My First Test', () => {
  it('Visits the homepage', () => {
    cy.visit('https://example.com');
    cy.contains('Welcome to Example.com');
  });
});**

8. Run Your Test:
  -> Back in the Cypress Test Runner, you should see your test file listed. Click on it to run the test.

9. View Test Results:
  -> Cypress will open a new browser window and execute your test. You can watch the test steps in real-time and inspect the browser's state as the test runs.

10. Writing More Tests:
  -> You can create additional test files in the cypress/integration directory and organize your tests into different files and folders.

11. Custom Configuration (Optional):
  -> You can create a cypress.json configuration file in your project's root directory to customize various Cypress settings, such as browser choice, base URL, and more.

12. Continuous Integration (CI) (Optional):
  -> If you plan to use Cypress in a CI/CD pipeline, follow your CI provider's documentation for setting up Cypress in your build environment.

13. Additional Plugins (Optional):
  -> Cypress supports various plugins that can extend its functionality. You can install and configure these plugins based on your testing needs.

That's the basic setup process for Cypress. Once you have Cypress installed and your tests written, you can start automating your web application tests and gaining valuable feedback on your application's functionality and behavior.





